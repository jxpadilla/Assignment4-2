// (function() {

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
	var rand1Number = Math.floor(Math.random()*12)+1;
	console.log(rand1Number);
	$("#button1").attr("data-val",rand1Number);
	

	
}

function shipTwoPoints(){
	var rand2Number = Math.floor(Math.random()*12)+1;
	console.log(rand2Number);
	
}

function shipThreePoints(){
	var rand3Number = Math.floor(Math.random()*12)+1;
	console.log(rand3Number);
	
}

function shipFourPoints(){
	var rand4Number = Math.floor(Math.random()*12)+1;
	console.log(rand4Number);
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
	});







startGame();




