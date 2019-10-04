const johnTeamScores = [89,20,103];
const mikeTeamScores = [116,94,123];
const johnsAvrg = calcAverage(johnTeamScores);
const mikesAvrg = calcAverage(mikeTeamScores);
const hasHigherScore = johnsAvrg > mikesAvrg ? "John's team has a higher average of " + johnsAvrg : "Mike's team has a higher average of " + mikesAvrg;
const avrg = johnsAvrg == mikesAvrg ? "John's and Mike's teams have the same average score" : hasHigherScore;

function calcAverage(scores) {
    
    let sum = 0;

    scores.forEach(score => {
        sum += score;
    });

    return sum / scores.length;
}

//Extra

const maryTeamScores = [97,134,105];
const maryAvrg = calcAverage(maryTeamScores);
let winner = "The three teams are tied";

if (maryAvrg > johnsAvrg && maryAvrg > mikesAvrg) {
    winner = "Mary's team has the highest average score of " + maryAvrg;
}
else if (maryAvrg !== johnsAvrg && maryAvrg !== mikesAvrg) {
    winner = avrg;
}
else if (maryAvrg > johnsAvrg && maryAvrg == mikesAvrg) {
    winner = "Mary's and Mike's teams have the highest score";
}
else if (maryAvrg > mikesAvrg && maryAvrg == johnsAvrg) {
    winner = "Mary's and John's teams have the highest score";
}

console.log(winner);
