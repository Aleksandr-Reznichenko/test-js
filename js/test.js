// 'use strict';

// //

// class Auto {
//   // Публічні властивості (необов'язкове оголошення)
//   brand = ''; // по дефолту пустий рядок
//   model = '';
//   fuel = '';
//   run = 0; // по дефолту число 0
//   price = 0;
//   year = 0;
//   // Приватні властивості (обов'язкове оголошення)
//   #vinCode = '';

//   // Конструктор
//   constructor({ brand, model, vinCode, fuel, run, year, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.fuel = fuel;
//     this.run = run;
//     this.year = year;
//     this.price = price;

//     this.#vinCode = vinCode;
//   }

//   // Методи класу (функції)
//   brandPrice(color) {
//     console.log(
//       `Ціна автомобіля ${this.brand} ${this.model}, який має ${color} колір: ${this.price}грн.`
//     );
//   }

//   brandRun() {
//     console.log(
//       `Пробіг автомобіля ${this.brand} ${this.model}: ${this.run} км.`
//     );
//   }

//   //------------------

//   getBrand() {
//     return this.brand;
//   }
//   changeBrand(newBrand) {
//     this.brand = newBrand;
//   }

//   getModel() {
//     return this.model;
//   }
//   changeModel(newModel) {
//     this.model = newModel;
//   }

//   // Публічні методи для приватної властивості. Геттер і сеттер
//   get vinCode() {
//     return this.#vinCode;
//   }
//   set vinCode(newVinCode) {
//     if (this.#requiredVinCode(newVinCode)) {
//       this.#vinCode = newVinCode;
//     } else {
//       console.log('Не правильний формат VIN коду');
//     }
//   }
//   #requiredVinCode(vinCode) {
//     return vinCode.includes('WVG');
//   }
// }

// // Екземпляр класу Auto (інстанс класу Auto)
// const volkswagen = new Auto({
//   brand: 'Volkswagen',
//   model: 'Toureg',
//   vinCode: 'WVGMMM7PZED023722',
//   fuel: 'diesel',
//   run: 115000,
//   year: 2023,
//   price: 64000,
// });

// console.log(volkswagen);

// volkswagen.brandPrice('сірий');

// console.log(volkswagen.getBrand(), volkswagen.getModel());
// volkswagen.changeBrand('VW');
// volkswagen.changeModel('Passat B8');
// console.log(volkswagen.getBrand(), volkswagen.getModel());

// console.log(Auto.prototype); // виводить в консоль наявність методів (функцій)

// /*
// Для того, щоб отримати або змінити значення приватної властивості,
// потрібно використати публічні методи
// */
// console.log(volkswagen.vinCode);
// volkswagen.vinCode = 'WVGIII7PZED034816';
// console.log(volkswagen.vinCode);
