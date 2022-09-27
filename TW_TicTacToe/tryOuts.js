/*
//let test = "test";
function alignCenter(varToAlignCenter) {
    let startPoint = (100 - varToAlignCenter.length) / 2;
    let arraySpaceAlineCenter = [];
    for (let i = 1; i < startPoint; i++){
        arraySpaceAlineCenter.push(" ");
    }
    return arraySpaceAlineCenter.join("");
}
//console.log(alignCenter(test)+test);
*/

//*************DISPLAY GAME START MENU****************
function displayMenu() {
    console.clear();
    console.log(TicTacToe);
    let inputGameMode0 = "Please enter your Game Mode:";
    console.log("\n" + alignCenter(inputGameMode0) + inputGameMode0);
    let inputGameMode1 = "1 for Human vs Human";
    console.log("\n" + alignCenter(inputGameMode1)+inputGameMode1);
    let inputGameMode2 = "2 for Random AI vs Random AI";
    console.log("\n" + alignCenter(inputGameMode2)+inputGameMode2);
    let inputGameMode3 = "3 for Human vs Random AI";
    console.log("\n" + alignCenter(inputGameMode3)+inputGameMode3);
    let inputGameMode4 = "4 for Human vs Unbeatable AI";
    console.log("\n" + alignCenter(inputGameMode4)+inputGameMode4);
}
//*************GAME START SELECT GAME MODE****************
function getMenuOption() {
    console.log(TicTacToe);
    console.log("\n");
    displayMenu();
    console.log("\n\n");
    let menUserChoice = prompt(alignCenter(yourChoice)+yourChoice);
    return menUserChoice;
}
function checkOptions()
{
    let option = getMenuOption();
    console.log("If the user selected 1, it should print 1");
    console.log(option);
}
checkOptions;