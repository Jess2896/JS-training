let johnTeamScores = [89,20,103];
let mikeTeamScores = [116,94,123];
let johnsAvrg = calcAverage(johnTeamScores);
let mikesAvrg = calcAverage(mikeTeamScores);
let hasHigherScore = johnsAvrg > mikesAvrg? "John's team has a higher average of " + johnsAvrg : "Mike's team has a higher average of " + mikesAvrg;
let avrg = johnsAvrg == mikesAvrg? "John's and Mike's teams have the same average score" : hasHigherScore;

function calcAverage(scores) {
    let sum = 0;
    scores.forEach(score => {
        sum += score;
    });
    return sum/scores.length;
}

//Extra

let maryTeamScores = [97,134,105];
let maryAvrg = calcAverage(maryTeamScores);
let winner = "The three teams are tied";

if (maryAvrg > johnsAvrg && maryAvrg> mikesAvrg) {
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
