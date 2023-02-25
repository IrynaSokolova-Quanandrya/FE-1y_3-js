/*
 * Array.prototype.forEach(callback(currentValue, index, array), thisArg)
 * - Поелементо перебирає оригінальний масив
 * - Нічого не повертає
 * - Замінює класичний for, якщо не потрібно преривати цикл
 */

// array.method(callback[currentValue, index, array])

const numbers = [5, 10, 15, 20, 25];
let total = 0
numbers.forEach(function(number) {
    total = number += 1
})
console.log(total);
console.log(numbers);