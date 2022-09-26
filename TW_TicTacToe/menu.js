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

function displayMenu() {
    console.clear();
    console.log("Please enter your Game Mode!")
    console.log("1. Human vs Human\n2. Random AI vs Random AI\n3. Human vs Random AI\n4. Human vs Unbeatable AI")
}

let menuUserChoice = "";
    function getMenuOption(){
        displayMenu();
        menuUserChoice = prompt("");
        return menuUserChoice;  
}

menuUserChoice = getMenuOption();

// run this function to test whether you have correctly implemented the other function
function checkOptions()
{
    let option = getMenuOption();
    console.log("If the user selected 1, it should print 1");
    console.log(option);
}
checkOptions;


module.exports = {
    getMenuOption: getMenuOption
}