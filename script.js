let markMass = 70;
let markHeight = 1.70;
let johnMass = 50;
let johnHeight = 1.90;

function calculateBMI(mass,height) {
    return mass/(height*height);
}

let isMarkHigherBMI = calculateBMI(markMass,markHeight)>calculateBMI(johnMass,johnHeight);

console.log("Is Mark's BMI higher than John's? "+isMarkHigherBMI);
