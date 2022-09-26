                                                                                /*
                                                                                Should print a menu with the following options:
                                                                                        1. Human vs Human
                                                                                        2. Random AI vs Random AI
                                                                                        3. Human vs Random AI
                                                                                        4. Human vs Unbeatable AI
                                                                                        The function should return a number between 1-4.
                                                                                        If the user will enter invalid data (for example 5), than a message will appear
                                                                                        asking to input a new value.
                                                                                */



const prompt = require("prompt-sync")();
                                                                               
//*********FUNCTION TO ALIGN CENTER IN TERMINAL***************
function alignCenter(varToAlignCenter) {
    let startPoint = (180 - varToAlignCenter.length) / 2;
    let arraySpaceAlineCenter = [];
    for (let i = 1; i < startPoint; i++){
        arraySpaceAlineCenter.push(" ");
    }
    return arraySpaceAlineCenter.join("");
}

//*********INTRO START GAME OR READ RULES****************
console.clear();
let ticLength = "                                                             "
let TicTacToe = "\n"+
                alignCenter(ticLength)+" _______ _          _______             _______            \n" +
                alignCenter(ticLength)+"|__   __(_)        |__   __|           |__   __|           \n" +
                alignCenter(ticLength)+"   | |   _    ___     | |  __ _   ___     | |  ___    ___  \n" +
                alignCenter(ticLength)+"   | |  | |  / __|    | | / _` | / __|    | | / _ \\  / _ \\ \n" +
                alignCenter(ticLength)+"   | |  | | | (__     | || (_| || (__     | || (_) ||  __/ \n" +
                alignCenter(ticLength)+"   |_|  |_|  \\___|    |_| \\__,_| \\___|    |_| \\___/  \\___| \n";


console.log(TicTacToe);
let buttonStart = "Please enter 1 to start the game.";
let buttonRules = "Please enter 2 to see the rules.";
let quit = "You can quit the game by enter quit.";
console.log("\n"+alignCenter(buttonStart) + buttonStart);
console.log("\n" + alignCenter(buttonRules) + buttonRules);
console.log("\n\n" + alignCenter(quit) + quit);
console.log("\n");
let yourChoice = "Your choice: "
let userStartInput = prompt(alignCenter(yourChoice) + yourChoice).toLowerCase();
let quitGame = false;
while (userStartInput !== "1" || userStartInput !== "2" || userStartInput !== "quit") {
if (userStartInput === "1") {
    displayMenu();
} else {
    if (userStartInput === "2") {
        gameplayRules();
    } else {
        if (userStartInput === "quit") {
            quitGame = true;
        } else {
                    console.clear();
                    let wrongStartInput = "Please enter just 1 for Start Game"
                    console.log("\n\n\n" + alignCenter(wrongStartInput) + wrongStartInput);
                    let wrongRulesInput = "or enter 2 to get the Rules of the Game"
                    console.log("\n" + alignCenter(wrongRulesInput) + wrongRulesInput);
                    console.log("\n");
                    userStartInput = prompt(alignCenter(yourChoice)+yourChoice).toLowerCase();
            }
        }
    }
}

function displayMenu() {
    console.clear();
    console.log("Please enter your Game Mode!")
    console.log("1. Human vs Human\n2. Random AI vs Random AI\n3. Human vs Random AI\n4. Human vs Unbeatable AI")
}

function gameplayRules() {
    console.clear();
    let ruleOne = "* The game is played on a grid that's 3 squares by 3 squares."
    console.log("\n\n\n" + alignCenter(ruleOne) + ruleOne);
    let ruleTwo = "* You are X, your friend (or the computer in this case) is O. Players take turns putting their marks in empty squares."
    console.log("\n" + alignCenter(ruleTwo) + ruleTwo);
    let ruleThree = "* The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner."
    console.log("\n" + alignCenter(ruleThree) + ruleThree);
    let ruleFour = "* When all 9 squares are full, the game is over."
    console.log("\n" + alignCenter(ruleFour) + ruleFour);
    console.log("\n\n")
    let continueGame = "Please press enter to continue to game! "
    let continueToGame = prompt(alignCenter(continueGame) + continueGame).toLowerCase();
    if (continueToGame === "quit") {
        quitGame = true;
    }
    return quitGame;
}

let menuUserChoice = "";
    function getMenuOption(){
        displayMenu();
        menuUserChoice = prompt("");
        return menuUserChoice;  
}
menuUserChoice = getMenuOption();

module.exports = {
    getMenuOption: getMenuOption,
    alignCenter: alignCenter,
    quitGame: quitGame
}
                                                                                /*
                                                                                // run this function to test whether you have correctly implemented the other function
                                                                                function checkOptions()
                                                                                {
                                                                                    let option = getMenuOption();
                                                                                    console.log("If the user selected 1, it should print 1");
                                                                                    console.log(option);
                                                                                }
                                                                                checkOptions;
                                                                                */