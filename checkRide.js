var cabOption = document.getElementById("cabType");
var kmsInput = document.getElementById("noOfKms");
var dobInput = document.getElementById("dob");
var pickupInput = document.getElementById("source");
var dropInput = document.getElementById("destination");
var dateInput = document.getElementById("journeyDate");
var timeInput = document.getElementById("journeyTime");
var gstInput = document.getElementById("gst");
var calculateBtn = document.getElementById("calculateBtn");
var price = document.getElementById("price");
var continueBtn = document.getElementById("continueBtn");

//variables to retrieve values
var cabType, noOfKms, finalPrice, 
    pickUpPlace, dropPlace, journeyDate,
    journeyTime, gstPercent, dob, seniorCitizen, 
    gstPrice, peakHour = "No";

setValidDate();

calculateBtn.addEventListener('click', function(){
    dob = dobInput.value;
    var age = calculateAge(dob);
    if(age > 60){
        seniorCitizen = "Yes";
    }else{
        seniorCitizen = "No";
    }
    cabType = cabOption.value;
    noOfKms = kmsInput.value;
    finalPrice = 0;
    pickUpPlace = pickupInput.value;
    dropPlace = dropInput.value;
    journeyDate = dateInput.value;
    journeyTime = timeInput.value;
    gstPercent = gstInput.value;

    if(cabType === "Micro"){
        finalPrice = 10 * noOfKms;
    }else if(cabType === "Macro"){
        finalPrice = 15 * noOfKms;
    } else if(cabType === "Prime"){
        finalPrice = 20 * noOfKms;
    }
    if(seniorCitizen === "Yes"){
        finalPrice /= 2;
    }
    //calculate peak hour price
    var hour = journeyTime.substr(0,2);
    if(isPeakHour(hour)){
        finalPrice += calculatePeakPrice(finalPrice, 1.25);
        peakHour = "Yes";
    }
    //calculate GST
    finalPrice += calculateGst(finalPrice);
    finalPrice = parseInt(finalPrice);
    price.innerText = finalPrice;
    continueBtn.style.visibility = "visible";
});

continueBtn.addEventListener('click', function(){
    localStorage.setItem("cabType", cabType);
    localStorage.setItem("seniorCitizen", seniorCitizen);
    localStorage.setItem("noOfKms", noOfKms);
    localStorage.setItem("noOfKms", noOfKms);
    localStorage.setItem("pickUpPlace", pickUpPlace);
    localStorage.setItem("dropPlace", dropPlace);
    localStorage.setItem("journeyDate", journeyDate);
    localStorage.setItem("journeyTime", journeyTime);
    localStorage.setItem("gstPrice", gstPrice);
    localStorage.setItem("peakHour", peakHour);
    localStorage.setItem("finalPrice", finalPrice);
    window.location.assign('journeyDetails.html');
});

function calculateGst(price){
    let gstPercentage = gstInput.value;
    gstPrice = (gstPercentage/100) * price;
    return gstPrice;
}

function calculateAge(dob){
    let dobYear = dob.substr(0,4);
    let today = new Date();
    let currentYear = today.getFullYear();
    let age = currentYear - dobYear;
    return age;
}

function setValidDate(){                //method to prevent selecting past date
    let today = new Date();
    let date = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();
    if(date < 10){
        date = "0" + date;
    }
    month +=1;
    if(month < 10){
        month = "0" + month;
    }
    let fullDate = year + "-" + month + "-" + date;
    dateInput.setAttribute('min', fullDate);
}

function isPeakHour(hour){              //method to find peak hour
    var peak = false;
    if(hour >= 17 && hour <= 19){
        peak = true;
    }
    return peak;
}

function calculatePeakPrice(price, percentage){     //method to calculate peak hour price
    let peakPrice = (percentage/100) * price;
    return peakPrice;
}