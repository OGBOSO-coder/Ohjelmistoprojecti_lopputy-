//Klikkeripeli
var pisteet = 0;

document.getElementById('Pisteet').textContent = pisteet;

function Nappi(){
pisteet++;
document.getElementById('Pisteet').textContent = pisteet;
console.log(pisteet)
}