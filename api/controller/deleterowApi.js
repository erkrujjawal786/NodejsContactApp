var db =  require('../modal/mydatamodal');

function deleterow(req,res){
    var email = req.body.email;
    console.log("deleteback" , email);
db.findOneAndRemove({email:email},{name:req.body.name,email:req.body.email,mobno:req.body.mobno,address:req.body.address}).then((response) => {
if(response){
    console.log('backend row remove', response);
    res.send({status:true, message:"row removed"});
} else {
    console.log('row not removed');
}
});

}


module.exports = {
    deleterow
};