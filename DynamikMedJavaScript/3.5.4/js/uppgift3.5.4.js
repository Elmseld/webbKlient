//Funktion som skapar en tabbad panel och en tooltip med hjälp av jQuery UI och en Skiftande innehållsmeny med hjälp av lightslider
$(function() {
	$('#tabbedPanels').tabs({
				active: 0,
				show: 'slideDown',
				hide: 'fadeOut'
	});
	
	$('[title]').tooltip({
		track: true
	});
	
	$("#lightSlider").lightSlider({
		slideMove: 2,
		keyPress: true
	}); 
	
}); //Slut på funktion för tabb, slide och tooltip