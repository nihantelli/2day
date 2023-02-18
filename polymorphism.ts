class person {
  id: number;
  name: string;
  salary: number;
  childCount: number;

  calculateSalary() {
    return this.salary + this.childCount * 1000;
  }
}
class JuniorDevPerson extends person {
  //methodun ismi değişmedi ama davranışı değişti
  calculateSalary() {
    var baseSalary = super.calculateSalary();
    return baseSalary * 2;
  }
}
class MidDevPerson extends person {
  age: number;
  //methodun ismi değişmedi ama davranışı değişti
  calculateSalary() {
    var baseSalary = super.calculateSalary();
    return baseSalary * 4;
  }
}
class SeniorDevPerson extends person {
  //methodun ismi değişmedi ama davranışı değişti
  calculateSalary() {
    var baseSalary = super.calculateSalary();
    return baseSalary * 8;
  }
}
//junior için hesaplama
var junior = new JuniorDevPerson();
junior.id = 1;
junior.name = "ahmet";
junior.salary = 1000;
junior.childCount = 3;
console.log(`junior developer maaş hesaplama: ${junior.calculateSalary()}`);
//mid için hesaplama
var mid = new MidDevPerson();
mid.id = 1;
mid.name = "ahmet";
mid.age = 23;
mid.salary = 1000;
mid.childCount = 3;
console.log(`junior developer maaş hesaplama: ${mid.calculateSalary()}`);
//senior için hesaplama
var senior = new SeniorDevPerson();
senior.id = 1;
senior.name = "ahmet";
senior.salary = 1000;
senior.childCount = 3;
console.log(`junior developer maaş hesaplama: ${senior.calculateSalary()}`);
console.log("-------------");
let basePerson: person = junior;
console.log(`base person maaş hesaplama ${basePerson.calculateSalary()}`);
basePerson = mid;
//casting işlemi, basePerson=mid desek bile eşitliğin sol tarafına göre çalışacağı için, şuanda person classında. ve orada age yok
console.log(
  `base person maaş hesaplama ${basePerson.calculateSalary()} - age: ${
    (basePerson as MidDevPerson).age
  }`
);
basePerson = senior;

console.log(`base person maaş hesaplama ${basePerson.calculateSalary()}`);
// var person5: person = new person();
// person5.id = 5;
// person5.name = "mehmet";
// person5.childCount = 2;
// person5.salary = 2000;

// // doğru yaklaşım değil.
// //let mid5:  JuniorDevPerson = person5;
