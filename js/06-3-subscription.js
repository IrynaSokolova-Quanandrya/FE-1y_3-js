/*
 * Напиши скрипт перевірки підписки користувача під час доступу до контенту
 * - Є три типи підписки: free, pro и vip.
 * - Отримати доступ можуть тільки pro и vip
 */

const sub = 'pro';

// якщо користувач pro або користувач vip тоді є доступ

const canAccessContent = sub === 'pro' || sub === "vip";
//                          true             false 

console.log('Є доступ до контенту? ', canAccessContent);
