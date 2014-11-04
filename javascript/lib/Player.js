function Player(name) {
  this.name = name;
}

Player.prototype.picks = function(pick) {
  this.pick = pick;
}

var weapons = ['rock', 'paper', 'scissors'];

Player.prototype.randomPicks = function(randomPick) {
	
	var randomPick = weapons[Math.floor(Math.random()*weapons.length)];
	// assign the instance of pick to the random pick
	this.pick = randomPick;
}


// Player.prototype.RandomPick = function(RandomPick) {
// 	var things = ['rock', 'paper', 'scissors'];
// 	var RandomPick = things[Math.floor(Math.random()*things.length)];
// 	alert('The computer chose: ' + RandomPick);
// }


// var weapons = ['rock', 'paper', 'scissors'];

// var RandomPick = weapons[Math.floor(Math.random()*weapons.length)];
// // 	alert('The computer chose: ' + RandomPick);
// // }

// Randompick