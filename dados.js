function rollDice(){
	var dado1 = document.getElementById('dado1');
	var dado2 = document.getElementById('dado2');
	var d1 = Math.floor(Math.random() * 6) + 1;
	var d2 = Math.floor(Math.random() * 6) + 1;
	dado1.innerHTML = d1;
	dado2.innerHTML = d2;
}