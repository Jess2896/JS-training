/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/**
 * Challenges
 * 1- If a player rolls a 6 twice in a row, their turn ends and they lose their score
 * 2- Added a new field so the players can insert a new max score
 * 3- Added a second dice, the player's turn ends if either of them rolls a 1
 */

let scores, roundScore, activePlayer, gamePlaying, previousRoll, maxScore;

init();

document.querySelector('.btn-roll').addEventListener('click', function() {

   if (gamePlaying) {
    let dice = getDiceNumber();
    let secondDice = getDiceNumber();
    const sum = dice + secondDice;

    diceDOM = setDiceDOM(dice, '.dice');
    diceDOM = setDiceDOM(secondDice, '.secondDice');

    //This is for the first challenge's rule, not meant to work for both dice
    if (dice === 6 && dice === previousRoll) {
        document.querySelector('#score-' + activePlayer).textContent = 0;
        nextPlayer();
    }

    if (dice !== 1 && secondDice !== 1) {
        roundScore += sum;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
        previousRoll = dice;
    } else {
       nextPlayer();
    }
   }  
});

document.querySelector('.btn-hold').addEventListener('click', function() {

    if (gamePlaying) {
        scores[activePlayer] += roundScore;
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]; 

        if (scores[activePlayer] >= maxScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.secondDice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
        nextPlayer();
        }
    }
});

document.querySelector('.btn-changeMaxScore').addEventListener('click', function() {
    maxScore = document.getElementById('maxScore').value;
    document.getElementById('maxScore').value = '';
});

document.querySelector('.btn-new').addEventListener('click', init);

function getDiceNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

function setDiceDOM(dice, diceName) {
    diceDOM = document.querySelector(diceName);
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
}

function nextPlayer() {

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    previousRoll = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.secondDice').style.display = 'none';
}

function init() {

    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    previousRoll = 0;
    maxScore = 100;

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.secondDice').style.display = 'none';

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
