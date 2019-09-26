let john = {
    bills : [124,48,268,180,42],
    allTips : [],
    finalAmounts : [],
    calcTips : function(){
        for(let i=0;i<this.bills.length;i++){
            if(this.bills[i]<50){
                this.allTips.push(this.bills[i]*0.2);
                this.finalAmounts.push(this.allTips[i]+this.bills[i]);
            }
            else if(this.bills[i]<200){
                this.allTips.push(this.bills[i]*0.15);
                this.finalAmounts.push(this.allTips[i]+this.bills[i]);
            }
            else{
                this.allTips.push(this.bills[i]*0.1);
                this.finalAmounts.push(this.allTips[i]+this.bills[i]);
            }
        }
    }
}
john.calcTips();
console.log(john.allTips);
console.log(john.finalAmounts);

//Extra

let mark = {
    bills : [77,375,110,45],
    allTips : [],
    finalAmounts : [],
    calcTips : function(){
        for(let i=0;i<this.bills.length;i++){
            if(this.bills[i]<100){
                this.allTips.push(this.bills[i]*0.2);
                this.finalAmounts.push(this.allTips[i]+this.bills[i]);
            }
            else if(this.bills[i]<300){
                this.allTips.push(this.bills[i]*0.1);
                this.finalAmounts.push(this.allTips[i]+this.bills[i]);
            }
            else{
                this.allTips.push(this.bills[i]*0.25);
                this.finalAmounts.push(this.allTips[i]+this.bills[i]);
            }
        }
    }
}

function tipsAvrg(tips){
    let sum=0;
    for(let i=0;i<tips.length;i++){
        sum+=tips[i];
    }
    return sum/tips.length;
}

mark.calcTips();
john['avrgTips'] = tipsAvrg(john.allTips);
mark['avrgTips'] = tipsAvrg(mark.allTips);

let highestTips='John and Mark have paid the same amount of average tips';

if(john.avrgTips !== mark.avrgTips){
    highestTips = john.avrgTips>mark.tipsAvrg?"John's family has paid the highest amount of tips":"Mark's family has paid the highest amount of tips";
}
console.log(highestTips);
