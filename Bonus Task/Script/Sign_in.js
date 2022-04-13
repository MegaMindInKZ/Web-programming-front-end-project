let date = new Date();
let d = date.getDate();
let m = date.getMonth() + 1;
if(m < 10) m = "0" + m;
if(d < 10) d = "0" + d;
let y = date.getFullYear();
document.getElementById("date_input").max = y + "-" + m + "-" + d;
function registration(){
    document.getElementById("registration_page_div").style.display = "block";
    document.getElementById("SignIn_page_div").style.display = "none";
    document.getElementById("SignIn").style.fontWeight = "normal";
    document.getElementById("SignIn").style.borderBottomWidth = "0px";
    document.getElementById("registration").style.fontWeight = "bold";
    document.getElementById("registration").style.borderBottom = "1px solid rgb(255, 98, 98)";

}
function signIn(){
    document.getElementById("SignIn_page_div").style.display = "block";
    document.getElementById("registration_page_div").style.display = "none";
    document.getElementById("registration").style.fontWeight = "normal";
    document.getElementById("registration").style.borderBottomWidth = "0px";
    document.getElementById("SignIn").style.fontWeight = "bold";
    document.getElementById("SignIn").style.borderBottom = "1px solid rgb(255, 98, 98)";
}
function isAvailable1(){
    if(document.getElementById("checkboxInput_registration").checked == true) {
        document.getElementById("recursive_password").type = "text";
        document.getElementById("password_register").type = "text";
    }
    else{
        document.getElementById("recursive_password").type = "password";
        document.getElementById("password_register").type = "password";
    }

}
function isAvailable2(){
    if(document.getElementById("checkboxInput_SignIn").checked == true) {
        document.getElementById("password").type = "text";
    }
    else{
        document.getElementById("password").type = "password";
    }

}
function check(){
    if(document.getElementById("recursive_password").value !== document.getElementById("password_register").value || document.getElementById("login_register").value == "" || document.getElementById("password_register").value == "" || !(document.getElementById('male').checked || document.getElementById('female').checked)){ 
        document.getElementById("audio").play();
    }
    else{
        window.location.href = "MainPage.html";
    }
}
function check1(){
    let t = document.getElementById("password").value;
    let b = false;
    for(let i = 0; i < t.length; i++){
        if(t[i] == "p") b = true;
    }
    if(document.getElementById("login_sign_in").value == "" || document.getElementById("password").value == "" || !b || t.length != 7){ 
        document.getElementById("audio").play();
    }
    else{
        window.location.href = "MainPage.html";
    }
}