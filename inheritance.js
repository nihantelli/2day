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
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.show = function () {
        "".concat(this.id, "-").concat(this.name);
    };
    return Person;
}());
var JuniorDevPerson = /** @class */ (function (_super) {
    __extends(JuniorDevPerson, _super);
    function JuniorDevPerson(id, name, age) {
        var _this = _super.call(this, name) || this;
        _this.id = id;
        _this.age = age;
        return _this;
    }
    return JuniorDevPerson;
}(Person));
var jun = new JuniorDevPerson(1, "NİHAN", 25);
console.log(jun);
var MidDevPerson = /** @class */ (function (_super) {
    __extends(MidDevPerson, _super);
    function MidDevPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MidDevPerson;
}(Person));
var SeniorDevPerson = /** @class */ (function (_super) {
    __extends(SeniorDevPerson, _super);
    function SeniorDevPerson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SeniorDevPerson;
}(Person));
var mid = new MidDevPerson("ahmet");
mid.name = "nihan";
console.log(mid);
