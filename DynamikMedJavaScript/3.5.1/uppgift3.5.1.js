function showB() {
	$('#sht').show();
}

function hideB() {
	$('#sht').hide();
}

function toggleB() {
	$('#sht').toggle();
}

function ffff() {
	$('#fadeIn').fadeIn(3000);
	$('#fadeOut').fadeOut(3000);
	$('#fadeToggle').fadeToggle('slow');
	$('#fadeTo').fadeTo('slow', 0.4);
	
}

function anim() {
	$('#animateB').animate({
		left: '300px',
		opacity: '0.5',
		width: '300px'
	}, {
			duration: 4000,
      easing: "linear",
      complete: function(){
        $(this).after("<p>Animationen är slut!</p>");
      }
	});
}