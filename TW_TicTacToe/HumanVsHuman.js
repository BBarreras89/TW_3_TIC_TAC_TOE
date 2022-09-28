//TODOs
//Doppelte Eingaben Loop
//Tie Condition
//Aus While (GameIsRunning) Loop ausbrechen


const prompt = require('prompt-sync')();

//********************* Variables **************************
//*********************** Texts ****************************

const INTRO_TEXT = "What Mode would you like to play?";
const GAME_MODES = [`1. Human vs Human`, `2. Random AI vs Random AI`, `3. Human vs Random AI`, `4. Human vs Unbeatable AI`];
const CHOOSE_MODES = "Choose by entering number in front of option."; 
const GAME_MODE_TEXT = "You chose: ";
const MOVE_INSTRUCTION = "Please enter a move by typing a possible position (Like: a1)."
const WRONG_ENTRY = "Position already taken or non existent."


let countMoves = 0; 

let Player1 = " x";
let Player2 = " o";

//Exit
let process = require ('process');
let gameIsRunning = true;

let grid = [["a1","a2","a3"], 
            ["b1","b2","b3"], 
            ["c1","c2","c3"]];

/*
let GRID2 = " a1 | a2 | a3  \n"+
                "----|----|---- \n"+
               " b1 | b2 | b3  \n"+
               "----|----|---- \n"+
               " c1 | c2 | c3  \n";
*/


let modePicked = []; 
let userMovesMade = []; 



//********************* Functions *********************
function displayText(text) {
    console.log(text);
}

//displays playing board
function displayGRID() {           
    console.log(grid[0]),
    console.log(grid[1]),
    console.log(grid[2]);             
}

//User gives moving input (e.g:B2,C1,...) & input is logged into Array
function getUserInput() {
    let userMove = prompt(displayText(MOVE_INSTRUCTION)).toUpperCase();     
    userMovesMade.push(userMove);
    }                                              


//WinningConditions
function winningCondition (Player1,Player2) {
        //Winning conditions for Player 1
    if (grid[0][0] === Player1 && grid[0][1] === Player1 && grid[0][2] === Player1 || 
        grid[1][0] === Player1 && grid[1][1] === Player1 && grid[1][2] === Player1 ||
        grid[2][0] === Player1 && grid[2][1] === Player1 && grid[2][2] === Player1 ||
        grid[0][0] === Player1 && grid[1][0] === Player1 && grid[2][0] === Player1 ||
        grid[0][1] === Player1 && grid[1][1] === Player1 && grid[2][1] === Player1 ||
        grid[0][2] === Player1 && grid[1][2] === Player1 && grid[2][2] === Player1 ||
        grid[0][0] === Player1 && grid[1][1] === Player1 && grid[2][2] === Player1 ||
        grid[0][2] === Player1 && grid[1][1] === Player1 && grid[2][0] === Player1)
        {
            console.log("Player 1 won the game!");
            process.exit(gameIsRunning); //TODO: break from function?

    }
    if (grid[0][0] === Player2 && grid[0][1] === Player2 && grid[0][2] === Player2 || 
        grid[1][0] === Player2 && grid[1][1] === Player2 && grid[1][2] === Player2 ||
        grid[2][0] === Player2 && grid[2][1] === Player2 && grid[2][2] === Player2 ||
        grid[0][0] === Player2 && grid[1][0] === Player2 && grid[2][0] === Player2 ||
        grid[0][1] === Player2 && grid[1][1] === Player2 && grid[2][1] === Player2 ||
        grid[0][2] === Player2 && grid[1][2] === Player2 && grid[2][2] === Player2 ||
        grid[0][0] === Player2 && grid[1][1] === Player2 && grid[2][2] === Player2 ||
        grid[0][2] === Player2 && grid[1][1] === Player2 && grid[2][0] === Player2)
        {
            console.log("Player 2 won the game!");
            process.exit(gameIsRunning); //TODO: break from function?
        }
        }

//place user input 
function checkUserInput (input,Player) {
                                                //add placeholder
    if (input === "A1") {
            grid[0].splice(0,1,Player);  
            displayGRID();                          //an Stelle A1 wird mit splice ein X eingesetzt                                           //neues (untereinander) Grid wird durch function angezeigt
            }                                    
    else if (input === "A2") {
            grid[0].splice(1,1,Player);
            //console.log(GRID2.replace("a2",Player));
            displayGRID();
            }
    else if (input === "A3") {
            grid[0].splice(2,1,Player);
            //console.log(GRID2.replace("a3",Player));
            displayGRID();
            }
    else if (input === "B1") {
            //GRID2.replace("b1",Player);
            grid[1].splice(0,1,Player);
            displayGRID();
            }
    else if (input === "B2") {
            //console.log(GRID2.replace("b2",Player));
            grid[1].splice(1,1,Player);
            displayGRID();
            }
    else if (input === "B3") {
            //console.log(GRID2.replace("b3",Player));
            grid[1].splice(2,1,Player);
            displayGRID();
            }
    else if (input === "C1") {
            //console.log(GRID2.replace("c1",Player));
            grid[2].splice(0,1,Player);
            displayGRID();
            }
    else if (input === "C2") {
            //console.log(GRID2.replace("c2",Player));
            grid[2].splice(1,1,Player);
            displayGRID();
            }
    else if (input === "C3") {
            //console.log(GRID2.replace("c3",Player));
            grid[2].splice(2,1,Player);
            displayGRID();
            }
    else  {displayText(WRONG_ENTRY);
            displayGRID();}

}

/*
function checkForDoubles () {
    if (grid.includes(Player1)) {
        console.log("Doppelte Eingabe");
    }
}
*/

/*
function checkBoard (Player) {
    if (userMovesMade.length > 1) {                    //wenn bereits ein move gemacht wurde
    for (i=0; i<= userMovesMade.length; i++) {         //so viele moves wie gemacht wurden, werden im loop ausgefüllt
        GRID2.replace(userMovesMade[2],Player)
    }
}
}
*/

/*
function checkPriorBoard (Player) {
    if (userMovesMade.length > 1) {                    //wenn bereits ein move gemacht wurde
        for (i=0; i<= userMovesMade.length; i++) { 
            if (userMovesMade.includes("a1")) {
                GRID2.replace("a1",Player);
    }               else if (userMovesMade.includes("a2")){
                        GRID2.replace("a2",Player);
    }               else if (userMovesMade.includes("a3")) {
                        GRID2.replace("a3",Player);
    }               else if (userMovesMade.includes("b1")) {
                        GRID2.replace("b1",Player);
    }               else if (userMovesMade.includes("b2")) {
                        GRID2.replace("b2",Player);
    }               else if (userMovesMade.includes("b3")) {
                        GRID2.replace("b3",Player);
    }               else if (userMovesMade.includes("c1")) {
                        GRID2.replace("c1",Player);
    }               else if (userMovesMade.includes("c2")) {
                        GRID2.replace("c2",Player);
    }               else if (userMovesMade.includes("c3")) {
                        GRID2.replace("c3",Player);
}
}
    }
}
*/

function HumanVsHuman () {
    displayText(`${GAME_MODE_TEXT}: ${GAME_MODES[0]}`);     //displaying text: You chose 1. Human vs Human
    while(gameIsRunning) {
        displayGRID(); 
        getUserInput();
        console.clear();                                         //asks player1 for a move
        checkUserInput(userMovesMade[0],Player1);                  
        getUserInput();
        console.clear(); 
        checkUserInput(userMovesMade[1],Player2);  
        getUserInput();  
        console.clear();                                     //asks player1 for a move
        checkUserInput(userMovesMade[2],Player1);
        getUserInput();
        console.clear();                                                            //asks player1 for a move
        checkUserInput(userMovesMade[3],Player2);                                                   //asks player1 for a move                
        getUserInput();
        console.clear();                                        //asks player1 for a move
        checkUserInput(userMovesMade[4],Player1);
        winningCondition(Player1,Player2);                 
        getUserInput();   
        checkUserInput(userMovesMade[5],Player2);
        winningCondition(Player1,Player2); 
        getUserInput();
        console.clear();                                      //asks player1 for a move
        checkUserInput(userMovesMade[6],Player1);
        winningCondition(Player1,Player2);                 
        getUserInput();                                         //asks player1 for a move
        checkUserInput(userMovesMade[7],Player2);
        winningCondition(Player1,Player2);                 
        getUserInput();
        console.clear();                                          //asks player1 for a move
        checkUserInput(userMovesMade[8],Player1);
        winningCondition(Player1,Player2);                 
        getUserInput();                                         //asks player1 for a move
        checkUserInput(userMovesMade[9],Player2); 
        winningCondition(Player1,Player2);                                     
    } console.log("Nobody won.");
}

function RandomVsRandom () {
    displayText(`${GAME_MODE_TEXT}: ${GAME_MODES[1]}`);     //displaying text: You chose 2. Random AI vs Random AI
    displayGRID(); 
    getUserInput();                                         //asks player for a move
    checkUserInput(userMovesMade[0]);
}

function HumanVsRandom () {
    displayText(`${GAME_MODE_TEXT}: ${GAME_MODES[2]}`);     //displaying text: You chose 3. Human vs Random AI
    displayGRID(); 
    getUserInput();                                         //asks player for a move
    checkUserInput(userMovesMade[0]);
}

function HumanVsUnbeatable () {
    displayText(`${GAME_MODE_TEXT}: ${GAME_MODES[3]}`);     //displaying text: You chose 4. Human vs Unbeatable AI
    displayGRID(); 
    getUserInput();                                         //asks player for a move
    checkUserInput(userMovesMade[0]);
}



function main () {
displayText(INTRO_TEXT);
displayText(GAME_MODES);
let playMode = prompt(displayText(CHOOSE_MODES));
modePicked.push(playMode);
if        (Number(modePicked[0]) === 1) {
  HumanVsHuman();
}        else if (Number(modePicked[0]) ===2) {
  RandomVsRandom();
}        else if (Number(modePicked[0]) ===3) {
  HumanVsRandom();
}        else if (Number(modePicked[0]) ===4) {
    HumanVsUnbeatable();
}        else {displayText("WRONG ENTRY: This mode doesn't exist")}


if (playMode === 1) {
    displayText(`${GAME_MODE_TEXT}: + ${GAME_MODES[0]}`);      //displaying text: You chose 1. Human vs Human
} else if (playMode ===2) {
    displayText(`${GAME_MODE_TEXT}: + ${GAME_MODES[1]}`);      //displaying text: You chose 2. Random AI vs Random AI
} else if (playMode ===3) {
    displayText(`${GAME_MODE_TEXT}: + ${GAME_MODES[2]}`);      //displaying text: You chose 3. Human vs Random AI
} else if (playMode ===4) {
    displayText(`${GAME_MODE_TEXT}: + ${GAME_MODES[3]}`);      //displaying text: You chose 4. Human vs Unbeatable AI
}

} //main end           

main();

/*
const (DATA) = require("./date.js");

console.log("DATA");
*/

