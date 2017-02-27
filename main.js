console.log("JS file is connected to HTML! Woo!")
/* var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardOne === cardTwo || cardThree === cardFour) 
	{alert ("You found a match!!");
}

else {
	alert ("Sorry, try again");
} 
*/

// Declare a variable, cards, and set it equal 
// to an array of four string elements: 'queen', 'queen', 'king', 'king'.

var cards = ['queen', 'queen', 'king', 'king'];

// Declare a variable, cardsInPlay, whose value is an empty array.

var cardsInPlay = [];

// create a function to create the gameboard

function createCards () 
{
	for (var i = 0; i < cards.length; i++) 
	{
// Each HTML element should be a div and have the class card

	var cardElement = document.createElement('div');
	cardElement.className = 'card';

// this will set the card's 'data-card' to be the element of the array
// data — attributes are meant to store data about an element that is not
// tied to a style,
// i.e., 'king'.

	cardElement.setAttribute('data-card', cards[i]);

// when a card is clicked the function isTwoCards will be executed

	cardElement.addEventListener('click', isTwoCards);

//Append each newly created card to the div with the ID game-board
var gameBoard = document.getElementById('game-board');
	gameBoard.appendChild(cardElement);
	// gameBoard.appendChild(cardElement);	
	}
};

// Create a function called isMatch to test if two cards in play are a match.

function isMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) 
	{
		alert ("You have a match!");

	} else {
		alert ("You don't have a match");
gameReset();
	}
};

// Create a function to reset the cards after a choice
// function gameReset() {
// 	cardsInPlay[0];
// 	createCards();
// };
// Create a function called isTwoCards to check if two cards are in play.

function isTwoCards(){
 
// add card to array of cards in play
// 'this' hasn't been covered in this pre-work, but
// for now, just know it gives you access to the card the user clicked on
  
  cardsInPlay.push(this.getAttribute('data-card'));

// Set the cardElement's inner HTML to an image of either a king or a queen
if (this.getAttribute('data-card') === 'king') {
	this.innerHTML = '<img src="King.png" alt="King"/>';
} else
{
	this.innerHTML = '<img src="Queen.png" alt="Queen"/>';
}

// if you have two cards in play, check for a match
  	if (cardsInPlay.length === 2) {

// pass the cardsInPlay as an argument to the isMatch function
    isMatch(cardsInPlay);

// clear cards in play array for your next try
    cardsInPlay = []
   var gameReset = document.getElementByClassName('card');
gameReset = cardElement;
  }
	
}

createCards();























