//Function for adding img elements
var addImage = function(parentNode, source) {
	var image = document.createElement('img');
	image.src = source;
	parentNode.appendChild(image);
}

//Function for adding players
var playerAdd = function(parentNode, arrPlayers, numPlayers) {
	//Function for adding p elements to div element
	var divPCreate = function(parentNode, property, value) {
		var divP = document.createElement('p');
		divP.innerHTML = property + value;
		parentNode.appendChild(divP);
	}
	//Function for creation of div element
	var elementCreate = function(parentNode, playerData) {
		var divElem = document.createElement('div');
		addImage(divElem, './images/' + playerData.image);
		divPCreate(divElem, 'Name: ', playerData.name);
		divPCreate(divElem, 'Last name: ', playerData.lastname);
		divPCreate(divElem, 'Number: ', playerData.number);
		divPCreate(divElem, 'Position: ', playerData.position);
		divPCreate(divElem, 'Age: ', playerData.age);
		parentNode.appendChild(divElem);
	}

	for (var i = 0; i < numPlayers; i++) {
		var randomNum;
		var tempElement = [];
		if (i === 0) {
			//Adding goalkeepers
			if (numPlayers === 11) {
				randomNum = Math.round(Math.random());
				tempElement = arrPlayers.splice(randomNum, 1);
				elementCreate(parentNode, tempElement[0]);
			} else {
				tempElement = arrPlayers.splice(0, 1);
				elementCreate(parentNode, tempElement[0]);
			}
		} else {
			//Adding other players
			randomNum = Math.ceil(Math.random()*(arrPlayers.length - 1));
			tempElement = arrPlayers.splice(randomNum, 1);
			elementCreate(parentNode, tempElement[0]);
		}
		
	}
	
}

//Adding team logo
addImage(document.getElementsByTagName('header')[0], fcRad.logo);

//Adding team name
var main = document.getElementsByTagName('main');
var teamName = document.createElement('h1');
teamName.innerHTML = fcRad.team;
document.getElementsByTagName('body')[0].insertBefore(teamName, main[0]);

//Adding players
playerAdd(document.querySelector('.first-team'), fcRad.playersList, 11);
playerAdd(document.querySelector('.reserve'), fcRad.playersList, 4);

//BONUS
//Function for swapping of players
var swapPlayers = function() {
	var firstNum = Math.round(Math.random()*10);
	var secondNum = firstNum === 0 ? 0 : Math.ceil(Math.random()*3);
	var oldChild = document.querySelectorAll('.first-team div')[firstNum];
	var newChild = document.querySelectorAll('.reserve div')[secondNum];
	document.querySelector('.first-team').replaceChild(newChild, oldChild);
	if (secondNum === 3) {
		document.querySelector('.reserve').appendChild(oldChild);
	} else {
		document.querySelector('.reserve').insertBefore(oldChild, 
			document.querySelectorAll('.reserve div')[secondNum]);
	}
}

setInterval(swapPlayers, 60*1000);