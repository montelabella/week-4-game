
//need 4 crystals with random result//
var purpleNum = 0;
var blueNum = 0;
var pinkNum = 0;
var redNum = 0;
var randomResult = 0;
var totalScore = 0;
var lossCount = 0;
var winCount = 0;

///// A NEW THING I LEARNED ON W3/// yea not jquery 
function checkValue(e)
{ 
	switch(e.target.id) {
	case "purple":
		totalScore=totalScore+purpleNum;
		break;
	case "blue":
		totalScore=totalScore+blueNum
		break;
	case "pink":
		totalScore=totalScore+pinkNum
		break;
	case "red":
		totalScore=totalScore+redNum;
		break;	
	}
	updateScore();
	if (totalScore > randomResult){
		alert("You Lost");
		updateGameCount(false);
	}
	else if(totalScore == randomResult){
		alert("Congratulations!!!");
		updateGameCount(true);
	}
	}


function startGame(){
	randomResult = Math.floor(Math.random() * 101) + 19;
	purpleNum = Math.floor(Math.random() * 11) + 1;
	blueNum = Math.floor(Math.random() * 11) + 1;
	pinkNum = Math.floor(Math.random() * 11) + 1;
	redNum = Math.floor(Math.random() * 11) + 1;
	totalScore=0;
	$('#guessingNumber').text('Number to Guess: ' + randomResult);
	$('#totalScore').text('Number to Guess: ' + totalScore);
}

function updateScore(){
	$('#totalScore').text('Total Score is: ' + totalScore)
}

function updateGameCount(win){
	if (!win){
		lossCount++;
	}else{
		winCount++;
	}
	$('#scoreboard').text("Wins: " + winCount + " Losses: " + lossCount);
	startGame();
	
}


