//Defining classes that implement the needed interfaces.
var Person1 = /** @class */ (function () {
    function Person1() {
    }
    Person1.prototype.boot = function () {
        console.log("Person1 prefers to wear boots.");
    };
    Person1.prototype.jumper = function (color) {
        console.log("Person1 prefers to wear ".concat(color, " jumper."));
    };
    Person1.prototype.watch = function (movie) {
        console.log("Person1 prefers to watch ".concat(movie, "."));
    };
    return Person1;
}());
var Person2 = /** @class */ (function () {
    function Person2() {
    }
    Person2.prototype.jumper = function (color) {
        console.log("Person2 prefers to wear ".concat(color, " jumper."));
    };
    Person2.prototype.goshopping = function () {
        console.log("Person2 prefers to go shopping.");
    };
    return Person2;
}());
var Person3 = /** @class */ (function () {
    function Person3() {
    }
    Person3.prototype.drinking = function (drink) {
        console.log("Person3 prefers to drink ".concat(drink));
    };
    Person3.prototype.watch = function (movie) {
        console.log("Person3 prefers to watch ".concat(movie, "."));
    };
    Person3.prototype.trousers = function () {
        console.log("Person3 prefers to wear trousers.");
    };
    return Person3;
}());
//To see outputs
var person1 = new Person1();
person1.boot();
person1.jumper("red");
person1.watch("Titanic");
var person2 = new Person2();
person2.goshopping();
person2.jumper("blue");
var person3 = new Person3();
person3.drinking("coffee");
person3.watch("Fight Club");
