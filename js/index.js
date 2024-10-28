console.log("Hello World");
var password = document.getElementById("password");
var passwd_confirm = document.getElementById("passwdconfirm");

function validatePassword(){
    if(password.value!=passwd_confirm.value) {
        passwd_confirm.setCustomValidity("Password does not match");
    }else{
        passwd_confirm.setCustomValidity("");
    }
}

password.onchange = validatePassword;
passwd_confirm.onkeyup = validatePassword;