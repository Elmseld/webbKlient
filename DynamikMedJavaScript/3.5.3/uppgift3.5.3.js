$(function() {
	
	$('a[href^="http://"]').attr('target', '_blank');
	
	$('.sm').smartmenus( {
		showFunction: function($ul, complete) {
			$ul.slideDown(450, complete);
		},
		
		hideFunction: function($ul, complete) {
		$ul.slideUp(450, complete);
	}
	}); // slut på smart meny
	
}); //Slut på för exerna länkar funktion