


// Sætter antal af terninger

let num_dices = 1;
// Array til terninger
let array_dices = [];

let array_dice_names = ["", "one", "two", "three", "four", "five", "six"];

let display_result = document.getElementsByClassName("display-result");

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
    document.getElementById("gameboard").innerHTML = "";
    //gameboard.innerHTML = "";

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
    //Skriv i log hvad resultatet blev.
    console.log(array_dices);
    
    // Lopper array
    for(let num of array_dices) {
        // Opretter <i> element til font awesome ikon
        let elm = document.createElement("i");
        // Tilføjer class attribute med font awesome klasser til element
        elm.setAttribute("class", "dice fas fa-dice-" + array_dice_names[num]);
        var dice = 1;
        while (dice < 7) {
           
           if(dice == num){
                document.getElementById(num).setAttribute("style", "display: true");
           }else{
                document.getElementById(dice).setAttribute("style", "display: none");
           }
            dice++;
          }        
       
        // Tilføjer element til div id gameboard
        gameboard.appendChild(elm);
    }
}

// Kaster terningerne når siden loades
rollTheDice();