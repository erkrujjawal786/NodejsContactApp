
var user = require('../modal/registermodal');
var jwt = require('jsonwebtoken');
var JWTSECRET = "ilovemyjob";

function login(req, res) {
    // dbpassword = response.password;
    // frontpassword = req.body.password;
    // console.log('getting response', req.body);
    user.findOne({ email: req.body.email }).then((response) => {
        console.log("Signed in", response);
        if (response) {
            console.log("getting response", response);
            console.log("frontEndResponse", req.body);
            if (req.body.password.toString() === response.password.toString()) {
                console.log("responsemail", response.email);

                //  token declare--------------------
                var token = jwt.sign({ email: response.email }, JWTSECRET);
                res.cookie('jwtToken', token);
                console.log("jwtToken", token);

                res.send({ status: true, token: token, message: "Login Success" });

                console.log("password matched");
            } else {
                res.send({ status: false, message: "not responding" });
                console.log("password not matched");
            }
        } else {
            console.log("not got response");
            res.send({ status: false, message: "user not found, signup first " });
        }


    });
}

module.exports = {
    login
};