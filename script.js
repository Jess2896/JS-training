const john = {
    fullName: 'John Smith',
    mass: 70,
    height: 1.7,

    calcBIM() {
        return this.BMI = this.mass / Math.pow(this.height, 2);
    }
};

const mark = {
    fullName: 'Mark Doe',
    mass: 50,
    height: 1.5
};

const winner = {};

mark.calcBIM = john.calcBIM;
john['BMI'] = john.calcBIM();
mark['BMI'] = mark.calcBIM();

if (john.BMI > mark.BMI) {
    winner['name'] = 'John';  
    winner['BMI'] = john.BMI;
}
else if (mark.BMI > john.BMI) {
    winner['name'] = 'Mark';
    winner['BMI'] = mark.BMI;
}

highestBMI = john.BMI !== mark.BMI ? `${winner.name} has the highest BMI of ${winner.BMI}` : 'Both have the same BMI';

console.log(highestBMI);
