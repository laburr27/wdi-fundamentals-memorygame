console.log("JS file is connected to HTML! Woo!")
var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';

/*if (cardOne === 'queen' && cardTwo === 'queen') {
	result = "You found a match!"
}
alert(result);*/
document.getElementById('game-board');

var x = 4;
for (var i = 0; i < x; i++) {
	var createCards = document.createElement('div');
	createCards.innerHTML = '';
	createCards.className = 'card';
	document.querySelector('div').appendChild(createCards)
}


