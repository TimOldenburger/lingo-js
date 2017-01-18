var imported = document.createElement('script');
imported.src = 'woordenlijst.json';
document.head.appendChild(imported);
var game = 0;
var line_id = 1;
var i = 0;
var button = 0;
var win = 0;

function myFunction() {
	if (button == 0) {
		game = 1;
		button = 1;
		i = Math.floor((Math.random() * 479) + 1);
		console.log(woorden[i]);
		woorden[i] = woorden[i].toUpperCase();
		var ans = woorden[i].split(""); //losse letter juiste woord
		var x = document.getElementsByClassName('firstletter');
		x[0].innerHTML = ans[0];
		x[0].style.visibility = "visible";
	} else {
		window.location = window.location;
		button = 0;
	}
}

function raadHetWoord() {
	var guess = document.getElementById('guess').value;
	console.log("wuut");
		if (guess.length == 5) {
		var res = guess.toUpperCase();
		var str = res.split(""); //losse letters guess
		var ans = woorden[i].split(""); //losse letter juiste woord
		var x = document.getElementById('line_'+line_id);
		x.getElementsByClassName('firstletter')[0].innerHTML = ans[0];
		var y = x.getElementsByClassName('input');
		for (var t = 0; t < ans.length; t++) {
			y[t].innerHTML = str[t];
			if (str[t] == ans[t]) {
				y[t].style.backgroundColor = "green";
				console.log("green");
				str[t] = "";
				ans[t] = "-";
			}
		}
		for (var t = 0; t < ans.length; t++) {
			if (ans.includes(str[t])) {
				y[t].style.backgroundColor = "orange";
				console.log("orange");
			}
		}
		line_id++;
		if (res == woorden[i]) {
			win = 1;
			setTimeout(function() {
				alert("Gefeliciteerd, je hebt het woord geraden!");
				window.location = window.location;
			}, 10);
		}
		if (line_id < 6) {
			x = document.getElementById('line_'+line_id);
			y = x.getElementsByClassName('firstletter');
			woorden[i] = woorden[i].toUpperCase();
			ans = woorden[i].split(""); 
			y[0].innerHTML = ans[0];
			y[0].style.visibility = "visible";
		} else {
			if (win == 0) {
				setTimeout(function() {
					alert("Helaas, je hebt verloren");
					window.location = window.location;
				}, 0);
			}
		}
	} else {
		alert("Vul eerst een vijf letterwoord in");
	}
}

setTimeout(function() {
	myFunction();
}, 0);