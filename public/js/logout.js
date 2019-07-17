function logout(){

    axios.post('api/logoutApi',{}).then((response) =>{
     console.log("responseeeeeeeee0",response);
     if(response){
         window.location.href = '/';

     } else {
         
     }

    });
};