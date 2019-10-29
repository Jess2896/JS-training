const bills = [124, 48, 268];
const allTips = [];
const finalAmounts = [];

function tipCalc(bill) {

    if (bill < 50) {
        return bill * 0.2;
    }
    
    else if (bill < 200) {
        return bill * 0.15;
    }

    else {
        return bill * 0.1;
    }
}

bills.forEach(bill => {

    const tip = tipCalc(bill);
    allTips.push(tip);
    finalAmounts.push(tip + bill);
});

//testing

console.log(allTips);
console.log(finalAmounts);
