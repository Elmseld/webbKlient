// Funktion som väntar tills HTML-dokumentet är färdigladdat innan de kör igång
$(function() {
	
	//Byter ut texten i objektet med id=change när fönstret ändrar storlek
	$(window).resize(function() {
			$('#change').html('Javascript går in och ändrar!');
	});
	
	//Lägger till text till objektet med id=add när man släpper en tangent i rutan med id=keyup
	$('#keyup').keyup(function() {
		$('#add').append(' här lägger vi till lite text!');
	});
	
	//raderar objektet med id=delete när man trycket på det och skapar en popupruta med muspekarens kordinatet vid klickningen.
	$('#delete').click(function(event) {
		$(this).remove();
		var xPos = event.pageX;
		var yPos = event.pageY;
		alert('X:' + xPos + ' Y:' + yPos);
	});
	
	//Hämtar informationen från objektet med id=info när man klickar på det och skriver ut den i en popup.
	$('#info').click(function() {
		alert($(this).html());
	});
	
	//Lägger till klassen addClassTest till objektet med id=class när man för muspekaren över objektet.
	$('#class').hover(function() {
		$(this).addClass('addClassTest');
	});
	
	//Stoppar den normala funktionen för objektet med id=prevent när man klickar på det.
	$('#pervent').click(function(event) {
		event.preventDefault();
	});
	
	//Tar bort klickfunktionen på alla p-objekt när man klickar på knappen.
	$('#disable').click(function() {
		$('p').off('click');
	});
	
	//Ger objektet med id=focus fokus när man klickar på det.
	$('#focus').click(function() {
		$('#focus').focus();
	});
	
}); // Slut shortcut