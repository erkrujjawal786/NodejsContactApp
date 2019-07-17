var express = require('express');
var router = express.Router();

var register = require('../api/controller/register');
var loginapi = require('../api/controller/loginapi');
var backmydataapi = require('../api/controller/backmydataapi');
var jwt = require('jsonwebtoken');
var user = require('../api/modal/registermodal');
var dataapi = require('../api/controller/dataapi');
var logoutapi = require('../api/controller/logoutapi');
var updaterowApi = require('../api/controller/updaterowApi');
var deleterowApi = require('../api/controller/deleterowApi');


var verifytoken = function (req, res, next) {
  console.log("req.headers.Authorization", req.headers)
  console.log("req.headers.Authorization", req.headers.authorization)
  var token = req.headers.authorization
  if (req.headers.authorization) {
    jwt.verify(token, "ilovemyjob", function (err, decoded) {
      if (err) {
        return res.redirect('/');
      } else {
        console.log("decoded", decoded.email);
        var email = decoded.email;
        user.findOne({ email: email }).then((response) => {
          console.log('email founde by token', response);
          if (response == null || response == "") {
            return response.redirect('/');
          }
          req.currentuser = response;
          console.log("cureent user", req.currentuser);
          next()
        }).catch((err) => {
          return response.redirect('/');
        });
      }
    });

  } else {
    console.log("000000000000000000")
    return res.redirect('/');

  }
}
router.post('/register', register.signup);

// router.post('/register',function(res,req){
//     register.signup
//     console.log(req.body,res.body);
// });
router.post('/loginApi', loginapi.login);
router.post('/backmydataapi', verifytoken, backmydataapi.mydata);
router.get('/datahistory', verifytoken, dataapi.fetchdata);
router.post('/logoutApi', logoutapi.logouts);
router.post('/updaterow', updaterowApi.updaterow);
router.post('/deleterow', deleterowApi.deleterow);
module.exports = router;
