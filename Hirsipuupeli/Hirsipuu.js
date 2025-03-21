//hirsipuu peli
var sanat = ["kissa", "koira", "auto", "talo", "koulu", "tietokone", "puhelin", "kukka", "kirja", "lehti"];
var arvattavaSana = sanat[Math.floor(Math.random() * sanat.length)];
var eläma = 6;
var arvattuSana = Array(arvattavaSana.length).fill('_').join('');

document.getElementById('arvattavaSana').textContent = arvattuSana;
document.getElementById('elama').textContent = eläma;
document.getElementById('arvatutKirjaimet').textContent = '';

function Tarkastaja() {
    var arvaus = document.getElementById('arvaus').value.toLowerCase();
    var uusiArvattuSana = '';
    var oikein = false;

    for (var i = 0; i < arvattavaSana.length; i++) {
        if (arvattavaSana[i] === arvaus) {
            uusiArvattuSana += arvaus;
            oikein = true;
        } else {
            uusiArvattuSana += arvattuSana[i];
        }
    }

    arvattuSana = uusiArvattuSana;
    document.getElementById('arvattavaSana').textContent = arvattuSana;

    if (oikein) {
        console.log("Oikein!");
    } else {
        console.log("Väärin!");
        eläma--;
        console.log("Sinulla on " + eläma + " elämää jäljellä.");
        document.getElementById('elama').textContent = eläma;
        
        if (eläma == 0) {
            console.log("Hävisit pelin!");
            alert("Pään poisto!");
        }
    }

    document.getElementById('arvatutKirjaimet').textContent += arvaus + ' ';
    document.getElementById('arvaus').value = '';
}

console.log(arvattavaSana);