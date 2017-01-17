console.log("JS file is connected to HTML! Woo!")
/*var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';*/

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

var cards = ['queen', 'queen', 'king', 'king']

var cardsInPlay = []

var newGame = function('createBoard');
for (var i = 0; i < cards.length; i++) {
	cardElement.setAttribute('data-card', cards[i]);
	cardElement.addEventListener('click', isTwoCards);

}

function isMatch()

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
}





