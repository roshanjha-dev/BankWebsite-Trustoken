const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {

    let flag = false;
    if(ClientListReader != undefined){
        for(var i=0; i<ClientListReader.length; i++){
            if(ClientListReader[i] == "CDAC INDIA TrusToken 0"){
                flag = true;
                wrapper.classList.add('active-popup');
            }
        }
    }

    if (flag == false){
        
        if(!alert("Please insert the token!!!")) {
            window.location.reload();
        }
    }
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

// console.log(TokenConnectStatus);


// const interval2 = setInterval(() => {
//     //console.log('Hey RAF is called!!');
//     //console.log(RAFStatus);
//     if(RAFStatus == true){
//         clearInterval(interval2);
//         console.log(RAFStatus);
//     }
// }, 3000);


// function auth(){
//     var email = document.getElementById("email").value;
//     var password = document.getElementById("password").value;

//     if(email == "admin@gmail.com" && password == "123456"){
//         //if(RAFStatus == true){
//             window.location.replace("homepage");
//             //window.location.href = "homepage.html";
//         //}        
//     }
//     else {
//         alert("Invalid Information!");
//         return;
//     }
// }

const interval2 = setInterval(() => {
    //console.log('Hey RAF is called!!');
    //console.log(RAFStatus);
    if(RAFStatus == true){
        clearInterval(interval2);
        console.log(RAFStatus);
    }
}, 3000);










