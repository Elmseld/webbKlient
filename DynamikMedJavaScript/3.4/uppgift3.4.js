var cl = setInterval(function(){ clock(); }, 1000);
var c;
var ocWindow;

//Funktion som 
function acp() {
		var txt = prompt("Skriv ditt namn");
	if(txt !== null) {
	 var test = confirm("Är " + txt + " ditt namn?");
		if(test === true) {
			alert("Hej " + txt);
		}
		
	}
}

function oc() {
	ocWindow = window.open("", "Öppna litet fönster", "width=200, height=200");
	ocWindow.document.write("<p>Ge mig lite text</p>");
	setTimeout(function() {
		ocWindow.close();	}, 5000);
}

function fb() {
	$('#fb').focus();
		setTimeout(function() {
		$('#fb').blur();	}, 3000);
}

function scs() {
	clearInterval(cl);
		c = setTimeout(function() {
			alert("Hej"); }, 3000);
}

function ct() {
	clearTimeout(c);
}


function clock() {
	  var date = new Date();
    var time = date.toLocaleTimeString();
    $('#clock').text(time);
}

function mb() {
	ocWindow.moveBy(200, 200);
	ocWindow.focus();
}

function mt() {
	ocWindow.moveTo(250, 400);
	ocWindow.focus();
}

function rb() {
	ocWindow.resizeBy(300, 400);
	ocWindow.focus();
}

function rt() {
	ocWindow.resizeTo(300, 400);
	ocWindow.focus();
}

function s2() {
	window.scrollTo(0,500);
	window.scrollBy(100,0);
}

function printT() {
	window.print();
}

function assignT() {
		location.assign("http://elmseld.se");
}

function reloadT() {
	location.reload();
}

function replaceT() {
	location.replace("http://elmseld.se");
}

// Funktion som väntar tills HTML-dokumentet är färdigladdat innan de kör igång
$(function() {

$('#nsl').click(function() {
	alert("Din webbrowser: " + navigator.appName + "\nden är " + screen.height + " x " + screen.width + " pixlar \noch denna sida ligger på: " + location.host);
});
	
$('#s4').click(function() {
	alert("De horisontela och vertikal cordinaterna av fönster för skrämen " + window.screenLeft + " x " + window.screenTop + "\nför firefox(och alla andra också utom <=IE8) " + window.screenX + " x "+ window.screenY);
});
	
	
$('#i2o2').click(function() {
	alert("Fönsters innerWidth är " + window.innerWidth + "px och innerHeight är " + window.innerHeight + "px \noch fönstrets outerWidth är " + window.outerWidth + "px och outerHeight är " + window.outerHeight + "px");
});
	
$('#p2').click(function() {
	alert("Du har scrollat " + window.pageXOffset + "px horisontellt och " + window.pageYOffset + "px vertikalt");
});


$('#app').click(function() {
	alert("Din webbrowsers kodnamn: " + navigator.appCodeName + "\nDin webbrowser: " + navigator.appName + "\nVersion Info: " + navigator.appVersion + "\nPlatform: " + navigator.platform + " \nAnvändaragent: " + navigator.userAgent);
});	
	
$('#cookieE').click(function() {
	alert("Cookies aktiverade: " + navigator.cookieEnabled);
});
	
$('#wh').click(function() {
alert("Fönstrets bredd: " + screen.width + "px\nDin höjd: " + screen.height + "px\nBredd utan toolbar: " + screen.availWidth + "px\nHöjd utan toolbar: " + screen.availHeight + "px");
});	
	
$('#depth').click(function() {
	alert("Färg djup: " + screen.colorDepth + "\nFärg upplösning: " + screen.pixelDepth);
});		
	
$('#host').click(function() {
	alert("Hostnamn och port: " + location.host + "\nHostnamn: " + location.hostname + "\nPort(om 80 syns inget): " + location.port);
});
	
$('#hpphs').click(function() {
	alert("Sidan url: " + location.href + "\nProtokoll: " + location.protocol + "\nSidans Path " + location.pathname + "\n Sidans ankar path om den finns " + location.hash + "\nSidans querystring och det finns någon  " + location.search);
});
	
}); // Slut shortcut