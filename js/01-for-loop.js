/*
 * Цикл for
 */

// for(let count = 3; count < 5; count += 2;){
//   console.log();
  
//   // 1 - count = 3 -> (count < 5 - true) -> console.log() -> count += 3
//   // 2 - count = 5 -> (count < 5 - false) 
  
// }

// for(let i = 0; i <= 5; i += 1){    
//     console.log(i);    
// }

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
/*
 * Pre-increment и Post-increment
 */


/*
 * Напиши скрипт який підраховує загальну суму зп працівників.
 * Кількість робітників зберігається в змінній employees.
 * ЗП кожного працівника це випадкове число від 500 до 5000
 * Записати суму в змінну totalSalary і вивести в консоль
 */

// 1. Створити змінні employees, totalSalary
// const employees = 500;
// const minSalary = 50;
// const maxSalaty = 100;
// let totalSalary = 0;

// // 2. пройтися по зп працівників n кількість разів
// for (let i = 1; i <= employees; i += 1) {
//     // 3. згенерувати для кожного працівника зп
//     const salary = Math.round(Math.random() * (maxSalaty - minSalary) + minSalary);
//     console.log(`salary ${i}: `, salary);

//     // 4. додати зп кожного працівника
//     totalSalary += salary

//     // console.log(`totalSalary ${i}: `, totalSalary);
// }

// console.log(`totalSalary ${employees}: `, totalSalary);


/*
 * Напиши скрипт який порахує суму всіх парних чисел,
 * які входять в діапазон чисел в змінних від min до max.
 * Наприклад, якщо min=0 и max=5, то діапазон 0-5, і в 
 * ньому 2 парних числа - 2 та 4, їх сума 6.
 */

const min = 0;
const max =5;
let total = 0;

for(let i = min; i <= max; i += 1){
    // console.log(`${i} до if: `, i); 

  if(i % 2 !== 0){
    // console.log(`${i} всередині if: `, i);
    continue;
  }

// console.log(`${i} після if: `, i);
  total += i
}
// console.log(total)



// Інструкції break та continue