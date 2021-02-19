//Adding team logo
var logo = document.createElement('img');
logo.src = fcRad.logo;
document.getElementsByTagName('header')[0].appendChild(logo);

//Adding team name
var main = document.getElementsByTagName('main');
var teamName = document.createElement('h1');
teamName.innerHTML = fcRad.team;
document.getElementsByTagName('body')[0].insertBefore(teamName, main[0]);

//Function for creation of sections
var sectionCreate = function(parentNode, nodeClass, headerContent) {
	var section = document.createElement('section');
	section.setAttribute('class', nodeClass);
	var headerTwo = document.createElement('h2');
	headerTwo.innerHTML = headerContent;
	section.appendChild(headerTwo);
	parentNode[0].appendChild(section);
}

//Function for adding players
var playerAdd = function(parentNode, arrPlayers, numPlayers) {
	for (var i = 0; i < numPlayers; i++) {
		var divElem = document.createElement('div');
		divElem.setAttribute('class', 'player');
		var randomNum;
		if (i === 0) {
			//Adding goalkeepers
			if (numPlayers === 11) {
				randomNum = Math.round(Math.random());
				console.log(randomNum);
			} else {
				randomNum = 0;
				console.log(randomNum);
			}
			
		} else {
			//Adding other players
			
		}
		parentNode.appendChild(divElem);
	}
	
}

//Functions executions
sectionCreate(main, 'first-team', 'The First Team');
sectionCreate(main, 'reserve', 'Reserve');
playerAdd(document.querySelector('.first-team'), fcRad.playersList, 11);
playerAdd(document.querySelector('.reserve'), fcRad.playersList, 4);


//Function for swapping of players