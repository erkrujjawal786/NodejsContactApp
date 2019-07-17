const mongoose = require('mongoose');

var mydata = mongoose.model('data',{
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
    mobno:{
        required:true,
        type:"string",
        minlength:1,
        trim:true
    }, 
    address:{
        required:true,
        type:"string",
        minlength:1,
        trim:true
    },
    objectId:{
        required:true,
        type:"string"

    }
});
module.exports = mydata;