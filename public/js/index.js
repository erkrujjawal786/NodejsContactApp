function login1(){
    var name  = document.getElementById("name").value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('Passwd').value;
    var confirm_password = document.getElementById('confirmpasswd').value;

    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    console.log('name got', name, email, password, confirm_password);
    if(name == null || name == ""){
   alert("please enter name");
    }else if ( email == null ){
        alert("enter email");
    } else if(!filter.test(email)){
        alert("email not valid");
    }else if(password == null){
        alert("enter password");
    } else if(confirm_password == null){
        alert("confirm password");
    } else if(password !== confirm_password){
     alert("enter correct confirm password");
    }else {

     
        axios.post('/api/register',{
            name :name,
            email :email,
            pass:password
        }).then((res) => {
            console.log(res.data.status);
            // a =res.data.status;
           if(res.data.status == true ){
               alert(res.data.message);
               window.location.href = "/";
           } else {
               alert(res.data.message);
           }
        });
    
    }

} 