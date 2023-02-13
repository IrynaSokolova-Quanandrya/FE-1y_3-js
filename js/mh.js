// const fnA = function(){
// console.log(arguments);
// Array.from(arguments)
// };
// console.log(fnA());
// function fnB(params) {
    
// }

// const fnC = (param1, param2) => 'hjghjghjghj';
// console.log(fnC(5, 10));

const myAverageScore = (arr) => {
    let totalScore = 0;
    for (let element of arr) {
        totalScore += element;
   } 
   totalScore = totalScore / arr.length;

   if ( totalScore <= 100 && totalScore >= 91) {
    return "My average score: A";
   } else if ( totalScore <= 90 && totalScore >= 81) {
    return "My average score: B";
   } else if ( totalScore <= 80 && totalScore >= 71) {
    return "My average score: C";
   } else if ( totalScore <= 70) {
    return "My average score: D";
   }
   
}

console.log(myAverageScore([100, 75, 81, 96]));
console.log(myAverageScore([45, 63, 85, 70]));
console.log(myAverageScore([77, 82, 60, 58]));
console.log(myAverageScore([93, 99, 93, 96]));