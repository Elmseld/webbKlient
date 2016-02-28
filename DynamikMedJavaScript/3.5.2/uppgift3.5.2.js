//Funktion som byter ut en bild mot en annan både från början med anrop photo och när man för muspekaren över med anrop roll
$(function() {
	
	var news = new Image();
	news.src	= '../img/Heart.png';
	var oldSrc = $('#roll').attr('src');
	
	$('#photo').attr('src', news.src);
	
	$('#roll').hover(function() {
		$(this).attr('src', news.src);
	},
	function() {
		$(this).attr('src', oldSrc);
	}); //Slut rollover-funktion
	
}); //Slut swap-funktion

//Funktion för canvas
$(function() {
	var canvas = document.getElementById('drawLines');
	var context = canvas.getContext("2d");
	
		//Line-style
		context.lineWidth = 10;
		context.strokeStyle = "aquamarine";
		
		//Först linje
		context.moveTo(40,20);
		context.lineTo(250, 200);
		context.lineCap = "butt";
		context.stroke();
	
		//Andra linje
	  context.beginPath();
		context.moveTo(140,120);
		context.lineTo(350, 100);
		context.lineTo(400, 30);
		context.lineCap = "round";
		context.stroke();
	
		//Rita Fyrkant
	  context.beginPath();
		context.moveTo(500,300);
		context.lineTo(500, 400);
		context.lineTo(700, 400);
		context.lineTo(700, 300);
		context.closePath();
	
		context.fillStyle = "lightpink";
		context.fill();
	
		context.lineCap = "butt";
		context.stroke();
		//Ifylld fyrkant
		context.fillRect(300,300,100,150);
	
		//Bezier kurva
		context.beginPath();
		context.moveTo(217, 420);
		// Create variables for the two control points and the end point of the curve.
		var control1_x = 344;
		var control1_y = 703;
		var control2_x = -5;
		var control2_y = 376;
		var endPointX = 137;
		var endPointY = 727;
	
		// Rita kurvan
		context.bezierCurveTo(control1_x, control1_y, control2_x, control2_y,
		endPointX, endPointY);
		context.lineWidth = 6;
		context.strokeStyle = "darkmagenta";
		context.stroke();
	
		//Transparant cirkel
		context.fillStyle = "rgba(100,150,185,0.5)";
		// Draw a circle.
		context.beginPath();
		context.arc(680, 320, 100, 0, 2*Math.PI);
		context.fill();
		context.stroke();
	
		//Lägger till en bild på canvasen
		var bildC = new Image();
		bildC.onload = function() {
			context.drawImage(bildC, 650, 650);
		};
		bildC.src = "../img/heart.png";
	
		//Skapa en form med mönster
		var monster = new Image();
		monster.onload = function() {
			var pattern = context.createPattern(monster, "repeat");
			context.beginPath();
			context.fillStyle = pattern;
			context.rect(650, 0, canvas.width, 150);
			context.fill();
		};
		monster.src = "../img/brick-tile.jpg";
	
		//Skriver ut dagens datum och tid på canvasen
		var date = new Date();
    var time = date.toLocaleString();
		context.font = "20px Comic Sans MS,sans-serif";
		context.fillStyle = "darkorange";
		context.fillText(time, 700, 650);
	
		//Ritar ut en skuggad cirkel
		context.save();
		context.fillStyle = "steelblue";
		context.shadowColor = "#bbbbbb";
		context.shadowBlur = 20;
		context.shadowOffsetX = 15;
		context.shadowOffsetY = 15;

		context.beginPath();
		context.arc(880, 520, 100, 0, 2*Math.PI);
		context.fill();
		context.restore();
	
		// Skapa en gradient från punkterna (0,0) till (800,0).
		var gradient = context.createLinearGradient(0, 0, 800, 0);
		//Lägg till de två färgerna för gradienten
		gradient.addColorStop(0, "magenta");
		gradient.addColorStop(1, "yellow");
		
     // Skapa formen
     context.beginPath();
     context.moveTo(370, 580);
     context.bezierCurveTo(330, 600, 330, 650, 430, 650);
     context.bezierCurveTo(450, 680, 520, 680, 540, 650);
     context.bezierCurveTo(620, 650, 620, 620, 590, 600);
     context.bezierCurveTo(630, 540, 570, 530, 540, 550);
     context.bezierCurveTo(520, 505, 450, 520, 450, 550);
     context.bezierCurveTo(400, 505, 350, 520, 370, 580);

     // Avsluta formen och stilsätt ytterlinjen
     context.closePath();
     context.lineWidth = 3;
     context.strokeStyle = 'darkblue';
	
		// Rita ut formen med gradient fyllning
		context.fillStyle = gradient;
		context.fill();
		context.stroke();
	
	
		//Spara Canvasen och lägg den i ett img 
		$('#saveB').click(function() {	
			var imageCopy = document.getElementById("saveI");
			imageCopy.src = canvas.toDataURL();
			imageCopy.style.display = "block";
		}); //Slut på spar-funktion
	
}); //Slut canvas-funktion
