let mobileInput = document.getElementById("mobileNumber");
let passInput = document.getElementById("password");
let loginBtn = document.getElementById("loginBtn");

function authenticate(){
    let mobileNumber = mobileInput.value;
    let password = passInput.value;
    if(checkMobileNumber(mobileNumber) && checkPassword(password)){
        alert("Login Success");
        window.location.replace("cars.html");
    }else{
        alert("Login Failed, Try Again!");
    }
    return false;
};

function checkMobileNumber(mobileNumber){
    if(mobileNumber.length > 9){
        return true;
    }else {
        return false;
    }
}

function checkPassword(password){
    if(password === 'pass1234'){
        return true;
    }else {
        return false;
    }
}