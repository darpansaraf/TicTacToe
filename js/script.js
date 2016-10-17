var player1 = true;
var isEnabled = [0,0,0,0,0,0,0,0,0];
var board = [
  [-1,-1,-1],
  [-1,-1,-1],
  [-1,-1,-1]
];
var matchTied = true;
var counter = 0;

function showWinner(winnerId)
{
  if(winnerId === 1)
  	document.getElementById("winnerDetails").innerHTML = "Player 1 Wins..!";
  else if(winnerId === 2)
    document.getElementById("winnerDetails").innerHTML = "Player 2 Wins..!";
  else
    document.getElementById("winnerDetails").innerHTML = "Match Tied..!"
  // Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    window.location.reload();
};

modal.style.display = "block";
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      window.location.reload();
    }
};
}



function CheckBoard(){
  counter++;
  if(board[0][0] === 0 && board[0][1] === 0 && board[0][2] === 0){
  matchTied = false;
	showWinner(1);    
  }
  else if(board[0][0] === 1 && board[0][1] === 1 && board[0][2] === 1){
    matchTied = false;
    showWinner(2);
  }
  else if(board[1][0] === 0 && board[1][1] === 0 && board[1][2] === 0){
    matchTied = false;
    showWinner(1);
  }
  else if(board[1][0] === 1 && board[1][1] === 1 && board[1][2] === 1){
    matchTied = false;
    showWinner(2);
  }
  else if(board[2][0] === 0 && board[2][1] === 0 && board[2][2] === 0){
    matchTied = false;
    showWinner(1);
  }
  else if(board[2][0] === 1 && board[2][1] === 1 && board[2][2] === 1){
    matchTied = false;
    showWinner(2);
  }
  else if(board[0][0] === 0 && board[1][0] === 0 && board[2][0] === 0){
    matchTied = false;
    showWinner(1);    
  }
  else if(board[0][0] === 1 && board[1][0] === 1 && board[2][0] === 1){
    matchTied = false;
    showWinner(2);
  }
  else if(board[0][1] === 0 && board[1][1] === 0 && board[2][1] === 0){
    matchTied = false;
    showWinner(1);
  }
  else if(board[0][1] === 1 && board[1][1] === 1 && board[2][1] === 1){
    matchTied = false;
    showWinner(2);
  }
  else if(board[0][2] === 0 && board[1][2] === 0 && board[2][2] === 0){
    matchTied = false;
    showWinner(1);
  }
  else if(board[0][2] === 1 && board[1][2] === 1 && board[2][2] === 1){
    matchTied = false;
    showWinner(2);
  }
  else if(board[0][0] === 0 && board[1][1] === 0 && board[2][2] === 0){
    matchTied = false;
    showWinner(1);
  }
  else if(board[0][0] === 1 && board[1][1] === 1 && board[2][2] === 1){
    matchTied = false;
    showWinner(2);
  }
  else if(board[2][0] === 0 && board[1][1] === 0 && board[0][2] === 0){
    matchTied = false;
    showWinner(1);
  }
  else if(board[2][0] === 1 && board[1][1] === 1 && board[0][2] === 1){
    matchTied = false;
    showWinner(2);
  }

  if(counter === 9 && matchTied === true)
    showWinner(-1);
}

 function animateCircle(current) {
     context.beginPath();
     context.arc(x, y, radius, -(quart), ((circ) * current) - quart, false);
     context.stroke();
     curPerc+=7;
     if (curPerc < endPercent) {
         requestAnimationFrame(function () {
             animateCircle(curPerc / 100);
         });
     }
 }

function animateCross(current)
{
  context.beginPath();
  context.moveTo(x - 20, y - 20);
    context.lineTo(x + 20, y + 20);
    context.stroke();

    context.moveTo(x + 20, y - 20);
    context.lineTo(x - 20, y + 20);
    context.stroke();
}


function initialize(elementId){
var requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||                            window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
window.requestAnimationFrame = requestAnimationFrame;
var canvasElementId = 'canvasElement-'+ elementId;
console.log(canvasElementId);
canvas = document.getElementById(canvasElementId);
console.log(canvas);
context = canvas.getContext('2d');
context.lineWidth = 8;
context.strokeStyle = '#ad2323';
context.shadowOffsetX = 0;
context.shadowOffsetY = 0;
context.shadowBlur = 1;
context.shadowColor = '#656565';
x = canvas.width / 2;
y = canvas.height / 2;
radius = 25;
endPercent = 110;
curPerc = 0;
counterClockwise = true;
circ = Math.PI * 2;
quart = Math.PI / 2;
}

function play(player1)
{
  if(player1)
    animateCircle(0);
   else
  	animateCross();
}

document.getElementById("grid-cell-1").addEventListener("click", function() {
  if(isEnabled[0] === 0)
  {
    isEnabled[0] = 1;
  	initialize(1);
  	play(player1);
  	if(player1 === true)
    {
      	board[0][0]=0;
  		player1 = false;
  	}
  	else
    {
      board[0][0]=1;
      player1 = true;  
    }	
  }
  CheckBoard();
});
 
document.getElementById("grid-cell-2").addEventListener("click", function() {
  console.log("in grid-cell-2 on click function");
  if(isEnabled[1] === 0){
    isEnabled[1] = 1;
  initialize(2);
  play(player1);
  if(player1 === true)
  {
    board[0][1] = 0; 
    player1 = false;
  }
  else
  {
    board[0][1] = 1;
    player1 = true;  
  }
    
  }
  CheckBoard();
});

document.getElementById("grid-cell-3").addEventListener("click", function() {
  console.log("in grid-cell-2 on click function");
  if(isEnabled[2] === 0){
    isEnabled[2] = 1;
  initialize(3);
  play(player1);
  if(player1 === true)
  {
    board[0][2] = 0;
    player1 = false;
  }
  else
  {
    board[0][2] = 1;
    player1 = true;
  } 
  }
  CheckBoard();
});

document.getElementById("grid-cell-4").addEventListener("click", function() {
  if(isEnabled[3] === 0){
    isEnabled[3] = 1;
  initialize(4);
  play(player1);
  if(player1 === true)
  {
    board[1][0] = 0;
    player1 = false;
  }
  else
  {
    board[1][0] = 1;
    player1 = true;
  }
  }
  CheckBoard();
});

document.getElementById("grid-cell-5").addEventListener("click", function() {
  console.log("in grid-cell-2 on click function");
  if(isEnabled[4] === 0){
    isEnabled[4] = 1;
  initialize(5);
  play(player1);
  if(player1 === true)
  {
    board[1][1] = 0;
    player1 = false;
  }
  else
  {
    board[1][1] = 1;
    player1 = true;
  }
  }
  CheckBoard();
});

document.getElementById("grid-cell-6").addEventListener("click", function() {
  console.log("in grid-cell-2 on click function");
  if(isEnabled[5] === 0){
    isEnabled[5] = 1;
  initialize(6);
  play(player1);
  if(player1 === true)
  {
    board[1][2] = 0;
    player1 = false;
  }
  else
  {
    board[1][2] = 1;
    player1 = true;
  }
  }
  CheckBoard();
});

document.getElementById("grid-cell-7").addEventListener("click", function() {
  console.log("in grid-cell-2 on click function");
  if(isEnabled[6] === 0){
    isEnabled[6] = 1;
  initialize(7);
  play(player1);
  if(player1 === true)
  {
    board[2][0] = 0;
    player1 = false;
  }	
  else
  {
    board[2][0] = 1;
    player1 = true;
  }    
  }
  CheckBoard();
});

document.getElementById("grid-cell-8").addEventListener("click", function() {
  //console.log("in grid-cell-2 on click function");
   if(isEnabled[7] === 0){
    isEnabled[7] = 1;
  initialize(8);
  play(player1);
  if(player1 === true)
  {
    board[2][1] = 0;
    player1 = false;
  }
  else
  {
    board[2][1] = 1;
    player1 = true;
  } 
   }
  CheckBoard();
});

document.getElementById("grid-cell-9").addEventListener("click", function() {
  //console.log("in grid-cell-2 on click function");
   if(isEnabled[8] === 0){
    isEnabled[8] = 1;
  initialize(9);
  play(player1);
  if(player1 === true)
  {
    board[2][2] = 0;
    player1 = false;
  }	
  else
  {
     board[2][2] = 1;
     player1 = true;
  }
 }
  CheckBoard();
});

