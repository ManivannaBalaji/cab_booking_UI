function authenticate(){
    event.preventDefault();
    let mobileNumber = document.getElementById("mobileNumber").value;
    let password = document.getElementById("password").value;
    if(isValidLogin(mobileNumber,password)){
        alert("Login Success");
        window.location.href = "cars.html";
    }else{
        alert("Login Failed, Try Again!");
    }
};

/**
 * Function to call and check checkMobileNumber and checkPassword functions returns true.
 * @param {number} mobileNumber 
 * @param {string} password 
 */
function isValidLogin(mobileNumber,password){
    let valid = checkMobileNumber(mobileNumber) && checkPassword(password);
    return valid;
}

/**
 * Function to check mobile number has 10 digits.
 * @param {number} mobileNumber
 * @returns {boolean} mobile number matched or not. 
 */
function checkMobileNumber(mobileNumber){
    let valid = false;
    if(mobileNumber.length == 10){
        return true;
    }
    return valid;
}

/**
 * Function to check the password
 * @param {string} password 
 * @returns {boolean} password matched or not.
 */
function checkPassword(password){
    let valid = false;
    if(password === 'pass1234'){
        valid = true;
    }
    return valid;
}