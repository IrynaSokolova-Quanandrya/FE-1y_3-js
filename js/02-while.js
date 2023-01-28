// Цикл while


for(let i = 0; i <= 5; i += 1){    
    console.log(i);    
}

// console.log(prompt('ghghj'));

// console.log(Number(null));
let number;
while (number !== 5) {
    
    if(number === 0){
        console.log(number);
        break;
    }
    number = Number(prompt('Введіть чисто 5'))

    
    console.log(number);    
}



// Цикл do...while

let password = '';

do {
  password = prompt('Введіть пароль довше 4-х символів', '');
} while (password.length < 5);

console.log('Ввели пароль: ', password);