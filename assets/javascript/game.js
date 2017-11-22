var targetScore; // Between 19 and 120
var crystals = []; // Array hold crystal values between 1 and 12

var score = 0;
var wins = 0;
var losses = 0;

// Return random integer between min and max
function getRandomNum(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

function setGame() {

	targetScore = getRandomNum(19, 119);
	$("#target-Score").text(targetScore);

	// Add a loop in the crystal array

	for (var i =0; i < 4; i++) {
		var standIn = getRandomNum (1, 12);
		crystals.push(standIn);
	};

	// Reset

	score = 0;
	$("#userScore").text(score);
};

// Checks

function checkScore() {
	if (score === targetScore) {
		alert("YOU WIN!");
		wins++;
		$("#win-count").text(wins);
		setGame();
	} else if (score > targetScore) {
		alert("YOU LOSE!");
		losses++;
		$("#loss-count").text(losses);
		setGame();
	};
};

$(document).ready(function() {
	setGame();
	$("#win-count").text(wins);
	$("#loss-count").text(losses);

	// Loop to set crystal click

	for (let i = 0; i < crystals.length; i++) {
		$("#crystal" + (i + 1)).on("click", function() {
			var crystalValue = parseInt(crystals[i]);
			score += crystalValue;
			("#userScore").text(score);
			checkScore();
		});
	};
});
