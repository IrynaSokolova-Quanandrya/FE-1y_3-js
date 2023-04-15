/*
 * Класи
 * 🐷 - об'явлення (Car)
 * 🐷 - конструктор
 * 🐷 - методи 
 * 🐷 - static(description, logInfo)
 * 🐷 - приватні властивості
 * 🐷 - синтаксис публічних властивостей та методи класів
 * 🐷 - Геттери та сеттери
 */

class Car {
    constructor(model, price, year, color){
        this._model = model
        this._price = price
        this.year = year
        this.color = color
    }

    get model(){
        console.log(this._model);
    }

    set price(newPrice){
        this._price = newPrice;
    }
    // getModel(){
    //     console.log(this.model);
    // }

    // changePrice(newPrice){
    //     this.price = newPrice;
    // }
}

const audi = new Car('A5', 40000, 2020, 'black');
audi.model;
audi.price = 50000;
// audi.getModel();
// audi.changePrice(45000);
console.log(audi);

const mazda  = new Car('mazda-3', 35000, 2022, 'red');
// mazda.getModel();
// mazda.changePrice(40000);
// console.log(mazda);







// 'A5', 40000, 2020, 'black'
// 'mazda-3', 35000, 2022, 'red'

// function Car (model, price, year, color){
//     this.model = model;
//     this.price = price;
//     this.year = year;
//     this.color = color;     
// }

// Car.prototype.changePrice = function(newPrice){
//     this.price = newPrice;
// }

// Car.description = 'Це функція конструктор!'

// // console.log(Car.model);
// const carInstance = new Car();
// const audi = new Car('A5', 40000, 2020, 'black');
// console.log(audi);


// const mazda = new Car('mazda-3', 35000, 2022, 'red');
// console.log(mazda);