const prompt = require('prompt-sync')();
//Functions

function displayText(text) {
    console.log(text);
}

function getUserInput() {
let userMove = prompt(displayText(MOVE_INSTRUCTION)).toUpperCase();
MOVES_MADE.push(userMove);     
}



function checkUserInput (input) {  //add placeholder
    
    if (input === "A1") {
            GRID[0].splice(0,1,"X");                    //an Stelle A1 wird mit splice ein X eingesetzt 
            displayText(GRID)
            }                          //neues Grid wird angezeigt
    else if (input === "A2") {
                GRID[0].splice(1,1,"X");
                displayText(GRID)
            }
    else if (input === "A3") {
                GRID[0].splice(2,1,"X");
                displayText(GRID)
            }
    else if (input === "B1") {
                GRID[1].splice(0,1,"X");
                displayText(GRID)
            }
    else if (input === "B2") {
                GRID[1].splice(1,1,"X");
                displayText(GRID)
            }
    else if (input === "B3") {
                GRID[1].splice(2,1,"X");
                displayText(GRID)
            }
    else if (input === "C1") {
                GRID[2].splice(0,1,"X");
                displayText(GRID)
            }
    else if (input === "C2") {
                GRID[2].splice(1,1,"X");
                displayText(GRID)
            }
    else if (input === "C3") {
                GRID[1].splice(2,1,"X");
                displayText(GRID)
            }
    else  {displayText(WRONG_ENTRY)};
}
//Variables
//Texts
const INTRO_TEXT = "What Mode would you like to play?";
const GAME_MODES = ["1. Human vs Human", "2. Random AI vs Random AI", "3. Human vs Random AI", "4. Human vs Unbeatable AI"];
const CHOOSE_MODES = "Choose by entering number in front of option."; 
const GAME_MODE_TEXT = "You chose: ";
const MOVE_INSTRUCTION = "Please enter a move."
const WRONG_ENTRY = "Falsche Eingabe"
let GRID = [[".",".","."],
            [".",".","."],
            [".",".","."]]



let NUM_PICKED = [];
let MOVES_MADE = [];


//main
displayText(INTRO_TEXT);
displayText(GAME_MODES);
let playMode = prompt(displayText(CHOOSE_MODES));
NUM_PICKED.push(playMode);

if (Number(NUM_PICKED[0]) === 1) {
    displayText(`${GAME_MODE_TEXT}: ${GAME_MODES[0]}`);     //displaying text: You chose 1. Human vs Human
    displayText(GRID); 
    getUserInput();                                         //asks player for a move
    checkUserInput(MOVES_MADE[i]);
} else if (Number(NUM_PICKED[0]) ===2) {
    displayText(`${GAME_MODE_TEXT}: ${GAME_MODES[1]}`);     //displaying text: You chose 2. Random AI vs Random AI
    displayText(GRID); 
    getUserInput();                                         //asks player for a move
    checkUserInput(MOVES_MADE[i]);
} else if (Number(NUM_PICKED[0]) ===3) {
    displayText(`${GAME_MODE_TEXT}: ${GAME_MODES[2]}`);     //displaying text: You chose 3. Human vs Random AI
    displayText(GRID); 
    getUserInput();                                         //asks player for a move
    checkUserInput(MOVES_MADE[i]);
} else if (Number(NUM_PICKED[0]) ===4) {
    displayText(`${GAME_MODE_TEXT}: ${GAME_MODES[3]}`);     //displaying text: You chose 4. Human vs Unbeatable AI
    displayText(GRID); 
    getUserInput();                                         //asks player for a move
    checkUserInput(MOVES_MADE[i]);
} else {displayText("WRONG ENTRY: This mode doesn't exist")}


if (playMode === 1) {
    displayText(`${GAME_MODE_TEXT}: + ${GAME_MODES[0]}`);      //displaying text: You chose 1. Human vs Human
} else if (playMode ===2) {
    displayText(`${GAME_MODE_TEXT}: + ${GAME_MODES[1]}`);      //displaying text: You chose 2. Random AI vs Random AI
} else if (playMode ===3) {
    displayText(`${GAME_MODE_TEXT}: + ${GAME_MODES[2]}`);      //displaying text: You chose 3. Human vs Random AI
} else if (playMode ===4) {
    displayText(`${GAME_MODE_TEXT}: + ${GAME_MODES[3]}`);      //displaying text: You chose 4. Human vs Unbeatable AI
}


/*
const (DATA) = require("./date.js");

console.log("DATA");
*/

