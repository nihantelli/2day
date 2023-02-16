var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var person = /** @class */ (function () {
    function person() {
    }
    person.prototype.calculateSalary = function () {
        return this.salary + this.childCount * 1000;
    };
    return person;
}());
var JuniorDevPerson = /** @class */ (function (_super) {
    __extends(JuniorDevPerson, _super);
    function JuniorDevPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //methodun ismi değişmedi ama davranışı değişti
    JuniorDevPerson.prototype.calculateSalary = function () {
        var baseSalary = _super.prototype.calculateSalary.call(this);
        return baseSalary * 2;
    };
    return JuniorDevPerson;
}(person));
var MidDevPerson = /** @class */ (function (_super) {
    __extends(MidDevPerson, _super);
    function MidDevPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //methodun ismi değişmedi ama davranışı değişti
    MidDevPerson.prototype.calculateSalary = function () {
        var baseSalary = _super.prototype.calculateSalary.call(this);
        return baseSalary * 4;
    };
    return MidDevPerson;
}(person));
var SeniorDevPerson = /** @class */ (function (_super) {
    __extends(SeniorDevPerson, _super);
    function SeniorDevPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //methodun ismi değişmedi ama davranışı değişti
    SeniorDevPerson.prototype.calculateSalary = function () {
        var baseSalary = _super.prototype.calculateSalary.call(this);
        return baseSalary * 8;
    };
    return SeniorDevPerson;
}(person));
//junior için hesaplama
var junior = new JuniorDevPerson();
junior.id = 1;
junior.name = "ahmet";
junior.salary = 1000;
junior.childCount = 3;
console.log("junior developer maa\u015F hesaplama: ".concat(junior.calculateSalary()));
//mid için hesaplama
var mid = new MidDevPerson();
mid.id = 1;
mid.name = "ahmet";
mid.salary = 1000;
mid.childCount = 3;
console.log("junior developer maa\u015F hesaplama: ".concat(mid.calculateSalary()));
//senior için hesaplama
var senior = new SeniorDevPerson();
senior.id = 1;
senior.name = "ahmet";
senior.salary = 1000;
senior.childCount = 3;
console.log("junior developer maa\u015F hesaplama: ".concat(senior.calculateSalary()));
