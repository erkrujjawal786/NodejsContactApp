

function logouts(req,res){
console.log("logoutApi");
res.clearCookie('jwtToken');
res.header('cache-control','private,no-cache, no-store, must-revalidate');
res.header('Expires','0');
res.header('Pragma', 'no-cache');
res.send({status:true, message:'LoggedOut Successfully'});

};
module.exports = {
    logouts
};