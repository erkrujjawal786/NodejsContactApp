function login() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('Passwd').value;   
    // console.log('getting email', email, password);
    if (email == null || email == "") {
        alert('please enter your email');
    } else if (password == null || password == "") {
        alert('enter your password');
    } else {
        // console.log('got email');
      axios.post('/api/loginApi', {
          email:email,
          password:password
      }).then((res) => {
          console.log("gotemailpaswrd", res);
        //   console.log(res.data.status,"wgjugefgufhue");
          if(res.data.status == true){
              if(typeof(Storage) !== 'undefined'){
              console.log("define")
            localStorage.setItem("token", res.data.token);
              //else{
                console.log("undefine")
              window.location.href = '/mydata';
              }
              } else {
               console.log(res.data.message)
              alert(res.data.message);
          }
      });
    }


}