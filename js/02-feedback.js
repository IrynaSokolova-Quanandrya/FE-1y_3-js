// import '../css/common.css';
// import '../css/feedback-form.css';

/**
 * Створюємо доступ до елементів
 * Вішаємо слухачів подій 
 */
const formRef = document.querySelector('.js-feedback-form');
const textareaRef = document.querySelector('.js-feedback-form textarea');

// formRef.addEventListener('submit', handleFormSubmit);
// textareaRef.addEventListener('input', handleTextareaInput);
formRef.addEventListener('input', handleInputValue);

const formData = {}

function handleInputValue(e){
    console.log(e.target.name);
    console.log(e.target.value);

    formData[e.target.name] = e.target.value;
    
    localStorage.setItem('formData', JSON.stringify(formData))
}



// obj.name
// obj['name']


// getValueFromLocalStorage();

/*
 * - Зупиняєм поведінку за замовчуванням
 * - Видаляємо повідомлення зі сховища
 * - Очищуємо форму
 */
// function handleFormSubmit(event) {
//    event.preventDefault();

//    event.currentTarget.reset();
//    localStorage.removeItem('value');

// }


/*
 * - Отримуємо значення поля
 * - Зберігаємо його у сховищі
 * - Можно додати throttle
 */
// function handleTextareaInput(event) {
//     console.log(event.target.value);
//     const value = event.target.value;
//     localStorage.setItem('value', value);
// }
/*
 * - Отримуємо значення зі сховища
 * - Якщо там щось було, оновлюємо DOM
 */
// function getValueFromLocalStorage() {
//   const comment = localStorage.getItem("value");
    
//   if(comment){
//     textareaRef.textContent = comment;
//   }
      
// }

// ДОДАТКОВО
// зробити так щоб зберігало не тільки повідомлення, 
// але і ім'я і все в одному об'єкті








// const formData = {};

// refs.form.addEventListener('input', e => {
//   // console.log(e.target.name);
//   // console.log(e.target.value);

//   formData[e.target.name] = e.target.value;

//   console.log(formData);
// });