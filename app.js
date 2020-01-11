//calculate tip
function calculateTip(){
    var billamt = document.getElementById("billamt").value;
    var serviceQual = document.getElementById("serviceQual").value;
    var numOfPeople = document.getElementById("peopleamt").value;

//validate input
    if (billamt === "" || serviceQual == 0){
        alert("Please Enter Values");
        return;
    }

//check to see if this input is empty or less than equal to 1
    if (numOfPeople === "" || numOfPeople <= 1){
        numOfPeople = 1;
        document.getElementById("each").style.display = "none";
    } else {
        document.getElementById("each").style.display = "block";
    }
//calculate tip
    var total = (billamt * serviceQual) / numOfPeople;
//round to 2 decimal places
    total = Math.round(total * 100) / 100;
//next line allows us to always have two digits after decimal point
    total = total.toFixed(2);
//display the tip
    document.getElementById("totalTip").style.display = "block";
    document.getElementById("tip").innerHTML = total;
}

//hide the tip amount on load
document.getElementById("totalTip").style.display = "none";
document.getElementById("each").style.display = "none";

//click to call function
document.getElementById("calculate").onclick = function(){
    calculateTip();
};