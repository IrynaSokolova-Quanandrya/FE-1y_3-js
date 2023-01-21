/*
 * Напиши скрипт який перевіряє можливість відкрити чат з користувачем.
 * Для цього користувач повинен бути:
 * - другом
 * - онлайн
 * - без режиму не турбувати
 */

const isOnline = true;
const isFriend = true;
const isDnd = true;

const canOpenChat = isOnline && isFriend && !isDnd;
// true && true && false
console.log('Можна відкрити чат? ', canOpenChat);
