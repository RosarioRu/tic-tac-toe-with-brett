//Business Logic 

//Player constructor and Prototypes

//Space Constructor and Prototypes



//Board Constructor and Prototypes

let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
let tie = false;
let result = 0;

//The player enters a number in order to take their turn

function playerTurn (square, board) 
{
    square -=1;
    if (board[square] != "X" &&  board[square] != "O")
    {
        board[square] = "X";
    }
    else
    {
        alert("Invalid Move")
        return;
    }
checkforwin(board, tie);
}


//The computer picks a random tile in order to take its turn

function computerTurn (board)
{
   tactic = "null"
   tie = tieChecker(board, tie);
   tactic = stratagy(board, tactic)
   if (tactic === "null")
   {
    tactic = Math.floor(Math.random() * 9);
    console.log("No strat")
   }
   else
   {
     console.log("Strat")
   }

if (tie === false)
{
    if (board[tactic] != "X" &&  board[tactic] != "O")
    {
        
        board[tactic] = "O";
    }
    else 
    {

        computerTurn(board);
    }
    checkforcompwin(board, tie);
}
}

//Checks to see if the player has won, if they haven't, tells the computer to take their turn

function checkforwin (board, tie)
{

  if (tie === true) {
    winner(result);
  }
  
    if (board[0] === "X" && board[1] === "X" && board[2] === "X")
    {
      result = 1;
      winner(result);
    }
    else if (board[3] === "X" && board[4] === "X" && board[5] === "X")
    {
      result = 1;
      winner(result);
    }

    else if (board[6] === "X" && board[7] === "X" && board[8] === "X")
    {
      result = 1;
      winner(result);
    }

    else if (board[0] === "X" && board[3] === "X" && board[6] === "X")
    {
      result = 1;
      winner(result);
    }

    else if (board[1] === "X" && board[4] === "X" && board[7] === "X")
    {
      result = 1;
      winner(result);
    }

    else if (board[2] === "X" && board[5] === "X" && board[8] === "X")
    {
      result = 1;
      winner(result);
    }
    
    else if (board[0]==="X" && board[4]==="X" && board[8]==="X") { 
      result = 1;
      winner(result);
    } 
    else if (board[2]==="X" && board[4]==="X" && board[6]==="X") {
      result = 1;
      winner(result);
    }
   
    else {
      computerTurn(board); 
    }

  
}
//Checks to see if the computer has won

function checkforcompwin (board, tie)
{

  if (tie === true) {
    winner(result);
  }

    if (board[0] === "O" && board[1] === "O" && board[2] === "O")
    {
      result = 2;
      winner(result);
    }
    else if (board[3] === "O" && board[4] === "O" && board[5] === "O")
    {
      result = 2;
      winner(result);
    }

    else if (board[6] === "O" && board[7] === "O" && board[8] === "O")
    {
      result = 2;
      winner(result);
    }

    else if (board[0] === "O" && board[3] === "O" && board[6] === "O")
    {
      result = 2;
      winner(result);
    }

    else if (board[1] === "O" && board[4] === "O" && board[7] === "O")
    {
      result = 2;
      winner(result);
    }

    else if (board[2] === "O" && board[5] === "O" && board[8] === "O")
    {
      result = 2;
      winner(result);
    }
    
    else if (board[0]==="O" && board[4]==="O" && board[8]==="O") 
    { 
      result = 2;
      winner(result);
    } 
    else if (board[2]==="O" && board[4]==="O" && board[6]==="O") 
    {
      result = 2;
      winner(result);
    }
}


//Checks to see if all tiles are full

function tieChecker (board, tie)
{
  x = 0;
  board.forEach(function(element) {
  
    if (element === " ") {
      x += 1;
    } 
  });
  if (x === 0) 
  {
    tie = true;
  }
  return tie;
}

//Checks the board to find out what stratagy the computer should be using

function stratagy (board, tactic)
{
  winOne = [board[0], board[1], board [2]]
  winTwo = [board[3], board[4], board [5]]
  winThree = [board[6], board[7], board [8]]
  winFour = [board[0], board[3], board [6]]
  winFive = [board[1], board[4], board [7]]
  winSix = [board[2], board[5], board [8]]
  winSeven = [board[0], board[4], board [8]]
  winEight = [board[2], board[4], board [6]]

  winOneP = 0
  winOneC = 0
  winTwoP = 0
  winTwoC = 0
  winThreeP = 0
  winThreeC = 0
  winFourP = 0
  winFourC = 0
  winFiveP = 0
  winFiveC = 0
  winSixP = 0
  winSixC = 0
  winSevenP = 0
  winSevenC = 0
  winEightP = 0
  winEightC = 0

  
  tactic = threechecker (winOne, winOneP, winOneC, tactic);
  if (tactic === "winning" || tactic === "blocking") 
  {
    tactic = spotter(winOne, tactic);

    if (tactic === 0)
    {
      tactic = 0;
      return tactic;
    }
    else if (tactic ===  1)
    {
      tactic = 1;
      return tactic;
    }
    else 
    {
      tactic = 2;
      return tactic;
    }
  }
  tactic = threechecker (winTwo, winTwoP, winTwoC, tactic);
  if (tactic === "winning" || tactic === "blocking") 
  {
    tactic = spotter(winTwo, tactic);

    if (tactic === 0)
    {
      tactic = 3;
      return tactic;
    }
    else if (tactic === 1)
    {
      tactic = 4;
      return tactic;
    }
    else 
    {
      tactic = 5;
      return tactic;
    }
  }
  tactic = threechecker (winThree, winThreeP, winThreeC, tactic);
  if (tactic === "winning" || tactic === "blocking") 
  {
    tactic = spotter(winThree, tactic);

    if (tactic === 0)
    {
      tactic = 6;
      return tactic;
    }
    else if (tactic === 1)
    {
      tactic = 7;
      return tactic;
    }
    else 
    {
      tactic = 8;
      return tactic;
    }
  }
  tactic = threechecker (winFour, winFourP, winFourC, tactic);
  if (tactic === "winning" || tactic === "blocking") 
  {
    tactic = spotter(winFour, tactic);

    if (tactic === 0)
    {
      tactic = 0;
      return tactic;
    }
    else if (tactic === 1)
    {
      tactic = 3;
      return tactic;
    }
    else 
    {
      tactic = 6;
      return tactic;
    }
  }
  tactic = threechecker (winFive, winFiveP, winFiveC, tactic);
  if (tactic === "winning" || tactic === "blocking") 
  {
    tactic = spotter(winFive, tactic);

    if (tactic === 0)
    {
      tactic = 1;
      return tactic;
    }
    else if (tactic === 1)
    {
      tactic = 4;
      return tactic;
    }
    else 
    {
      tactic = 7;
      return tactic;
    }
  }
  tactic = threechecker (winSix, winSixP, winSixC, tactic);
  if (tactic === "winning" || tactic === "blocking") 
  {
    tactic = spotter(winSix, tactic);

    if (tactic === 0)
    {
      tactic = 2;
      return tactic;
    }
    else if (tactic === 1)
    {
      tactic = 5;
      return tactic;
    }
    else 
    {
      tactic = 8;
      return tactic;
    }
  }
  tactic = threechecker (winSeven, winSevenP, winSevenC, tactic);
  if (tactic === "winning" || tactic === "blocking") 
  {
    tactic = spotter(winSeven, tactic);

    if (tactic === 0)
    {
      tactic = 0;
      return tactic;
    }
    else if (tactic === 1)
    {
      tactic = 4;
      return tactic;
    }
    else 
    {
      tactic = 8;
      return tactic;
    }
  }
  tactic = threechecker (winEight, winEightP, winEightC, tactic);
  if (tactic === "winning" || tactic === "blocking") 
  {
    tactic = spotter(winOne, tactic);

    if (tactic === 0)
    {
      tactic = 2;
      return tactic;
    }
    else if (tactic === 1)
    {
      tactic = 4;
      return tactic;
    }
    else 
    {
      tactic = 6;
      return tactic;
    }
  }

  
  

  //Sets tactic back 
  tactic = "null";
  return tactic;
}

//Checks a possible win line to see if either player is one move away from winning

function threechecker (line, player, comp, tactic)
{
  non = 0;
  line.forEach(function(element) {
  if (element === "X") {
    player += 1;
  }
  else if (element === "O") {
    comp += 1;
  }
  else {
    non += 1;
  }
  });
console.log(comp, player, non);
if (comp === 2 && non !== 0) {

  tactic = "winning"
  return tactic;
}
else if (player === 2 && non !== 0) {

  tactic = "blocking"
  return tactic;
}
tactic = "null";
return tactic;
}

//Checks a win line to find out which tile the move needs to be made in order to win or block.

function spotter (line, tactic)
{
  console.log("Spotter Called!")
  for (i = 0; i < line.length; i++)
  {
    if (line[i] === " ")
    {
      
      tactic = (i);
    }
  }
  return tactic;
}


//Game Constructor and Prototypes



//UI Logic

function running (playerInput)
{
    playerTurn (playerInput, board);
    // $(".lineOne").text(board[0] + board[1] + board[2]);
    $(".topRow1").text(board[0]);
    $(".topRow2").text(board[1]);
    $(".topRow3").text(board[2]);
    $(".middleRow1").text(board[3]);
    $(".middleRow2").text(board[4]);
    $(".middleRow3").text(board[5]);
    $(".bottomRow1").text(board[6]);
    $(".bottomRow2").text(board[7]);
    $(".bottomRow3").text(board[8]);
  
}

$(document).ready(function() {
    $("#formOne").submit(function(event) {
        event.preventDefault();
        running($("input#input").val());
        $("input#input").val("");
        
        

    })
});

function winner (result)
{
  console.log(result)
  if (result === 1)
  {
    console.log("Player Wins");
    $(".winning").show();
    
    
    
  }
  else if (result === 2)
  {
    console.log("Computer Wins");
    $(".losing").show();
  }
  else
  {
    console.log("Nobody Wins");
    $(".tie").show();
  }
  reset(board);
}

function reset (board)
{
  board = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
  //playerTurn (playerInput, board);
  // $(".lineOne").text(board[0] + board[1] + board[2]);
  $(".topRow1").text(board[0]);
  $(".topRow2").text(board[1]);
  $(".topRow3").text(board[2]);
  $(".middleRow1").text(board[3]);
  $(".middleRow2").text(board[4]);
  $(".middleRow3").text(board[5]);
  $(".bottomRow1").text(board[6]);
  $(".bottomRow2").text(board[7]);
  $(".bottomRow3").text(board[8]); 
}
   