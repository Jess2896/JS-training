const markMass = 70;
const markHeight = 1.70;
const johnMass = 50;
const johnHeight = 1.90;
let isMarkHigherBMI = calculateBMI(markMass, markHeight) > calculateBMI(johnMass, johnHeight);

function calculateBMI(mass, height) {
    return mass / Math.pow(height, 2);
}

console.log("Is Mark's BMI higher than John's ? " + isMarkHigherBMI);
