// Sætter antal af terninger
let num_dices = 2;
// Array til terninger
let array_dices = [];
// Sætter array til engelske tal - skal bruges til font awesome ikoner
let array_dice_names = ["", "one", "two", "three", "four", "five", "six"];
// Sætter var til html element der skal vise resultater
let display_result = document.getElementById("display_result");
// Sætter addEventListener til klik på knap
document.getElementById("rollthedice").addEventListener("click", rollTheDice);

/**
 * Funktion til at hente tilfældigt nummer
 * @param num_eyes
 * @returns {number}
 */
function getRandomNumber(num_eyes = 6) {
    return Math.ceil(Math.random() * num_eyes)
}

/**
 * Funktion der nulstiller gameboard
 */
function initGame() {
    array_dices = [];
    gameboard.innerHTML = "";

    //Bygger array med terninger - hver terning fÃ¥r et tilfældigt nummer
    for(let i = 1; i <= num_dices; i++) {
        array_dices.push(getRandomNumber());
    }
}

/**
 * Funktion til at kaste terninger med
 */
function rollTheDice() {
    // Nulstiller spil
    initGame();

    // Lopper array
    for(let num of array_dices) {
        // Opretter <i> element til font awesome ikon
        let elm = document.createElement("i");
        // Tilføjer class attribute med font awesome klasser til element
        elm.setAttribute("class", "dice fas fa-dice-" + array_dice_names[num]);
        // Tilføjer element til div id gameboard
        gameboard.appendChild(elm);
    }
}

// Kaster terningerne når siden loades
rollTheDice();