let pickUpPlace, dropPlace, kmsValue, seniorCitizen, finalPrice,
    cabType, journeyDate, journeyTime, gstPrice, peakHour;
let cabDetails;
let peakHourInfo = "(Extra 1.25% charges apply)";

getJourneyDetails();
setData();

/**
 * Function to get journey details from localstorage.
 */
function getJourneyDetails(){
    cabDetails = JSON.parse(localStorage.getItem("CAB_DETAILS"));
}

/**
 * Function to set retrived journey details to UI elements.
 */
function setData(){
    document.getElementById("cabType").innerText = cabDetails.cabType;
    document.getElementById("pickupField").innerText = cabDetails.pickUpPlace;
    document.getElementById("dropField").innerText = cabDetails.dropPlace;
    document.getElementById("journeyDate").innerText = cabDetails.journeyDate;
    document.getElementById("journeyTime").innerText = cabDetails.journeyTime;
    document.getElementById("kmsField").innerText = cabDetails.noOfKms;
    if(cabDetails.seniorCitizen){
        document.getElementById("seniorField").innerText = "Yes";
    }else{
        document.getElementById("seniorField").innerText = "No"
    }   
    document.getElementById("gstPrice").innerText = cabDetails.gstPrice;
    // let charges = 1.25;
    peakHour = cabDetails.peakHour;
    if(peakHour == true){
        document.getElementById("peakHour").innerText = "Yes" + peakHourInfo;
    }else{
        document.getElementById("peakHour").innerText = "No";
    }
    document.getElementById("priceField").innerText = cabDetails.finalPrice;
}