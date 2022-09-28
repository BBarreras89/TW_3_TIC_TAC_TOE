//TODOs
//tie condition (if both players didn't win) - integrated counter?
//switching players
//info welcher player move dran ist 
//other play modes 
//allign all texts


const prompt = require('prompt-sync')();

//*********************** Texts ****************************

const INTRO_TEXT = "What Mode would you like to play?";
const GAME_MODES = [`1. Human vs Human`, `2. Random AI vs Random AI`, `3. Human vs Random AI`, `4. Human vs Unbeatable AI`];
const CHOOSE_MODES = "Choose by entering number in front of option."; 
const GAME_MODE_TEXT = "You chose: ";
const MOVE_INSTRUCTION = "Please enter a move by typing a possible position (Like: a1)."
const WRONG_ENTRY = "Position already taken or non existent."

//********************* Variables **************************

const PLAYER1 = " x";
const PLAYER2 = " o";

//Quit/Exit game completely
const QUITTING_OUT = "QUIT";
let process = require ('process');
let gameIsRunning = true;

let countMoves = 0; //TODO - yet to be integrated

//position possibilities
const CORRECT_FORMATTING = ["A1", "A2", "A3", "B1", "B2", "B3", "C1", "C2", "C3"];

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
const EXIST_MOVE_INSTRUCTION_TEXT = "This field is already occupied!";
const WRONG_MOVE_INSTRUCTION_TEXT = "Sorry i dont undertand your input!";
const MOVE_INSTRUCTION_TEXT = "Please enter a move by typing a possible position (Like: a1).";
const YOUR_MOVE_TEXT = "Your move: ";
function getUserInput() {
    console.log("\n" + alignCenter(MOVE_INSTRUCTION_TEXT) + MOVE_INSTRUCTION_TEXT);
    console.log("\n");
    let userMove = prompt(alignCenter(YOUR_MOVE_TEXT) + YOUR_MOVE_TEXT).toUpperCase(); //User gives moving input (e.g:B2,C1,...)
    while (!CORRECT_FORMATTING.includes(userMove)) {
        console.log("\n" + alignCenter(WRONG_MOVE_INSTRUCTION_TEXT) + WRONG_MOVE_INSTRUCTION_TEXT);
        console.log("\n" + alignCenter(MOVE_INSTRUCTION_TEXT) + MOVE_INSTRUCTION_TEXT);
        console.log("\n");
        userMove = prompt(alignCenter(YOUR_MOVE_TEXT) + YOUR_MOVE_TEXT).toUpperCase();
    }
    while (userMovesMade.includes(userMove)) {
        console.log("\n" + alignCenter(EXIST_MOVE_INSTRUCTION_TEXT) + EXIST_MOVE_INSTRUCTION_TEXT);
        console.log("\n" + alignCenter(MOVE_INSTRUCTION_TEXT) + MOVE_INSTRUCTION_TEXT);
        console.log("\n");
        userMove = prompt(alignCenter(YOUR_MOVE_TEXT) + YOUR_MOVE_TEXT).toUpperCase(); //User gives moving input (e.g:B2,C1,...)
    }
    userMovesMade.push(userMove); //Input is logged into Array
}                                             

//Winning conditions
function winningCondition (PLAYER1,PLAYER2) {
        //Winning conditions for Player 1
    if (grid[0][0] === PLAYER1 && grid[0][1] === PLAYER1 && grid[0][2] === PLAYER1 || 
        grid[1][0] === PLAYER1 && grid[1][1] === PLAYER1 && grid[1][2] === PLAYER1 ||
        grid[2][0] === PLAYER1 && grid[2][1] === PLAYER1 && grid[2][2] === PLAYER1 ||
        grid[0][0] === PLAYER1 && grid[1][0] === PLAYER1 && grid[2][0] === PLAYER1 ||
        grid[0][1] === PLAYER1 && grid[1][1] === PLAYER1 && grid[2][1] === PLAYER1 ||
        grid[0][2] === PLAYER1 && grid[1][2] === PLAYER1 && grid[2][2] === PLAYER1 ||
        grid[0][0] === PLAYER1 && grid[1][1] === PLAYER1 && grid[2][2] === PLAYER1 ||
        grid[0][2] === PLAYER1 && grid[1][1] === PLAYER1 && grid[2][0] === PLAYER1)
        {
            console.log("Player 1 won the game!");
            process.exit(gameIsRunning); //breaks from function if player won

    }
    if (grid[0][0] === PLAYER2 && grid[0][1] === PLAYER2 && grid[0][2] === PLAYER2 || 
        grid[1][0] === PLAYER2 && grid[1][1] === PLAYER2 && grid[1][2] === PLAYER2 ||
        grid[2][0] === PLAYER2 && grid[2][1] === PLAYER2 && grid[2][2] === PLAYER2 ||
        grid[0][0] === PLAYER2 && grid[1][0] === PLAYER2 && grid[2][0] === PLAYER2 ||
        grid[0][1] === PLAYER2 && grid[1][1] === PLAYER2 && grid[2][1] === PLAYER2 ||
        grid[0][2] === PLAYER2 && grid[1][2] === PLAYER2 && grid[2][2] === PLAYER2 ||
        grid[0][0] === PLAYER2 && grid[1][1] === PLAYER2 && grid[2][2] === PLAYER2 ||
        grid[0][2] === PLAYER2 && grid[1][1] === PLAYER2 && grid[2][0] === PLAYER2)
        {
            console.log("Player 2 won the game!");
            process.exit(gameIsRunning); //breaks from function if player won
        }
        }

//formatting - text allign 
function alignCenter(varToAlignCenter) {
    let windoWidth = 160;
    let startPoint = (windoWidth - varToAlignCenter.length) / 2;
    let arraySpaceAlineCenter = [];
    for (let i = 1; i < startPoint; i++){
        arraySpaceAlineCenter.push(" ");
    }
    return arraySpaceAlineCenter.join("");
}



//Place user input 
function checkUserInput (input,Player) 
{
    if (input === QUITTING_OUT) {     //wenn quit eingegeben wird, stoppt das spiel
        console.log(":(");
        console.log("Thanks for playing.");
        process.exit();
    }                                                
        else if (input === "A1") {
                grid[0].splice(0,1,Player);   //an Stelle A1 wird mit splice ein X eingesetzt
                displayGRID();                //neues board wird angezeigt
            }                                    
        else if (input === "A2") {
                grid[0].splice(1,1,Player);
                displayGRID();
            }
        else if (input === "A3") {
                grid[0].splice(2,1,Player);
                displayGRID();
            }
        else if (input === "B1") {
                grid[1].splice(0,1,Player);
                displayGRID();
            }
        else if (input === "B2") {
                grid[1].splice(1,1,Player);
                displayGRID();
            }
        else if (input === "B3") {
                grid[1].splice(2,1,Player);
                displayGRID();
            }
        else if (input === "C1") {
                grid[2].splice(0,1,Player);
                displayGRID();
            }
        else if (input === "C2") {
                grid[2].splice(1,1,Player);
                displayGRID();
            }
        else if (input === "C3") {
                grid[2].splice(2,1,Player);
                displayGRID();
            }
                else  {displayText(WRONG_ENTRY);
                        displayGRID();}

}

function HumanVsHuman () {
    displayText(`${GAME_MODE_TEXT}: ${GAME_MODES[0]}`);     //displaying text: You chose 1. Human vs Human
    while(gameIsRunning) {
        displayGRID();                                     //shows board
        getUserInput();                                    //player 1 makes move (a1,a2,...)
        console.clear();                                   //clears console for visual clarity    
        checkUserInput(userMovesMade[0],PLAYER1);          //places user move in array & displays updated board         
        getUserInput();                                    //player 2 makes move (a1,a2,...)
        console.clear(); 
        checkUserInput(userMovesMade[1],PLAYER2);  
        getUserInput();  
        console.clear();                                     
        checkUserInput(userMovesMade[2],PLAYER1);
        getUserInput();
        console.clear();                                                            
        checkUserInput(userMovesMade[3],PLAYER2);                                                                
        getUserInput();
        console.clear();                                      
        checkUserInput(userMovesMade[4],PLAYER1);
        winningCondition(PLAYER1,PLAYER2);                  //checks for winning conditions - placed here because first time a win would be possible            
        getUserInput();   
        checkUserInput(userMovesMade[5],PLAYER2);
        winningCondition(PLAYER1,PLAYER2); 
        getUserInput();
        console.clear();                                      
        checkUserInput(userMovesMade[6],PLAYER1);
        winningCondition(PLAYER1,PLAYER2);                 
        getUserInput();                                         
        checkUserInput(userMovesMade[7],PLAYER2);
        winningCondition(PLAYER1,PLAYER2);                 
        getUserInput();
        console.clear();                                         
        checkUserInput(userMovesMade[8],PLAYER1);
        winningCondition(PLAYER1,PLAYER2);                 
        getUserInput();                                        
        checkUserInput(userMovesMade[9],PLAYER2); 
        winningCondition(PLAYER1,PLAYER2);                                     
    } console.log("Nobody won.");
}

//TODO: other play modes yet to be coded 
function RandomVsRandom () {
    displayText(`${GAME_MODE_TEXT}: ${GAME_MODES[1]}`);     //displaying text: You chose: 2. Random AI vs Random AI
    displayGRID(); 
    getUserInput();                                         
    checkUserInput(userMovesMade[0]);
}

function HumanVsRandom () {
    displayText(`${GAME_MODE_TEXT}: ${GAME_MODES[2]}`);     //displaying text: You chose 3. Human vs Random AI
    displayGRID(); 
    getUserInput();                                        
    checkUserInput(userMovesMade[0]);
}

function HumanVsUnbeatable () {
    displayText(`${GAME_MODE_TEXT}: ${GAME_MODES[3]}`);     //displaying text: You chose 4. Human vs Unbeatable AI
    displayGRID(); 
    getUserInput();                                         
    checkUserInput(userMovesMade[0]);
}



function main () {
displayText(INTRO_TEXT);
displayText(GAME_MODES);
let playMode = prompt(displayText(CHOOSE_MODES));
modePicked.push(playMode);
    if (modePicked[0] === QUITTING_OUT) {
        console.log(":(");
        console.log("Thanks for playing.");
        process.exit();   
    }   else if  (Number(modePicked[0]) === 1) {
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

