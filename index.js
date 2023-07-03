let computerWinCount = 0;
let playerWinCount = 0;

function getComputerChoice() {
    const choiceString = ['Rock', 'Scissor', 'Paper'];
    const minIndex = 0;
    const maxIndex = choiceString.length - 1;
    const indexChosen = Math.floor(Math.random() * (maxIndex - minIndex + 1) + minIndex);

    //console.log(`min ${minIndex} ; max: ${maxIndex} ; chosenIndex: ${indexChosen}`);

    return choiceString[indexChosen];
}

function playGame(playerSelection, computerSelection) {
    const playerSel = playerSelection.toLowerCase();
    const computerSel = computerSelection.toLowerCase();

    if (playerSel == 'rock') {
        if (computerSel == 'paper') {
            computerWinCount++;
            return 'You Lose! Paper beats Rock.';
        }

        else if (computerSel == 'scissor') {
            playerWinCount++;
            return 'You win! Rock beats Scissor.';
        }

        else {
            return 'Draw! Play again';
        }
    }
    else if (playerSel == 'paper') {
        if (computerSel == 'rock') {
            playerWinCount++;
            return 'You Win! Paper beats Rock.';
        }
        else if (computerSel == 'scissor') {
            computerWinCount++;
            return 'You Lose! Scissor beats Paper.';
        }
        else
            return 'Draw! Play again';
    }
    else {
        if (computerSel == 'rock') {
            computerWinCount++;
            return 'You Lose! Rock beats Scissor.';
        }
        else if (computerSel == 'Paper') {
            playerWinCount++;
            return 'You Win! Scissor beats Paper.';
        }
        else
            return 'Draw! Play again';
    }
}


function game() {
    const playTimes = 5;
    for (let i = 1; i <= playTimes; i++) {
        const playerSel = prompt('Enter your choice (Rock/Paper/Scissor) ');
        const compSel = getComputerChoice();
        console.log(`Round ${i}; You-${playerSel};Computer-${compSel}; ${playGame(playerSel, compSel)}`);
    }

    if (playerWinCount > computerWinCount) {
        console.log(`Finally player wins. Player-${playerWinCount}; Computer-${computerWinCount}`);
    }
    else if (playerWinCount < computerWinCount) {
        console.log(`Finally computer wins. Player-${playerWinCount}; Computer-${computerWinCount}`);
    } else
        console.log(`It's a draw finally. Player-${playerWinCount}; Computer-${computerWinCount}`);
}

console.log(game());