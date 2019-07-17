const mongoose = require('mongoose');
var user = mongoose.model('user',{
    name:{
        required:true,
        type:"string",
        minlength:1,
        trim:true
        },
    email:{
        required:true,
        type:"string",
        minlength:1,
        trim:true

          },
    password:{
        required:true,
        type:"string",
        minlength:1,
        trim:true

    }


});
module.exports = user;