//Klikkeripeli
var pisteet = 0;
var pisteetPerSec = 0;
var kehitys1Hinta = 10;
var infoText;

document.getElementById('Pisteet').textContent = pisteet;

function Nappi(){
pisteet++;
document.getElementById('Pisteet').textContent = pisteet;
console.log(pisteet)
}

function Kehitys1(){
    if(pisteet < kehitys1Hinta){
        console.log("Pisteet eivät riitä")
        infoText = "Pisteet eivät riitä";
        document.getElementById('infoText').textContent = infoText
        return;
    }
infoText = "";
document.getElementById('infoText').textContent = infoText;
pisteet = pisteet - kehitys1Hinta
document.getElementById('Pisteet').textContent = pisteet;
kehitys1Hinta = kehitys1Hinta * 3;
pisteetPerSec = pisteetPerSec + 1;
}

setInterval(function() {
    pisteet = pisteet + pisteetPerSec;
    document.getElementById('Pisteet').textContent = pisteet;
}, 1000);