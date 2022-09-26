const menu = require("./menu"); // use it e.g. like menu.get_menu_option()
const board = require("./board");
const coordinate = require("./coordinates");
const { quitGame } = require("./menu");
//const getMenuOption = require({ getMenuOption });
//const alignCenter = require({ alignCenter });

const HUMAN_VS_HUMAN = 1;
const RANDOM_AI_VS_RANDOM_AI = 2;
const HUMAN_VS_RANDOM_AI = 3;
const HUMAN_VS_UNBEATABLE_AI = 4;
/*
//*********FUNCTION TO ALIGN CENTER IN TERMINAL***************
function alignCenter(varToAlignCenter) {
    let startPoint = (100 - varToAlignCenter.length) / 2;
    let arraySpaceAlineCenter = [];
    for (let i = 1; i < startPoint; i++){
        arraySpaceAlineCenter.push(" ");
    }
    return arraySpaceAlineCenter.join("");
}
*/

function main() {
  let gameMode = menu.getMenuOption();
  let gameBoard = board.getEmptyBoard();
  let isGameRunning = true;

  console.log("Is Quit Game entered?" + quitGame);

  while (isGameRunning && !quitGame) {
    board.displayBoard(board);

    /* TODO

        in each new iteration of the while loop the program should 
        alternate the value of `currentPlayer` from `X` to `O`
        */
    
    //es fehlt noch die berechnung jedesmal wenn ein richtigrer prompt input da ist wird 1 Counter dazu gerechnet.
    let counterPlayRounds = 0;
    let currentPlayer = "X";
    if (counterPlayRounds % 2 === 0) {
      currentPlayer = "X";
    } else {
      currentPlayer = "O"
    }
    console.log("Current Play is " + currentPlayer);
    


    /* TODO
        based on the value of the variables `game_mode` and `currentPlayer` 
        the programm should should choose betwen the functions
        get_random_ai_coordinates or get_umbeatable_ai_coordinates or get_human_coordinates
        */
    if ()
    let humanCoord = coordinate.getPlayerMove(board, currentPlayer);

    gameBoard[humanCoord[0]][humanCoord[1]] = currentPlayer;

    /* TODO 

        based on the values of `winning_player` and `its_a_tie` the program
        should either stop displaying a winning/tie message 
        OR continue the while loop
        */
    let winningPlayer = board.getWinningPlayer(gameBoard);
    let itsATie = board.isBoardFull(gameBoard);
  }
}

main();
