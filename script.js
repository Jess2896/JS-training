let markMass = 70;
let markHeight = 1.70;
let johnMass = 50;
let johnHeight = 1.90;
let isMarkHigherBMI = calculateBMI(markMass, markHeight) > calculateBMI(johnMass, johnHeight);

function calculateBMI(mass, height) {
    return mass / Math.pow(height, 2);
}

console.log("Is Mark's BMI higher than John's ? " + isMarkHigherBMI);
