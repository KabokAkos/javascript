function determineWinner(player1, player2) {
    if (player1 === player2) {
        return "The game is a tie.";
    } else if (
        (player1 === 0 && player2 === 2) || 
        (player1 === 1 && player2 === 0) || 
        (player1 === 2 && player2 === 1)    
    ) {
        return "The first player wins.";
    } else {
        return "The second player wins.";
    }
}

function getRandomChoice() {
    return Math.floor(Math.random() * 3);
}

let player1Choice = getRandomChoice();
let player2Choice = getRandomChoice();

console.log("Player 1 chooses: " + player1Choice);
console.log("Player 2 chooses: " + player2Choice);

console.log(determineWinner(player1Choice, player2Choice));