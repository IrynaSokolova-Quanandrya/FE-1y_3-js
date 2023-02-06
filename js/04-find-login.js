/*
 * Напиши скрипт пошуку логіна
 * - Якщо логіна немає, вивести повідомлення 'Користувач [логін] не знайдено.'
 * - Якщо знайшли логін, вивести повідомлення 'Користувач [логін] знайдено.'
 *
 * - Спочатку через for
 * - Потім через for...of
 * - Логіка break
 * - Метод includes() с тернарним оператором
 */

const logins = ['m4ngoDoge', 'aj4xth3m4n', 'k1widab3st', 'poly1scute'];
const loginToFind = 'aj4xth3m4n';
let message;

// for (const login of logins) {
//     if(login !== loginToFind){       
//         break;
//     } 
//     message = `Користувач ${loginToFind} знайдено.`
// }

 
// тернарний оператор
 message = logins.includes(loginToFind) ? `Користувач ${loginToFind} знайдено.` : `Користувач ${loginToFind} не знайдено.`;

 console.log(message);