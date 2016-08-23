$(document).ready (function () {



//Global Variables:

var targetPoints= [];
var ship1Points=0;
var ship2Points=0;
var ship3Points=0;
var ship4Points=0;
var cumulativePoints=0;

//Game counters
var winCounter=0;
var lossCounter=0;
var numGuesses=4;
var totalScore=0;

//========================================================================================================================
//Functions:

function calcTarget(){
	var randNumber = Math.floor((Math.random()*120-19+1)+19);
	console.log(randNumber);
	$("#targetValue").html(randNumber);
	// return randNumber;
}

function shipOnePoints(){
	var randOneNumber = Math.floor((Math.random()*12)+1);
	console.log(randOneNumber);
	$("#button1").attr("data-val",randOneNumber);

}

function shipTwoPoints(){
	var randTwoNumber = Math.floor((Math.random()*12)+1);
	console.log(randTwoNumber);
	$("#button2").attr("data-val",randTwoNumber);	
}

function shipThreePoints(){
	var randThreeNumber = Math.floor((Math.random()*12)+1);
	console.log(randThreeNumber);
	$("#button3").attr("data-val",randThreeNumber);	
}

function shipFourPoints(){
	var randFourNumber = Math.floor((Math.random()*12)+1);
	console.log(randFourNumber);
	$("#button4").attr("data-val",randFourNumber);
}


function startGame() {
	calcTarget();
	shipOnePoints();
	shipTwoPoints();
	shipThreePoints();
	shipFourPoints();

}

//EventListeners

	$("#button1").on("click", function(){
		console.log("button1 value: "+ $(this).attr("data-val"));
		cumulativePoints +=$(this).attr("data-val");
		$("#scoreTotal").html(cumulativePoints);
		numGuesses--;
		console.log(numGuesses);
	};

	$("#button2").on("click", function(){
		console.log("button2 value: "+ $(this).attr("data-val"));
		cumulativePoints +=$(this).attr("data-val");
		$("#scoreTotal").html(cumulativePoints);
		numGuesses--;
		console.log(numGuesses);
	});

	$("#button3").on("click", function(){
		console.log("button3 value: "+ $(this).attr("data-val"));
		cumulativePoints +=$(this).attr("data-val");
		$("#scoreTotal").html(cumulativePoints);
		numGuesses--;
		console.log(numGuesses);
	});	

	$("#button4").on("click", function(){
		console.log("button1 value: "+ $(this).attr("data-val"));
		cumulativePoints +=$(this).attr("data-val");
		$("#scoreTotal").html(cumulativePoints);
		numGuesses--;
		console.log(numGuesses);
	});	





startGame();




});