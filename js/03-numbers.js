
// const num = 5;
// console.log(Number);
/*
 * Парс числа з Number.parseInt() та Number.parseFloat()
 */



let elementWidth = '50px';

elementWidth = Number.parseInt(elementWidth)

// console.log(elementWidth);
// console.log(elementWidth);


let elementHeight = '200.74px';

elementHeight = Number.parseFloat('200.74px');

// console.log(elementHeight);

/*
 * - Метод число.toFixed(digits)
 * - Матрьошки на пркладі console.log(Number(число.toFixed(digits)))
 */
let salary = 1300.16472;

// const res1 = salary.toFixed(2);

// const res2 = Number(res1)

salary = Number(salary.toFixed(2));
// console.log(salary);
/*
 * - Приведення до числа з Number(value)
 * - Значення NaN (Not a Number) і метод Number.isNaN(value)
 */
let quantity = '30';
let value = 'Цей рядок неможливо перетворити в число';

// console.log(Number(quantity));
// console.log(Number(value));
/*
 * Об'ект Math
 * - Возведення в степінь
 * - Exponent operator **
 */

const base = 3;
const power = 4;

const res = Math.pow(base, power)
const res1 = base ** power

// console.log(res1);
/*
 * Напиши скрипт який просить у користувача ввести число і степінь,
 * підводить число в цю степінь і виводить результат в консоль.
 */

// Алгоритм рішення:

/*
 * Генерим псевдовипадкові числа
 * - Math.random()
 * - Math.round()
 */

const max = 10;
const min = 5;

const random = Math.random() * (max - min) + min;


console.log(Math.round(2.5));






// const colors = ['tomato', 'teal', 'orange', 'deeppink', 'skyblue'];
// const max = colors.length - 1;
// const min = 0;

// const index = Math.round(Math.random() * (max - min) + min);

// const color = colors[index];

// console.log(color);

// document.body.style.backgroundColor = color;
