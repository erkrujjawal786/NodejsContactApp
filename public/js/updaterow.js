

function updaterow() {
   console.log('update');
    var name = document.getElementById(`name${i}`).innerHTML;
    var email = document.getElementById(`email${i}`).innerHTML;
    var mobno = document.getElementById(`mobno${i}`).innerHTML;
    var address = document.getElementById(`address${i}`).innerHTML;

    axios.post('api/updaterow',{
        name:name,
        email:email,
        mobno:mobno,
        address:address
    }).then((response) =>{
        console.log('update data',response);
    })
}