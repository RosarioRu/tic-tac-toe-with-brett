Test Driven Development Notes:

Describe: Space()

Test 1: "Board should update a T to an X based on what the player inputs."

Code:
Space(5)
Expected Ouput: TTT
                TXT
                TTT

Test 2: "Player should not be able to enter a move where there is already an X."
Code: Space(5)
Expected Output: alert("Invalid Move")

Test 3: "A random box on the board should change to X."
Code: 
Expeted Output: 


<!-- Describe: cardValidator()

Test: "It should turn the string of numbers into single elements in an array."
Code:
const cardNumbers = ""0998445533334452"";
cardValidator(cardNumbers);
Expected Output: [0,9,9,8,4,4,5,5,3,3,3,3,4,4,5,2] -->

function computer turn 
{
    tactic = stratagy(board, tactic)

    if (tactic === winning)
    {
        play winning move
    }
}

function stratagy (board, tactic)
    if(two os in a row, and an open space after)
    {
        tactic = winning
    }
    else if(two xs in a row, and an open space after)
    {
        tactic = blocking
    }
    else if()
    {
        tactic = forking
    }
    else if()
    {
        tactic = prevent fork
    }
    else if(5 === " ")
    {
        tactic = take center
    }
    else if(corner === " ")
    {
        tactic = take corner
    }
    else
    {
        tactic = take edge
    }
}