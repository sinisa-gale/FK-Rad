//TASK #1
var alertOnLine = function() {
	var status = window.navigator.onLine;
	status ? alert('Browser is currently on-line') : alert('Browser is currently off-line');
}

//TASK #2
var reloadPage = function() {
	window.location.reload()
}

//TASK #3
var redirectPage = function() {
	window.location.assign('http://www.google.com')
}
var redirectGoogle = function() {
	setTimeout(redirectPage, 3000)
}

//TASK #4
var timelapse;
var counter = 0;
var disp = function() {
	counter <= 15 ?	console.log(counter) : clearInterval(timelapse);
	counter++;
}

var timeDisplay = function() {
	timelapse = setInterval(disp, 1000)
}

//TASK #5
var rand10 = function() {
	return Math.round(Math.random()*10)
}

var dispRand = function() {
	console.log(rand10())
}

//TASK #6
var users = [
	{name: "Petar", age: 32, status: "inactive"},
	{name: "Ivana", age: 54, status: "inactive"},
	{name: "Dejan", age: 18, status: "inactive"},
	{name: "Milica", age: 47, status: "inactive"},
	{name: "Stefan", age: 29, status: "inactive"},
]

var logFunction = function() {
	//Function for changing of user's status
	var statusChange = function(arr, uName, state) {
		arr.forEach(function(item) {
				if (item.name === uName) {
					item.status = state
				}
			});
	}

	//Function for checking if user exists, and if does, stores user's info into local storage
	var userCheck = function(arr) {
		var namePrompt = prompt('Please enter user name:');
		var found = arr.filter(function(item) {
			return item.name.toUpperCase() === namePrompt.toUpperCase()
		});
		if (found[0]) {
			found[0].status = "active";
			statusChange(arr, found[0].name, "active");
			//Storing of user's info as string
			localStorage.setItem('loggedInUser', found[0].name + "," +  found[0].age + "," + found[0].status);
		} else {
		console.log("User with name " + namePrompt + " doesn't exists.")
		}
	}

	//Function for user logging out
	var loggOutUSer = function(arr) {
		var userName = localStorage.getItem('loggedInUser').split(",")[0];
		localStorage.removeItem('loggedInUser');
		statusChange(arr, userName, "inactive");
		console.log("The user", userName, "has logged out.");
	}

	//Main function for user log in
	userCheck(users);
	//Main condition for user log out
	localStorage.getItem('loggedInUser') ? setTimeout(function () {loggOutUSer(users)}, 60*1000) : {}
}
