"use strict";

class Person {
  static #ageConst = 60;

  constructor(name, age) {
    this.name = name; // instance variable
    this.age = age;
  }
  calculate(ageConst2) {
    console.log(`${this.name}${ageConst2 - thisage}`);
  }
}

var p1 = new Person("ahmet", 20);
p1.calculate();
var p2 = new Person("mehmet", 30);

console.log(Person.ageConst);
console.log(`${p1.name}${Person.ageConst - p1.age}`);
console.log(`${p2.name}${Person.ageConst - p2.age}`);

Person.ageConst = 100;
console.log(`${p1.name}${Person.ageConst - p1.age}`);
console.log(`${p2.name}${Person.ageConst - p2.age}`);

class Product {
  #stock = 500; //private property
  constructor() {
    var name;
    var price;
  }

  setStock(stock) {
    if (stock > 1000) {
      this.#stock = stock;
    } else throw "stock değeri 1000'den fazla olmalıdır.";
  }

  getStock() {
    return this.#stock;
  }

  setPrice(price) {
    if (price > 1 && price < 100) {
      this.price = price;
    } else {
      throw "price değeri 1 ile 100 arasında olmalıdır";
    }
  }

  getPrice() {
    return this.price;
  }
  //public method
  publicCalculate() {
    return this.#Calculate() * 1.18;
  }
  //private method
  #Calculate() {
    return 10;
  }
}

// Access Modifiers
// public,private,protected  : typescript
// public,private : javascript

var product = new Product();
product.setStock(100);

console.log(product.getStock());
//product.price=100;
product.setPrice(5);
console.log(product.getPrice());
