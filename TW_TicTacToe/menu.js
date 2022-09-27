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

                                                                                /*Test
                                                                                let testPrompt = prompt("Test no enter:");
                                                                                console.log(typeof testPrompt);
                                                                                let promptArr = [];
                                                                                promptArr.push(testPrompt);
                                                                                console.log(promptArr);
                                                                                let stop = prompt("stop");
                                                                                */


//*********FUNCTION TO ALIGN CENTER IN TERMINAL***************
function alignCenter(varToAlignCenter) {
    let windoWidth = 180;
    let startPoint = (windoWidth - varToAlignCenter.length) / 2;
    let arraySpaceAlineCenter = [];
    for (let i = 1; i < startPoint; i++){
        arraySpaceAlineCenter.push(" ");
    }
    return arraySpaceAlineCenter.join("");
}

//*************INTRO START GAME OR READ RULES****************
let parameterFromMenuArr = [];
//Used more times also exported to ticTacToe.js
let isQuitTipedIn = false;

function startGameMenu() {
    console.clear();
    let ticLength = "                                                             "
    let TicTacToe = "\n" +
        alignCenter(ticLength) + " _______ _          _______             _______            \n" +
        alignCenter(ticLength) + "|__   __(_)        |__   __|           |__   __|           \n" +
        alignCenter(ticLength) + "   | |   _    ___     | |  __ _   ___     | |  ___    ___  \n" +
        alignCenter(ticLength) + "   | |  | |  / __|    | | / _` | / __|    | | / _ \\  / _ \\ \n" +
        alignCenter(ticLength) + "   | |  | | | (__     | || (_| || (__     | || (_) ||  __/ \n" +
        alignCenter(ticLength) + "   |_|  |_|  \\___|    |_| \\__,_| \\___|    |_| \\___/  \\___| \n";


    console.log(TicTacToe);
    let buttonStart = "Please enter 1 to start the game.";
    let buttonRules = "Please enter 2 to see the rules.";
    let quit = "You can quit the game by enter quit.";
    console.log("\n" + alignCenter(buttonStart) + buttonStart);
    console.log("\n" + alignCenter(buttonRules) + buttonRules);
    console.log("\n\n" + alignCenter(quit) + quit);
    console.log("\n");

    //Used more times
    let yourChoice = "Your choice: "
    let userStartInput = prompt(alignCenter(yourChoice) + yourChoice).toLowerCase();

    if (userStartInput === "quit") {
        isQuitTipedIn = false;
    }

    while (userStartInput !== "1" || userStartInput !== "2" || isQuitTipedIn === true) {
        if (userStartInput === "1") {
            getMenuOption();
        } else {
            if (userStartInput === "2") {
                gameplayRules();
                getMenuOption();
            } else {
                if (userStartInput === "quit") {
                    isQuitTipedIn = true;
                } else {
                    console.clear();
                    console.log(TicTacToe);
                    let wrongStartInput = "Please enter just 1 for Start Game"
                    let wrongRulesInput = "or enter 2 to get the Rules of the Game"
                    console.log("\n" + alignCenter(wrongStartInput) + wrongStartInput);
                    console.log("\n" + alignCenter(wrongRulesInput) + wrongRulesInput);
                    console.log("\n\n");
                    userStartInput = prompt(alignCenter(yourChoice) + yourChoice).toLowerCase();
                }
            }
        }
    }

    //*************GAME RULES :TIC TAC TOE****************
    function gameplayRules() {
        let continueToGame = "";
        console.clear();
        console.log(TicTacToe);
        let ruleTitle = "GAME RULES"
        console.log("\n" + alignCenter(ruleTitle) + ruleTitle);
        let ruleOne = "* The game is played on a grid that's 3 squares by 3 squares."
        console.log("\n\n" + alignCenter(ruleOne) + ruleOne);
        let ruleTwo = "* You are X, your friend (or the computer in this case) is O. Players take turns putting their marks in empty squares."
        console.log("\n" + alignCenter(ruleTwo) + ruleTwo);
        let ruleThree = "* The first player to get 3 of her marks in a row (up, down, across, or diagonally) is the winner."
        console.log("\n" + alignCenter(ruleThree) + ruleThree);
        let ruleFour = "* When all 9 squares are full, the game is over."
        console.log("\n" + alignCenter(ruleFour) + ruleFour);
        console.log("\n\n")
        let continueGame = "Please press enter to continue to game! "
        continueToGame = prompt(alignCenter(continueGame) + continueGame).toLowerCase();
        if (continueToGame === "quit") {
            isQuitTipedIn = true;
        }
        return isQuitTipedIn;
    }
    isQuitTipedIn = gameplayRules();

    //*************GAME START: SELECT GAME MODE****************
    function getMenuOption() {
        console.clear();
        console.log(TicTacToe);
        console.log("\n");
        while (menUserChoice !== "1" || menUserChoice !== "2" || menUserChoice !== "3" || menUserChoice !== "4" || isQuitTipedIn === true) {
            let inputGameMode0 = "Please enter your Game Mode:";
            console.log("\n" + alignCenter(inputGameMode0) + inputGameMode0);
            if (menUserChoice === "1") {
                let inputGameMode1 = "1 for Human vs Human";
                console.log("\n" + alignCenter(inputGameMode1) + inputGameMode1);
            } else if (menUserChoice === "2") {
                let inputGameMode2 = "2 for Random AI vs Random AI";
                console.log("\n" + alignCenter(inputGameMode2) + inputGameMode2);  
            } else if (menUserChoice === "3") {
                let inputGameMode3 = "3 for Human vs Random AI";
                console.log("\n" + alignCenter(inputGameMode3) + inputGameMode3);
            } else if (menUserChoice === "4") {
                let inputGameMode4 = "4 for Human vs Unbeatable AI";
                console.log("\n" + alignCenter(inputGameMode4) + inputGameMode4);
            } else if (menUserChoice === "quit") {
                isQuitTipedIn = true;
            } else {
                let wrongMenuInput1 = "Sorry i dont understand your input.";
                let wrongMenuInput2 = "Please just enter the number 1-4!";
                console.log("\n" + alignCenter(wrongMenuInput1) + wrongMenuInput1);
                console.log(alignCenter(wrongMenuInput2) + wrongMenuInput2);
            }
            console.log("\n\n");
            let menUserChoice = prompt(alignCenter(yourChoice) + yourChoice).toLowerCase();
            parameterFromMenuArr.push(menUserChoice)
            parameterFromMenuArr.push(isQuitTipedIn);
        }
        return parameterFromMenuArr;
    }
    return parameterFromMenuArr;
}

//*************EXPORT****************
module.exports = {
    startGameMenu: startGameMenu,
    alignCenter: alignCenter,
    //getMenuOption: getMenuOption,
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
                                                                                