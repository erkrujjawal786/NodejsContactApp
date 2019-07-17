// var fd = require('./fetchdata.js');
function mydata(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var mobno = document.getElementById('mobno').value;
    var address = document.getElementById('address').value;
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
       console.log('mydata',name, email, mobno, address);

    if(name == null || name == ""){
        alert("Enter name ");
    } else if(email == null || email == ""){
        alert("Enter mail");
    } else if (!filter.test(email)){
        alert("enter valid email");
    } else if(mobno == null || mobno == ""){
        alert("Enter mobile no");
    } else if(address == null || address == ""){
        alert("Enter address");
    } else {
    
    console.log("api hit");
    axios.defaults.headers.common['Authorization']=localStorage.getItem('token')
     axios.post('/api/backmydataapi',{
         name:name,
         email:email,
         mobno:mobno,
         address:address
     }).then((res) =>{
         console.log(res.data.status);

         if(res.data.status == true){
            // fd.fetchdata;
            window.location = '/mydata';
             alert(res.data.message);

         } else {
             alert(res.data.message);
         }
     });
    }

}