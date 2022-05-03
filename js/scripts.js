//Business Logic 

//Player constructor and Prototypes

//Space Constructor and Prototypes



//Board Constructor and Prototypes

let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
let tie = false;
let result = 0;

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

function computerTurn (board)
{
   tie = tieChecker(board, tie);
    var randomNumber = Math.floor(Math.random() * 9);
    //console.log(randomNumber);
if (tie === false)
{
    if (board[randomNumber] != "X" &&  board[randomNumber] != "O")
    {
        
        board[randomNumber] = "O";
    }
    else 
    {

        computerTurn(board);
    }
    checkforcompwin(board, tie);
}
}

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


function checkforcompwin (board, tie)
{

  if (tie === true) {
    winner(result);
  }
    //Computer wins

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



function tieChecker (board, tie)
{
  //tie = false;
  x = 0;
  //console.log(x)
  board.forEach(function(element) {
  
    if (element === " ") {
      x += 1;
    } 
  });
  console.log(x);
  if (x === 0) 
  {
    tie = true;
  }
  //console.log(tie)
  return tie;
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
   
  
/*
    $("#1,3").click
      // $("#operators").click(function() {
      //   $(".definition#operators").toggle();

        running(1)
      });
      $("#2,3").click(function() {
        running (2)
      });
      $("#3,3").click(function() {
        running (3)
      });
      $("#1,2").click(function() {
        running (4)
      });
      $("#2,2").click(function() {
        running (5)
      });
      $("#3,2").click(function() {
        running (6)
      });
      $("#3,1").click(function() {
        running (7)
      });
      $("#3,2").click(function() {
        running (8)
      });
      $("#3,3").click(function() {
        running (9)
      });
});*/