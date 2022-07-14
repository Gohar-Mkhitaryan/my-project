console.log('Hello JS');
const form = document.getElementById('form');
form.addEventListener('submit', async  ()=>{
    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const age = document.getElementById('age').value;

// if(document.getElementById('male').checked) {   
//     let selectedValue = document.getElementById('male').value;  
  // console.log("Gender: " + selectedValue);    
 //}  
// if(document.getElementById('female').checked) {   
//     let selectedValue = document.getElementById('female').value;  
   // console.log("Gender: " + selectedValue);    
//} 
   let email = document.getElementById('email').value;

  // let phone = document.getElementById('phone').value;
            //let phNumber= document.getElementById('number').value;
//     console.log(`Phone:   ${phone} ${phNumber}`);
  // let prov = document.getElementById('prov').value;
//     console.log(`Province:   ${prov}`);
  let pass = document.getElementById('pass1').value;
//     console.log(`Password:   ${pass}`);
            //let ches = document.getElementById('terms').checked;
//     console.log(`Are you accept?:   ${ches}`);

let requestBody = {
    name: firstname,
    surname: lastname,
    age: age,
    //gender: selectedValue,
    email: email,
    //phone: phone,
   // province: prov,
    password: pass,

};

console.log('requestBody', requestBody);

try{
    const response = await fetch('http://localhost:8000/contact', {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers:{
            'Content-Type': 'application/json',
        }
    });
} catch(error){
    console.log('error', error);
}
});


const userTable = document.getElementById('see-all-users');
