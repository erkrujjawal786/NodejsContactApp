function fetchdata(){
var length="",name="",mobile="",email="",address="",html="";
axios.defaults.headers.common['Authorization']=localStorage.getItem('token')
    axios.get('api/datahistory',{}).then((response)=>{
        console.log("yfvyvyuyubutut",response)
        
        if(response){
            var length=response.data.doc.length;
            console.log(length)
            for(i=0; i<length; i++){
                var name = response.data.doc[i].name;
                var email = response.data.doc[i].email;
                var mobno = response.data.doc[i].mobno;
                var address = response.data.doc[i].address;
                console.log(name,email,mobno,address);
                html +=`<tr>
                <td contentEditable='false'  class="row${i}" id="name${i}"> ${name}</td>
                <td contentEditable='false'  class="row${i}" id="email${i}"> ${email}</td>
                <td  contentEditable='false' class="row${i}" id="mobno${i}"> ${mobno}</td>
                 <td contentEditable='false' class="row${i}" id="address${i}"> ${address}</td>
                 
                 <td><button id="bttn${i}", onclick="deleteRow(this.id)">Remove</button></td>
                 <td><button id="btn${i}", onclick="editRow(this.id)">Edit</button></td>
                 
                <tr>`;
            }
            document.getElementById('tablebody').innerHTML = html;
        } else {
        
        }

    })


}

// ===============================EDIT ROW=============================================

function editRow(jit){
    // console.log('adsfgd',jit);
        j=jit.slice(3);
    console.log('adsfgd',j);
    document.getElementsByClassName(`row${j}`)[0].setAttribute("contentEditable","true");
    document.getElementsByClassName(`row${j}`)[1].setAttribute("contentEditable","true");
    document.getElementsByClassName(`row${j}`)[2].setAttribute("contentEditable","true");
    document.getElementsByClassName(`row${j}`)[3].setAttribute("contentEditable","true");

    document.getElementById(`name${j}`).focus();
    oldemail = document.getElementById(`email${j}`).innerHTML;
    document.getElementById(jit).innerText='Update';
    document.getElementById(jit).removeAttribute("onclick");
    document.getElementById(jit).setAttribute('onclick','updateRow(this.id)'); 
    }

// ------------------------------UPDATE ROW----------------------------------------------

function updateRow(jit) {
    k = jit.slice(3);
    console.log('update',k);
     var name = document.getElementById(`name${k}`).innerHTML;
     var email = document.getElementById(`email${k}`).innerHTML;
     var mobno = document.getElementById(`mobno${k}`).innerHTML;
     var address = document.getElementById(`address${k}`).innerHTML;
    //  axios.defaults.headers.common['Authorization']=localStorage.getItem('token')
    console.log(name,email,mobno,address)

     axios.post('api/updaterow',{
         name:name,
        email:email,
         mobno:mobno,
         address:address
     }).then((response) =>{
         console.log('update data',response);
         fetchdata();
     })
 }

//  ======================================DELETE ROW=================================================

function deleteRow(ujju){
    d = ujju.slice(4);
console.log('deleteeeeeeeee', d, ujju);

var name = document.getElementById(`name${d}`).innerHTML;
var email = document.getElementById(`email${d}`).innerHTML;
var mobno = document.getElementById(`mobno${d}`).innerHTML;
var address = document.getElementById(`address${d}`).innerHTML;
console.log(name,email,mobno,address);

axios.post('api/deleterow',{
    name:name,
    email:email,
    mobno:mobno,
    address:address
}).then((response) => {
console.log("deleted rowwwwwwwwwwwww", response);
fetchdata();
});
}