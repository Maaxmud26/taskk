// task 1 
// function Myfunction() {
//     let age = prompt("yasinizi daxil edin", "18");   
//     if (age<18) {
//         alert("giris qadagandir")
//     }
// }

// task2
// document.getElementById("site").style.display="none"
// function Confirm() {
//     if (confirm("Press a button!") == true) {
//         text = "You pressed OK!";
//         document.getElementById("site").style.display="block"
//       } else {
//         text = "You canceled!";
//       }
// }

//task3 

function Enter() {
var name = document.getElementById('input').value 
if(name.length >=4) {
var check = name.slice(-3,-2)
if(check==1) {
    alert(`Hello" + ${name}`)
    document.body.style.backgroundColor= "red";
}
else if(check==2) {
    alert(`Hello" + ${name}`)
    document.body.style.backgroundColor= "yellow";
}
else if(check==3) {
    alert(`Hello" + ${name}`)
    document.body.style.backgroundColor= "green";
}

}
else{
    alert('qrupun adi dogru deyil')
}
}

