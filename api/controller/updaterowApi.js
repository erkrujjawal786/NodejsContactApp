
var database = require('../modal/mydatamodal');
function updaterow(req, res){
       var email = req.body.email;
       console.log('updateApiiiiiiiiiii',email)

       database.findOneAndUpdate({email:email},{ name:req.body.name,email:req.body.email,mobno:req.body.mobno,address:req.body.address}).then((response) => {
       if(response){
           console.log('updatedddd', response)
       } else {
           console.log('not updated');
       }
    });


}

module.exports = {
    updaterow
};