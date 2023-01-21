/*
 * Напиши скрипт який перевірить входження 
 * числа у відрізок зазначений x1 та x2. *
 * - До x1
 * - Після x2
 * - Від x1 до x2
 * - До x1 або після x2
 */
//                  10                      30 
// ================================================================
//                  x1                      x2
const x1 = 10;
const x2 = 30;
const number = 25;

console.log(`Число ${number} потрапляє у відрізок до ${x1}? `, number < x1);

console.log(`Число ${number} потрапляє у відрізок після ${x2}? `, number > x2);

console.log(`Число ${number} потрапляє у відрізок від ${x1} до ${x2}?`, number > x1  && number < x2);

// number > x1  && number <x2
// 15 > 10 && 15 < 30
// true && true
// true

// number > x1  && number <x2
// 35 > 10 && 35 < 30
// true && false
// false

console.log(`Число ${number} потрапляє у відрізок до ${x1} або після ${x2}?`, number < x1 || number > x2);

// number > x1  || number <x2
// 25 < 10 || 25 > 30
// false || false
// false
