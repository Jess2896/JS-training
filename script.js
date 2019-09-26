let bills=[124,48,268];

function tipCalc(bill){
    if(bill<50){
        return bill*0.2;
    }
    else if(bill<200){
        return bill*0.15;
    }
    else{
        return bill*0.1;
    }
}

let allTips=[];
let finalAmounts=[];

for(let i=0;i<bills.length;i++){
    allTips.push(tipCalc(bills[i]));
    finalAmounts.push(allTips[i]+bills[i]);
}

console.log(allTips);
console.log(finalAmounts);
