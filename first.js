var price1 = 20;
var price2 = 20.45;
var name2 = "ahmet";
var isShow = true;
var products = null;
var product = undefined;
var price3 = { name: "ahmet" };
var price4 = 30;
// hangi türdeyse ona göre fonksiyon çalışsın
// (price4 as number).toFixed();
// (price4 as string).concat("aaa");
var numbers = [1, 2, 3, 4, 5];
var names = ["ahmet", "mehmet", "hasan"];
var productList = ["kalem", "defter", "silgi"];
// arrayde başka tipler de olabilir anlamında, any kullanmasak iyi olur
var newList = ["kalem", "defter", "silgi"];
//fonksiyonlarda birden fazla değer dönmek için
var tuple = ["a", 3];
var Result = /** @class */ (function () {
    function Result() {
    }
    return Result;
}());
function calculate(a, b) {
    return [a + b, a * b, a - b];
}
console.log("toplam:".concat(calculate(3, 3)[0]));
console.log("\u00E7arp\u0131m:".concat(calculate(3, 3)[1]));
console.log("\u00E7\u0131karma:".concat(calculate(3, 3)[2]));
function calculate2(a, b) {
    var result = new Result();
    result.toplama = a + b;
    result.cikarma = a - b;
    result.carpma = a * b;
    return result;
}
console.log(calculate2(4, 5));
//for
// for (let index = 0; index < names.length; index++) {
//   const element = names[index];
//   console.log(element);
// }
var Student = /** @class */ (function () {
    function Student(name, surName, age) {
        this.name = name;
        this.surName = surName;
        this.age = age;
    }
    Student.prototype.show = function () {
        console.log("".concat(this.name).concat(this.surName).concat(this.name).concat(this.age));
    };
    return Student;
}());
var student1 = new Student("ahmet", "yıldız", 25);
console.log(student1.name);
console.log(student1.show());
//generic class
var StudentGeneric = /** @class */ (function () {
    function StudentGeneric(name, surName, age) {
        this.name = name;
        this.surName = surName;
        this.age = age;
    }
    StudentGeneric.prototype.show = function () {
        console.log("".concat(this.name).concat(this.surName).concat(this.name).concat(this.age));
    };
    return StudentGeneric;
}());
var student2 = new StudentGeneric("mehmet", "dertli", 23);
//Enum
var Color;
(function (Color) {
    Color[Color["Red"] = 100] = "Red";
    Color[Color["Green"] = 200] = "Green";
    Color[Color["Blue"] = 300] = "Blue";
})(Color || (Color = {}));
var color = Color.Red;
console.log(color);
console.log(Color[color]);
//yukarıdaki gibi değer atamazsak 0-1-2-3-4 diye gider
var Gender;
(function (Gender) {
    Gender[Gender["Kad\u0131n"] = 0] = "Kad\u0131n";
    Gender[Gender["Erkek"] = 1] = "Erkek";
})(Gender || (Gender = {}));
var value = Gender.Erkek;
console.log(value);
//function
function Add(a, b) {
    return a + b;
}
//generic function
//alınacak değerin türünü <> belirttik. a,b değerleri bu türde olacak dedik.
function GenericAdd(a, b) {
    var sum = a + b;
    console.log(sum);
    return sum;
}
GenericAdd(2, 5);
// somutlaştırma 1.yol, obje atadık
var person = { name: "nihan", age: 23, calculate: function () { } };
console.log(person.name);
var product5 = { id: 1, name: "kalem", price: 2000 };
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.calculate = function () {
        throw new Error("method not implemented");
    };
    Person.prototype.show = function (id, name) {
        throw new Error("method notimplemented");
    };
    return Person;
}());
// somutlaştırma 2.yol. implement yoluyla interfacein verilerini aldık. newle nesne oluşturduk
var p1 = new Person();
p1.age = 20;
p1.name = "ahmet";
p1.birthDate = new Date();
var person2 = p1;
person2.birthDate;
