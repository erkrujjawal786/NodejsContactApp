
var user = require('../modal/registermodal');

function signup(req, res) {
    console.log("resssssssss",req.body.email)
    var email =req.body.email
    var name = req.body.name
    var password = req.body.pass
    console.log('jitendra kumar',email,name,password)

user.findOne({ email: req.body.email }).then((response) => {
        if (response) {
            res.send({ status: false, message: "user already exist, signup with another email " });
        } else {
            console.log("ressssssssssssssssssss154455667")
            var User = new user({
                name: req.body.name,
                email: req.body.email,
                password: req.body.pass
            });
          
            User.save().then((doc) => {
                console.log(doc, 'document');
             if(doc){
                res.send({ status:true, message:"data saved"});
                
                   } else {
                       res.send({status:false, message:"data not saved"});
                   }
            });
        }
    });
    // body = req.body;
    // name: body.name;
    // email: body.email;
    // pass: body.pass;
    // repass: body.repass;
    // console.log('resquest.........', res.body, req.body);
}
module.exports = {
    signup
};