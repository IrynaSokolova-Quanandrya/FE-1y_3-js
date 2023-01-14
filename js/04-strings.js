

/*
 * Довжина рядка, влістивість length
 */
// const message = 'В цьому рядку 26 символів.';
// console.log(message.length);

/*
 * Конкатенація рядків
 */

// const firstName = 'Mango';
// const lastName = 'Lee';
// const fullname = 'Mango' + ' ' + 'Lee';

// console.log(fullname);



/*
 * Напиши скрипт який виведе рядок в форматі:
 * «Гість x y поселяється в g номер q»,
 * підставив замість x y g q значення змінних
 */
const firstName = 'Mango';
const lastName = 'Lee';
const room = 716;
const type = 'VIP';
const customersMsg = `Гість ${firstName} ${lastName} поселяється в ${room} номер ${type}`

// console.log(customersMsg);

/*
 * Шаблонні рядки (template strings)
 * Повертаємось до складання рядка поселення в готель
 */

const quantity = 5;
const orderMsg = `Ви замовляєте ${quantity} тістечок.`;
// console.log(orderMsg);


/*
 * Нормалізація з методом toLocaleLowerCase()
 */

const message = 'В цьому рядку 26 символів.';

console.log(message.includes('цьому'));

// console.log(message.toLocaleUpperCase());

// const a = 'GoOgle';


// let brand = prompt('Давай бренд');
// brand = brand.toLowerCase();

// console.log(brand);


/*
 * Пошук в рядку з методом includes()
 */


const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'розпродаж';

const string1 = 'Привіт, я принц Абдул, це не спам, пропоную тобі мільйон!';
const string2 = 'Найбільший РОЗПРОДАЖ цього тижня, не пропустіть!';
const string3 = 'Рекламна кампанія #jsIsAwesome';


