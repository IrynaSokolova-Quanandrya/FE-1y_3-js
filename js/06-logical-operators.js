/*
 *  Приведення до булю на прикладі Boolean(value)
 */

// console.log(Boolean('false'));

/*
 * Логічне І (оператор &&)
 * - Запинається на брехні
 * - Повертає те на чому запнулось або останній операнд
 */

// console.log('' && 4 && 0 && true && 1);

/*
 * Логічне АБО (оператор ||)
 * - Запинаєтьс на правді
 * - Повертає те на чому запнулось або останній операнд
 */

// console.log(false || 5 || null || 'ghjghg');

/*
 * Логічне НІ (оператор !)
 * Робить інверсію правда > брехня та брехня > правда
 */

// console.log(!false);
// for (let i = 0; i <= 5; i++) {

// 	setTimeout(() => console.log(i), 1000)
// }

let arr = [233, 458, 1, 1, 2, 4, 2, 4, 5, 7, 2, 3, 3, 233]

const unique = arr.filter((num, index, arr)=>{
    
})
// console.log(unique);

// const delay = (time) => {

// }

// // delay(1000)   	// wait 1000 ms / 1 sec
// // .then(
// // 	// код который выполнится с задержкой
// //   console.log("will be called in 1 sec")
// // )

// delay(5000).then(alert("Hello world"))

function spinWords(string){
   const arr = string.split(' ');
   const arr1 = arr.map(word => {
     if(word.length >= 5){
        const res =  word.split('').reverse().join('');
        return res
       }
      return [...res]
     })
     console.log(arr1);
    //  .join('')  
   }

   console.log(spinWords("Hey fellow warriors"));