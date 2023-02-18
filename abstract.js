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
var BasePerson = /** @class */ (function () {
    function BasePerson() {
    }
    BasePerson.prototype.show = function () {
        console.log("".concat(this.id, " ").concat(this.name));
    };
    return BasePerson;
}());
var Person2 = /** @class */ (function (_super) {
    __extends(Person2, _super);
    function Person2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Person2.prototype.details = function (a) {
        throw new Error("Method not implemented.");
    };
    return Person2;
}(BasePerson));
var p = new Person2();
p.id = 1;
p.name = "ahmet";
p.show;
