"use strict";
class Person {
  static ageConst = 60;
  constructor(name, age) {
    this.name = name; //instance variable
    this.age = age;
  }
  calculate(ageConst2) {
    console.log(`${this.name} ${ageConst2 - this.age}`);
  }
}

var p1 = new Person("ahmet", 20);
console.log(p1.calculate());

var p2 = new Person("mehmet", 30);
console.log(Person.ageConst);
console.log(`${p1.name}${Person.ageConst - p1.age}`);
console.log(`${p2.name}${Person.ageConst - p2.age}`);


// class Product {
//   //dışarıda tanımlıyorsak # işareti koyulur. constructorın içindekiyle bir fakrkı yok. ikisi de private
//   #stock = 500;
//   constructor() {
//     var name = "kalem1";
//     var price;
//   }
//   setStock(stock) {
//     if (stock > 1000) {
//       this.stock = stock;
//       //   veya #stock = stock;
//     } else {
//       console.log("stock değeri 1 ile 1000 arasında olmalıdır.");
//     }
//   }
//   getStock() {
//     return this.#stock;
//   }
//   setPrice(price) {
//     if (price > 1 && price < 100) {
//       this.price = price;
//     } else {
//       console.log("price değeri 1 ile 100 arasındadır.");
//     }
//   }
//   getPrice() {
//     return this.price;
//   }
//   //public method
//   publicCalculate() {
//     return this.#Calculate();
//   }
//   //private method
//   #Calculate() {
//     return 10;
//   }
// }
// var product = new Product();
// product.setStock(100);
// console.log(product.getStock());
// //public, private
// product.setPrice(200);
// console.log(product.getPrice());
// console.log(product.publicCalculate());
// console.log(product.Calculate());
