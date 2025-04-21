//hirsipuu peli
function aloitaPeli() {
    document.getElementById('peli').style.display = 'block';
    document.getElementById('nimi').style.display = 'none';
    document.getElementById('ohjeistus').style.display = 'none';

    document.querySelector('button[onclick="aloitaPeli()"]').style.display = 'none';
}
    // Initialize the game logic here
    var sanat = ["kissa", "koira", "auto", "talo", "koulu", "tietokone", "puhelin", "kukka", "kirja", "lehti"];
    var arvattavaSana = sanat[Math.floor(Math.random() * sanat.length)];
    var eläma = 6;
    var arvaukset = 0;
    var arvattuSana = Array(arvattavaSana.length).fill('_').join('');

    document.getElementById('arvattavaSana').textContent = arvattuSana;
    document.getElementById('elama').textContent = eläma;
    document.getElementById('arvatutKirjaimet').textContent = '';

    console.log("Game started! The word is: " + arvattavaSana);

    document.getElementById('arvaus').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            // Prevent the default behavior (e.g., form submission)
            event.preventDefault();
            // Trigger the button's click event
            if (document.getElementById('arvaus').value.trim() !== '') {
                document.getElementById('arvaaButton').click();
            }
            else {
                alert("Anna nimi!");
            }
        }
    });

    function Tarkastaja() {
        var arvaus = document.getElementById('arvaus').value.toLowerCase();
        var uusiArvattuSana = '';
        var oikein = false;
        arvaukset++;

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
                alert("Hävisit pelin! Oikea sana oli: " + arvattavaSana);
            }
        }

        // Tarkista, onko pelaaja voittanut
        if (!arvattuSana.includes('_')) {
            console.log("Voitit pelin!");
            alert("Onneksi olkoon! Voitit pelin!");

            // Tallenna voittajan nimi ja pisteet
            let nimi = document.getElementById('nimi').value;
            if (nimi === "") {
                nimi = "Tuntematon pelaaja";
            }
            let pisteet = eläma; // Käytetään jäljellä olevia elämiä pisteinä
            lisaaScoreboardiin(nimi, pisteet);

            // Nollaa peli
            arvaukset = 0;
        }

        document.getElementById('arvatutKirjaimet').textContent += arvaus + ' ';
        document.getElementById('arvaus').value = '';
    }

    // Lisää voittajan tiedot scoreboardiin
    function lisaaScoreboardiin(nimi, pisteet) {
        const scoreBody = document.getElementById('scoreBody');
        const uusiRivi = document.createElement('tr');

        const nimiSolu = document.createElement('td');
        nimiSolu.textContent = nimi;

        const pisteetSolu = document.createElement('td');
        pisteetSolu.textContent = pisteet;

        uusiRivi.appendChild(nimiSolu);
        uusiRivi.appendChild(pisteetSolu);
        scoreBody.appendChild(uusiRivi);
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

    function aloitaUudelleen() {
        
        document.getElementById('peli').style.display = 'none';
        document.getElementById('nimi').style.display = 'block';
        document.getElementById('ohjeistus').style.display = 'block';
    
        document.querySelector('button[onclick="aloitaPeli()"]').style.display = 'block';

        arvattavaSana = sanat[Math.floor(Math.random() * sanat.length)];
        eläma = 6;
        arvaukset = 0;
        arvattuSana = Array(arvattavaSana.length).fill('_').join('');

        document.getElementById('arvattavaSana').textContent = arvattuSana;
        document.getElementById('elama').textContent = eläma;
        document.getElementById('arvatutKirjaimet').textContent = '';
        document.getElementById('arvaus').value = '';
        document.getElementById('hangmanDrawing').textContent = '';

        console.log("Peli alkoi uudelleen! Uusi sana on: " + arvattavaSana);
    }

