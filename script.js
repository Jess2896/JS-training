const johnsFamily = {
    name: 'John',
    bills: [124, 48, 268, 180, 42],
    allTips: [],
    finalAmounts: [],

    calcTips() {

        this.bills.forEach(bill => {
            let tip;

            if (bill < 50){
                tip = bill * 0.2;
                this.allTips.push(tip);
                this.finalAmounts.push(tip + bill);
            }
            else if (bill < 200) {
                tip = bill * 0.15;
                this.allTips.push(tip);
                this.finalAmounts.push(tip + bill);
            }
            else {
                tip = bill * 0.1;
                this.allTips.push(tip);
                this.finalAmounts.push(tip + bill);
            } 
        });
    }
};

johnsFamily.calcTips();

console.log(johnsFamily.allTips);
console.log(johnsFamily.finalAmounts);

//Extra

const marksFamily = {
    name: 'Mark',
    bills: [77, 375, 110, 45],
    allTips: [],
    finalAmounts: [],
    
    calcTips() {

        this.bills.forEach(bill => {
            let tip;
            if (bill < 100) {
                tip = bill * 0.2;
                this.allTips.push(tip);
                this.finalAmounts.push(tip + bill);
            }
            else if (bill < 300) {
                tip = bill * 0.1;
                this.allTips.push(tip);
                this.finalAmounts.push(tip + bill);
            }
            else {
                tip = bill * 0.25;
                this.allTips.push(tip);
                this.finalAmounts.push(tip + bill);
            }
        });
    }
};

const highestTipsFamily = '';

function tipsAvrg(tips) {
    let sum = 0;

    tips.forEach(tip => {
        sum += tip;
    });

    return sum / tips.length;
}

marksFamily.calcTips();

johnsFamily['avrgTips'] = tipsAvrg(johnsFamily.allTips);
marksFamily['avrgTips'] = tipsAvrg(marksFamily.allTips);

if (johnsFamily.avrgTips > marksFamily.avrgTips) {
    highestTipsFamily = johnsFamily.name;
}
else if (marksFamily.avrgTips > johnsFamily.avrgTips) {
    highestTipsFamily = marksFamily.name;
}

const highestTips = johnsFamily.avrgTips !== marksFamily.avrgTips ? `${highestTipsFamily}\'s family has paid the highest amount of tips` : 'Both have paid the same amount of average tips';

console.log(highestTips);
