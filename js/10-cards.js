/*
 * Працюємо з колекцією карток в trello
 * - Метод splice()
 * - Видалити
 * - Додати
 * - Оновити
 */

const cards = [
    'Карточка-1',
    'Карточка-2',
    'Карточка-3',
    'Карточка-4',
    'Карточка-5',
  ];
  
  console.table(cards);  

  /*
   * Видалення (по індексу), метод indexOf()
   */
  const cardToRemove = 'Карточка-3';

  const index = cards.indexOf(cardToRemove) 
  console.log(index);

  cards.splice(index, 1)
  console.log(cards);

  /*
   * Додавання (по індексу)
   */
  
const cardToInsert = 'Карточка-6';

cards.push(cardToInsert);
console.log(cards);

  /*
   * Оновлення (по індексу)
   */
  const cardToUpdate = 'Карточка-4';
  const idx = cards.indexOf(cardToUpdate)

  cards.splice(idx, 1, cardToInsert)

  console.log(cards);