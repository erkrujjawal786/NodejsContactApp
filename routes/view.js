var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');
var user = require('../api/modal/registermodal');
var db = require('../api/modal/mydatamodal');

var afterlogin = function (req, res){
  
}

var verifyToken = function (req, res, next) {
  // console.log('req', req, res);
  // console.log("SHOW TOKEN", req);
  var token = req.cookies.jwtToken
  // console.log('token', token)
  if (req.cookies.jwtToken) {
    jwt.verify(token, "ilovemyjob", function (err, decoded) {
      if (err) {
        return res.redirect('/');
      } else {
        // console.log("decoded", decoded);
        var email = decoded.email;
user.findOne({email:email}).then((response) => {
  // console.log('email founde by token', response);
  if(response == null || response == ""){
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

router.get('/', function (req, res) {
  res.render('login', { title: '' });
});

router.get('/signup', function (req, res) {
  res.render('index', { title: "login" });
});

router.get('/mydata',verifyToken, function (req, res) {
  console.log( req.currentuser,"resssss==========================");
  var id = req.currentuser._id;
 

    res.render('mydata', { title: "" ,nmae:req.currentuser.email});
});



module.exports = router;
