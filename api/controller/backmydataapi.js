var database = require('../modal/mydatamodal');

function mydata (req, res){
    console.log(req.currentuser, "currentuser");
    // console.log("getting token in background", req.headers)
database.findOne({email:req.body.email}).then((response) =>{
    console.log("email found");
    
    if(response){
        console.log("responded",response);
        
    } else {
        console.log("not responded");
        var Database = new database({
            name:req.body.name,
            email:req.body.email,
            mobno:req.body.mobno,  
            address:req.body.address,
            objectId:req.currentuser._id
        });
        Database.save().then((respond) => {
            // console.log("data saved",respond);
            if(respond){
                res.send({status:true, message:"dataaa saved"});
            } else {
                res.send({status:false, message:"dataaa not saved"});
            }
        });
    }
});

}

module.exports = {
    mydata };