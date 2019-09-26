let John = {
    fullName : 'John Smith',
    mass : 70,
    height : 1.9,
    calcBIM: function(){
        return this.BMI=this.mass/(this.height*this.height);
    }
}

let Mark = {
    fullName : 'Mark Doe',
    mass : 50,
    height : 1.5,
    calcBIM: function(){
        return this.BMI=this.mass/(this.height*this.height);
    }
}
let highestBMI='John and Mark have the same BMI';

if(John.calcBIM()!==Mark.calcBIM()){
    highestBMI = John.BMI>Mark.BMI?John.fullName+" has the highest BMI of "+ John.BMI:Mark.fullName+" has the highest BMI of "+ Mark.BMI;;
}

console.log(highestBMI);
