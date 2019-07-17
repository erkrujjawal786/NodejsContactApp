var db = require('../modal/mydatamodal');


function fetchdata(req, res) {

  console.log('backend',req.currentuser.email);

  db.find({objectId:req.currentuser._id}).then((response) => {
    if (response) {
      console.log("hjfhgjkjgkkj", response)
      res.send({ status: true, message: "fetched all data", doc: response });
    } else {
      res.send({ status: false, message: "data not fetched" });
    }
  });

}

module.exports = {
  fetchdata
};