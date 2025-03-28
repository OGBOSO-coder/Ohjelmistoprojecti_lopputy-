//hirsipuu peli
var sanat = ["kissa", "koira", "auto", "talo", "koulu", "tietokone", "puhelin", "kukka", "kirja", "lehti"];
var arvattavaSana = sanat[Math.floor(Math.random() * sanat.length)];
var eläma = 6;
var arvattuSana = Array(arvattavaSana.length).fill('_ ').join('');

document.getElementById('arvattavaSana').textContent = arvattuSana;
document.getElementById('elama').textContent = eläma;
document.getElementById('arvatutKirjaimet').textContent = '';

document.getElementById('arvaus').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        // Prevent the default behavior (e.g., form submission)
        event.preventDefault();
        // Trigger the button's click event
        if (document.getElementById('arvaus').value.trim() !== '') {
            document.getElementById('arvaaButton').click();
        }
        else {
            alert("Anna kirjain!");
        }
    }
});
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
        vaaraSana(eläma);
        
        if (eläma == 0) {
            console.log("Hävisit pelin!");
            vaaraSana(eläma);
            alert("Pään poisto!");
        }
    }

    document.getElementById('arvatutKirjaimet').textContent += arvaus + ' ';
    document.getElementById('arvaus').value = '';
    

console.log(arvattavaSana);
}

function vaaraSana(eläma) {
    console.log("Väärä sana, sinulla on " + eläma + " yritystä jäljellä.");
    if (eläma == 6) {
        console.log("Väärä kirjain, sinulla on 6 yritystä jäljellä.");
        console.log(" -------");
        console.log(" |     |");
        console.log("       |");
        console.log("       |");
        console.log("       |");
        console.log("       |");
        console.log("----------");
    }

    if (eläma == 5) {
        console.log("Väärä kirjain, sinulla on 5 yritystä jäljellä.");
        console.log(" -------");
        console.log(" |     |");
        console.log(" O     |");
        console.log("       |");
        console.log("       |");
        console.log("       |");
        console.log("       |");
        console.log("----------");
    }

    if (eläma == 4) {
        console.log("Väärä kirjain, sinulla on 4 yritystä jäljellä.");
        console.log(" -------");
        console.log(" |     |");
        console.log(" O     |");
        console.log(" |     |");
        console.log(" |     |");
        console.log("       |");
        console.log("       |");
        console.log("       |");
        console.log("       |");
        console.log("----------");
    }

    if (eläma == 3) {
        console.log("Väärä kirjain, sinulla on 3 yritystä jäljellä.");
        console.log("  -------");
        console.log("  |     |");
        console.log("  O     |");
        console.log(" \\|     |");
        console.log("  |     |");
        console.log("        |");
        console.log("        |");
        console.log("        |");
        console.log("        |");
        console.log(" ----------");
    }

    if (eläma == 2) {
        console.log("Väärä kirjain, sinulla on 2 yritystä jäljellä.");
        console.log("  -------");
        console.log("  |     |");
        console.log("  O     |");
        console.log(" \\|/    |");
        console.log("  |     |");
        console.log("        |");
        console.log("        |");
        console.log("        |");
        console.log("        |");
        console.log(" ----------");
    }

    if (eläma == 1) {
        console.log("Väärä kirjain, sinulla on 1 yritys jäljellä.");
        console.log("  -------");
        console.log("  |     |");
        console.log("  O     |");
        console.log(" \\|/    |");
        console.log("  |     |");
        console.log(" /      |");
        console.log("        |");
        console.log("        |");
        console.log("        |");
        console.log(" ----------");
    }

    if (eläma == 0) {
        console.log("Väärä kirjain, hävisit pelin!");
        console.log("  -------");
        console.log("  |     |");
        console.log("  O     |");
        console.log(" \\|/    |");
        console.log("  |     |");
        console.log(" / \\    |");
        console.log("        |");
        console.log("        |");
        console.log("        |");
        console.log(" ----------");
    }
    let drawing = "";

    if (eläma == 6) {
        drawing = `
 -------
 |     |
       |
       |
       |
       |
----------
`;
    }

    if (eläma == 5) {
        drawing = `
 -------
 |     |
 O     |
       |
       |
       |
----------
`;
    }

    if (eläma == 4) {
        drawing = `
 -------
 |     |
 O     |
 |     |
 |     |
       |
----------
`;
    }

    if (eläma == 3) {
        drawing = `
  -------
  |     |
  O     |
 \\|     |
  |     |
        |
        |
        |
 ----------
`;
    }

    if (eläma == 2) {
        drawing = `
  -------
  |     |
  O     |
 \\|/    |
  |     |
        |
        |
        |
 ----------
`;
    }

    if (eläma == 1) {
        drawing = `
  -------
  |     |
  O     |
 \\|/    |
  |     |
 /      |
        |
        |
 ----------
`;
    }

    if (eläma == 0) {
        drawing = `
  -------
  |     |
  O     |
 \\|/    |
  |     |
 / \\    |
        |
        |
 ----------
`;
    }

    // Update the hangman drawing in the HTML
    document.getElementById("hangmanDrawing").textContent = drawing;
}