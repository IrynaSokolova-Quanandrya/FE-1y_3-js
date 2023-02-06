/*
 * Напиши скрипт, який об"єднує всі елементи массива в один рядок.
 * Елементів може бути довільна кількість.
 * Нехай елементи массива  в рядку будут розділені комою.
 */

const str = "Hello world!"
const strArr = str.split(' ');
console.log(strArr);
const strJoin = strArr.join(' ');
console.log(strJoin);


const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

let string = '';

// Повинно вийти 'Mango,Poly,Kiwi,Ajax'