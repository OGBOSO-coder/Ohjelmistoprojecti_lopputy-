//Klikkeripeli
var pisteet = 0;
var pisteetPerClick = 1;
var pisteetPerSec = 0;
var kehitys1Hinta = 10;
var kehitys2Hinta = 5;
var infoText;

document.getElementById('Pisteet').textContent = pisteet;

document.getElementById('kehitys1Hinta').textContent = kehitys1Hinta;

document.getElementById('kehitys2Hinta').textContent = kehitys2Hinta;

document.getElementById('pisteetPerClick').textContent = pisteetPerClick;

document.getElementById('pisteetPerSec').textContent = pisteetPerSec;

function Nappi(){
pisteet = pisteet + pisteetPerClick;
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
pisteet = pisteet - kehitys1Hinta;
document.getElementById('Pisteet').textContent = pisteet;
kehitys1Hinta = kehitys1Hinta * 3;
document.getElementById('kehitys1Hinta').textContent = kehitys1Hinta;
pisteetPerSec = pisteetPerSec + 1;
document.getElementById('pisteetPerSec').textContent = pisteetPerSec;
}

function Kehitys2(){
    if(pisteet < kehitys2Hinta){
        console.log("Pisteet eivät riitä")
        infoText = "Pisteet eivät riitä";
        document.getElementById('infoText').textContent = infoText;
        return;
    }
    infoText = "";
    document.getElementById('infoText').textContent = infoText;
    pisteet = pisteet - kehitys2Hinta;
    document.getElementById('Pisteet').textContent = pisteet;
    kehitys2Hinta = kehitys2Hinta * 2;
    document.getElementById('kehitys2Hinta').textContent = kehitys2Hinta;
    pisteetPerClick = pisteetPerClick + 1;
    document.getElementById('pisteetPerClick').textContent = pisteetPerClick;
}

setInterval(function() {
    pisteet = pisteet + pisteetPerSec;
    document.getElementById('Pisteet').textContent = pisteet;
}, 1000);