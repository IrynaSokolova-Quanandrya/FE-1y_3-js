/*
 * Функції
 * - Функціональний вираз (function expression)
 * - Оголошення функції (function declaration)
 * - Аргументи і параметри
 * - return
 * - Поверненнф значення
 * - Параметри за замовчуванням
 */

// const fnA = function(param1){};

// const fnB = param1 => param1.toLowerCase();

// console.log(fnB('Hello'));

const a = function() {};
const b = a;

console.log(a === b);

// const addPrice = function(a, b){  
//   // console.log('a: ', a);
//   // console.log('b: ', b);

//  return a + b;  
// }

// const res1 = addPrice(5, 15);
// console.log(res1);

// addPrice(15, 20);
// addPrice(20, 15);
// addPrice(10, 25);

  
  
  // Function declaration
  // findLogin('login');
 
  // function findLogin(login, arr) {
  //   console.log(login);
  // }

  // findLogin('login');

  /*
   * - Стек викликів
   * - Stack trace і пошук помилок
   */
  
  // const fnA = function() {
  //   console.log('Почала виконуватися [fnA]');
  //   fnB();
  //   console.log('Продовжила виконуватися [fnA] після виходу з [fnB]');
  // };
  
  // const fnB = function() {
  //   console.log('Виконується [fnB]');
  // };
  
  // console.log('Почав виконання [main]');
  // fnA();
  // console.log('Продовжив виконуватися [main] після виходу з [fnA]');
    
    
    
    
  
  
  
  
  
  // Створіть масив styles з елементами 'Джаз' i 'Блюз'. 
  // Додайте 'Рок-н-ролл' в кінець масиву. 
  // Замініть значення в середині масиву на 'Класика'. 
  // Видаліть перший елемент масиву і покажіть його. 
  // Додайте 'Реп' і 'Реггі' на початок масиву. 
  // Виведіть масив в консоль.



  // ЗАДАЧА №5 ДЗ5
  // const styles = ['Джаз', 'Блюз'];
  // styles.push('Рок-н-ролл');

  // console.log(styles);

  // styles.splice(1, 1, 'Класика');
  // console.log(styles);

  // styles.shift();
  // console.log(styles);

  // styles.unshift('Реп','Реггі')
  // console.log(styles);
