// - Обробка помилок з try...catch
//   - Синтаксис
//   - Які помилки відловлює
//     - ❌ етап оцінки (читання) - помилки парсинга (parsing errors)
//     - ✅ етап виконання скрипта - помилки виконання (runtime errors)
//   - Ловить тільки помилки в синхроному коді
//     - Як зловити помилку в асинхроному коді
//   - Об'єкт помилки
//     - name
//     - message
//     - stack
//   - Блок catch без помилки


try {
  console.log('Внутри try до myVar');

  myVar;

  console.log('Внутри try после myVar');
} catch (error) {
  console.log('Ошибка!');
}

console.log('После try...catch');
