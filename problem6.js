var experience = 30;
var startingSalary = 45000;

var currentSalary= startingSalary;      


for(i=1; i <= experience; i++){
    currentSalary += currentSalary * .05 ;
}

currentSalary= currentSalary.toFixed(2);
console.log(currentSalary);
