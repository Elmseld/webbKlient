var cars = ["Saab", "Volvo", "BMW"];
var today = Date();


// Funktion som lopar igenom en array och skriver ut innehållet och avslutar med att anropa funktionen booleanEx
function arrayEx() {
	for(var i= 0; i < cars.length; i++) {
		document.write(cars[i] + "</br>");
	}
	booleanEx();
}

// Funktion som frågar efter användarens namn och kontrollerar att de bara innehåller bokstäver och börjar med en stor bokstav, om namnet är validerat skrivs Hej namn och dagens datum och anropar mathEx, om namnet inte valieras kommer ett felmeddelande upp och ett anrop till funktionen.
function booleanEx() {
	var namn = prompt("Hej vad heter du?");
	var baraBoks = /^[A-Z]{1}[a-z]+$/;
	
	
	if(baraBoks.test(namn)) {
		document.write("Hej " + namn);
		document.write("</br> Idag är det " + today);
		mathEx();
	}
	else {
		alert("eh, bättre kan du, bara bokstäver börjar på stor bokstav!");
		booleanEx();
	}
}

//Function som räknar ut roten ur inmatat tal
function mathEx() {
	var tal = prompt("Skriv ett tal, så räknar jag ut roten");
	
	if(isNaN(tal) === false) {
			var roten = Math.sqrt(tal);
			document.write("</br>Roten ur " + tal + " är = " + roten);
	}
	else {
		alert("Nope försök igen, bara tal denna gången är du snäll!");
		mathEx();
	}
	
}