var cabOption = document.getElementById("cabType");
var kmsInput = document.getElementById("noOfKms");
var seniorOption = document.getElementById("seniorCitizen");
var pickupInput = document.getElementById("source");
var dropInput = document.getElementById("destination");
var dateInput = document.getElementById("journeyDate");
var timeInput = document.getElementById("journeyTime");
var gstInput = document.getElementById("gst");
var calculateBtn = document.getElementById("calculateBtn");
var price = document.getElementById("price");
var continueBtn = document.getElementById("continueBtn");
var seniorCitizen = "No";

//values
var cabType, noOfKms, finalPrice, 
    pickUpPlace, dropPlace, journeyDate,
    journeyTime, gstPercent;

calculateBtn.addEventListener('click', function(){
    seniorCitizen = seniorOption.value;
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
        finalPrice = 10 * noOfKms;
    } else if(cabType === "Prime"){
        finalPrice = 10 * noOfKms;
    }
    if(seniorCitizen === "Yes"){
        finalPrice /= 2;
    }
    finalPrice += calculateGst(finalPrice);
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
    localStorage.setItem("gstPercentage", gstPercent);
    localStorage.setItem("finalPrice", finalPrice);
    window.location.assign('journeyDetails.html');
});

function calculateGst(price){
    let gstPercentage = gstInput.value;
    let finalPrice = (gstPercentage/100) * price;
    return finalPrice;
}