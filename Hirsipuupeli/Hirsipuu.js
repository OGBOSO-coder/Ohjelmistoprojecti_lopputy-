//hirsipuu peli
var sanat = ["kissa", "koira", "auto", "talo", "koulu", "tietokone", "puhelin", "kukka", "kirja", "lehti"];
var arvattavaSana = sanat[Math.floor(Math.random() * sanat.length)];
var eläma = 6;

document.getElementById('arvattavaSana').textContent = arvattavaSana;
document.getElementById('elama').textContent = eläma;

function Tarkastaja() {
    var arvaus = document.getElementById('arvaus').value;
    if (arvattavaSana.includes(arvaus)) {
        console.log("Oikein!");
        return true;
    } else {
        console.log("Väärin!");
        eläma--;
        console.log("Sinulla on " + eläma + " elämää jäljellä.");
        document.getElementById('elama').textContent = eläma;
        return false;
    }
}

console.log(arvattavaSana);