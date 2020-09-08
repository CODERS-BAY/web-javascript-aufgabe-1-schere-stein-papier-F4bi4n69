var symbolComputer;
var symbolSpieler;
var anzahlRunden = 0;
var gewinneComputer = 0;
var gewinneSpieler = 0;
var gewinnBedingung = 0;

///// Fragt nach wie viele Runden gespielt werden sollen \\\\\
gewinnBedingung = prompt("Wie viele Runden willst du Spielen?");

zahlenausgabe();
///// Fragt den Spieler nach seinem Symbol \\\\\
function wahlSpieler1() {
    symbolSpieler = "Schere";
    symbolComputer = wahlComputer();
    ermittleErgebnis(symbolSpieler, symbolComputer);
    zahlenausgabe();
}
function wahlSpieler2() {
    symbolSpieler = "Stein";
    symbolComputer = wahlComputer();
    ermittleErgebnis(symbolSpieler, symbolComputer);
    zahlenausgabe();
}
function wahlSpieler3() {
    symbolSpieler = "Papier";
    symbolComputer = wahlComputer();
    ermittleErgebnis(symbolSpieler, symbolComputer);
    zahlenausgabe();
}

function wahlComputer() {
    ///// Ermittelt die Zahl für den Computer \\\\\
    ausgedachteZahl = Math.random() * 3;
    ausgedachteZahl = Math.round(ausgedachteZahl + 0.5);

    ///// Bestimmt welches Symbol der Computer hat \\\\\
    if (ausgedachteZahl == 1) {
        symbolComputer = "Schere";
    } else if (ausgedachteZahl == 2) {
        symbolComputer = "Stein";
    } else if (ausgedachteZahl == 3) {
        symbolComputer = "Papier";
    }
    return symbolComputer;
}

function ermittleErgebnis(spieler, computer) {
    ///// Ermittelt ob der Spieler oder der Computer gewonnen hat \\\\\
    document.getElementById("gewinneComputer").innerHTML = gewinneComputer;
    if (spieler == computer) {
        alert ("Unentschieden!");
    } else if (spieler == "Schere" && computer == "Stein") {
        gewinneComputer++;
        alert ("Du hast diese Runde verloren!");
    } else if (spieler == "Stein" && computer == "Papier") {
        gewinneComputer++;
        alert ("Du hast diese Runde Verloren!");
    } else if (spieler == "Papier" && computer == "Schere") {
        gewinneComputer++;
        alert ("Du hasst diese Runde Verloren!");
    } else if (spieler == "Stein" && computer == "Schere") {
        gewinneSpieler++;
        alert ("Du hast diese Runde Gewonnen!")
    } else if (spieler == "Papier" && computer == "Stein") {
        gewinneSpieler++;
        alert ("Du hast diese Runde Gewonnen!")
    } else if (spieler == "Schere" && computer == "Papier") {
        gewinneSpieler++;
        alert ("Du hast diese Runde Gewonnen!")
    }
    ///// Zählt die Durchgänge mit \\\\\
    anzahlRunden++;
    ende();
}

///// Gibt aus wer gewonnen hat \\\\\
function ende() {
    if (gewinneSpieler > gewinneComputer && anzahlRunden == gewinnBedingung) {
        alert("Du hast das Spiel Gewonnen!");
        reset();
    } else if (gewinneSpieler < gewinneComputer && anzahlRunden == gewinnBedingung) {
        alert("Du hast das Spiel Verloren!");
        reset();
    } else if (gewinneSpieler == gewinneComputer && anzahlRunden == gewinnBedingung) {
        alert("Unentschieden!");
        reset();
    }
}

function zahlenausgabe() {
    document.getElementById("gewinneComputer").innerHTML = gewinneComputer;
    document.getElementById("gewinneSpieler").innerHTML = gewinneSpieler;
    document.getElementById("gespielteRunden").innerHTML = anzahlRunden;
    document.getElementById("verbleibend").innerHTML = gewinnBedingung - anzahlRunden;
}

///// Setzt die Werte zurück \\\\\
function reset() {
    gewinneSpieler = 0;
    gewinneComputer = 0;
    anzahlRunden = 0;
}