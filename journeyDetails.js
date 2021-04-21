let cabField = document.getElementById("cabType");
let pickUpField = document.getElementById("pickupField");
let dropField = document.getElementById("dropField");
let dateField = document.getElementById("journeyDate");
let timeField = document.getElementById("journeyTime");
let kmsField = document.getElementById("kmsField");
let seniorField = document.getElementById("seniorField");
let gstField = document.getElementById("gstPrice");
let peakHourField = document.getElementById("peakHour");
let priceField = document.getElementById("priceField");

let pickUpPlace, dropPlace, kmsValue, seniorCitizen, finalPrice,
    cabType, journeyDate, journeyTime, gstPrice, peakHour;

getJourneyDetails();
setData();

function getJourneyDetails(){
    pickUpPlace = localStorage.getItem("pickUpPlace");
    dropPlace = localStorage.getItem("dropPlace");
    kmsValue = localStorage.getItem("noOfKms");
    seniorCitizen = localStorage.getItem("seniorCitizen");
    finalPrice = localStorage.getItem("finalPrice");
    cabType = localStorage.getItem("cabType");
    journeyDate = localStorage.getItem("journeyDate");
    journeyTime = localStorage.getItem("journeyTime");
    gstPrice = localStorage.getItem("gstPrice");
    peakHour = localStorage.getItem("peakHour");
    console.log(peakHour);
    gstPrice = parseInt(gstPrice);
}

function setData(){
    cabField.innerText = cabType;
    pickUpField.innerText = pickUpPlace;
    dropField.innerText = dropPlace;
    dateField.innerText = journeyDate;
    timeField.innerText = journeyTime;
    kmsField.innerText = kmsValue;
    seniorField.innerText = seniorCitizen;
    gstField.innerText = gstPrice;
    if(peakHour == "Yes"){
        peakHourField.innerText = "Yes (Extra 1.25% charges apply.)";
    }else{
        peakHourField.innerText = peakHour;
    }
    priceField.innerText = finalPrice;
}