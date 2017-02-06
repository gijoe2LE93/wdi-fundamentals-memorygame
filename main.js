console.log("JS file is connected to HTML! Woo!")
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/*if (cardOne === cardTwo || cardThree === cardFour) 
	{alert ("You found a match!!");
}

else {
	alert ("Sorry, try again");
} 
*/



// Get an element with the id of game-board and set it to a variable.
var gameboard = document.getElementById('game-board');

// create a for loop that creates an HTML element for each card. 
for (var i = 0; i < 4; i++) {

// Each HTML element should be a div and have the class card
var newCard = document.createElement('div');
newCard.className = 'card';

//Append each newly created card to the div with the ID game-board

document.querySelector('#game-board').appendChild(newCard);
}
	