let calculateBtn = document.getElementById("calculateBtn");
let continueBtn = document.getElementById("continueBtn");

//variables to retrieve values
let cabType, noOfKms, pricePerKm, finalPrice, 
    pickUpPlace, dropPlace, journeyDate,
    journeyTime, gstPercent, seniorCitizen = false, 
    gstPrice, peakHour = false, seniorCheckbox;

setValidDate();

calculateBtn.addEventListener('click', function(){
    seniorCitizen = document.getElementById("seniorCitizen").checked;
    cabType = document.getElementById("cabType").value;
    noOfKms = document.getElementById("noOfKms").value;
    finalPrice = 0;
    pickUpPlace = document.getElementById("source").value;
    dropPlace = document.getElementById("destination").value;
    journeyDate = document.getElementById("journeyDate").value;
    journeyTime = document.getElementById("journeyTime").value;
    gstPercent = document.getElementById("gst").value;

    checkInputFilled();

    if(cabType === "Micro"){
        pricePerKm = 10;
    }else if(cabType === "Macro"){
        pricePerKm = 15;
    } else if(cabType === "Prime"){
        pricePerKm = 20;
    }
    finalPrice = pricePerKm * noOfKms;
    if(seniorCitizen === true){
        finalPrice /= 2;
    }
    //calculate peak hour price
    let hour = parseInt(journeyTime.substr(0,2));
    if(isPeakHour(hour)){
        finalPrice += calculatePeakPrice(finalPrice, 1.25);
        peakHour = true;
    }
    //calculate GST
    finalPrice += calculateGst(finalPrice);
    finalPrice = parseInt(finalPrice);
    document.getElementById("price").innerText = finalPrice;
    continueBtn.style.visibility = "visible";
});

continueBtn.addEventListener('click', function(){
    let cabDetails = { 
        "cabType": cabType,
        "seniorCitizen": seniorCitizen,
        "noOfKms": noOfKms,
        "pickUpPlace": pickUpPlace,
        "dropPlace": dropPlace,
        "journeyDate": journeyDate,
        "journeyTime": journeyTime,
        "gstPrice": gstPrice,
        "peakHour": peakHour,
        "finalPrice": finalPrice
     };
    localStorage.setItem("CAB_DETAILS", JSON.stringify(cabDetails));
    window.location.assign('journeyDetails.html');
});

/**
 * Function to check whether all the input fields are filled.
 */
function checkInputFilled(){
    if(!(cabType.trim().length > 0 && noOfKms.trim().length > 0 && pickUpPlace.trim().length > 0 &&
        dropPlace.trim().length > 0 && journeyDate.trim().length > 0 && journeyTime.trim().length > 0)){
            alert("Please fill all the fields");
    }
}

/**
 * Function to calculate GST price for the journey.
 * @param {number} price 
 * @returns {boolean} calculated gst price.
 */
function calculateGst(price){ 
    let gstPercentage = document.getElementById("gst").value;
    gstPrice = parseInt((gstPercentage/100) * price);
    return gstPrice;
}

/**
 * Function to restrict selecting past dates.
 */
function setValidDate(){ 
    let today = new Date();
    let fullDate = today.toJSON().substr(0,10);
    document.getElementById("journeyDate").setAttribute('min', fullDate);
}

/**
 * Peak Hour calculation
 * @param {number} hour
 * @returns {boolean} peak hour or not. 
 */
function isPeakHour(hour){        
    let peak = false;
    // Peak Hour between 5pm to 7 pm
    if(hour >= 17 && hour <= 19){
        peak = true;
    }
    return peak;
}

/**
 * Function to calculate peak hour price.
 * @param {number} price 
 * @param {number} percentage 
 */
function calculatePeakPrice(price, percentage){ 
    let peakPrice = Math.round((percentage/100) * price);
    return peakPrice;
}