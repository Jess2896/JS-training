const johnTeamScores = [89, 20, 103];
const mikeTeamScores = [116, 94, 123];
const johnsAvrg = calcAverage(johnTeamScores);
const mikesAvrg = calcAverage(mikeTeamScores);

const higherAverage = {
    winner: 'John and Mike',
    score: '',
    numberOfWinners: 1,

    setWinner() {

        if (johnsAvrg !== mikesAvrg && johnsAvrg > mikesAvrg) {
            this.winner = 'John';
            this.score = johnsAvrg;
        }
        else if (johnsAvrg !== mikesAvrg) {
            this.winner = 'Mike';
            this.score = mikesAvrg;
        }
        else {
            this.numberOfWinners = 2;
        }
    }
};

/**
 * Determines which team has the highest average score and stores the results
 */
higherAverage.setWinner();

/**
 * Calculates the average of the given array of numbers
 * @param {integers[]} scores 
 */
function calcAverage(scores) {
    
    let sum = 0;

    scores.forEach(score => {
        sum += score;
    });

    return sum / scores.length;
}

//Extra

const maryTeamScores = [97, 134, 105];
const maryAvrg = calcAverage(maryTeamScores);

if (maryAvrg > johnsAvrg && maryAvrg > mikesAvrg) {
    higherAverage.winner = 'Mary';
    higherAverage.score = maryAvrg;
    higherAverage.numberOfWinners = 1;
}

else if (maryAvrg > johnsAvrg && maryAvrg == mikesAvrg) {
    higherAverage.winner = 'Mary and Mike';
    higherAverage.numberOfWinners = 2;
}

else if (maryAvrg > mikesAvrg && maryAvrg == johnsAvrg) {
    higherAverage.winner = 'Mary and John';
    higherAverage.numberOfWinners = 2;
}

else if (maryAvrg === mikesAvrg && maryAvrg === johnsAvrg) {
    higherAverage.winner = 'Mary, John and Mike';
    higherAverage.numberOfWinners = 3;
}

const highestScore = higherAverage.numberOfWinners === 1 ? `${higherAverage.winner}\'s team has the highest average score of ${higherAverage.score}` : `${higherAverage.winner} have the same score`;

console.log(highestScore);
