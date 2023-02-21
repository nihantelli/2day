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
//Base abstract class
var Cat = /** @class */ (function () {
    function Cat() {
    }
    Cat.prototype.informationCats = function () {
        console.log("Informations about this cat: Type: ".concat(this.type, " Name: ").concat(this.name, " Weight: ").concat(this.weight, "kg Color: ").concat(this.color, "."));
    };
    return Cat;
}());
//Derived class 1
var Alley = /** @class */ (function (_super) {
    __extends(Alley, _super);
    function Alley() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //fill in the abstract method derived from Cat
    Alley.prototype.hereditaryDiseases = function () {
        console.log("".concat(this.type, " cats are less likely to get sick."));
    };
    return Alley;
}(Cat));
//Derived class 2
var Scotish = /** @class */ (function (_super) {
    __extends(Scotish, _super);
    function Scotish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //fill in the abstract method derived from Cat
    Scotish.prototype.hereditaryDiseases = function () {
        console.log("".concat(this.type, " cats are experience discomfort in their bone structure."));
    };
    return Scotish;
}(Cat));
//Derived class 3
var British = /** @class */ (function (_super) {
    __extends(British, _super);
    function British() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //fill in the abstract method derived from Cat
    British.prototype.hereditaryDiseases = function () {
        console.log("".concat(this.type, " cats are suffer from digestive distress."));
    };
    return British;
}(Cat));
//Derived class 4
var Persian = /** @class */ (function (_super) {
    __extends(Persian, _super);
    function Persian() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    //fill in the abstract method derived from Cat
    Persian.prototype.hereditaryDiseases = function () {
        console.log("".concat(this.type, " cats experience inflammation of the eyes."));
    };
    return Persian;
}(Cat));
//Alley Cat Definition
var alley_cat = new Alley();
alley_cat.color = "White";
alley_cat.name = "Milka";
alley_cat.type = "Alley";
alley_cat.weight = 5;
alley_cat.informationCats();
alley_cat.hereditaryDiseases();
//Scotish Cat Definition
var scotish_cat = new Scotish();
scotish_cat.color = "Coffee";
scotish_cat.name = "Leo";
scotish_cat.type = "Scotish";
scotish_cat.weight = 3;
scotish_cat.informationCats();
scotish_cat.hereditaryDiseases();
//British Cat Definition
var british_cat = new British();
british_cat.color = "Gray";
british_cat.name = "Smoke";
british_cat.type = "British";
british_cat.weight = 4;
british_cat.informationCats();
british_cat.hereditaryDiseases();
//Persian Cat Definition
var persian_cat = new Persian();
persian_cat.color = "White";
persian_cat.name = "Misha";
persian_cat.type = "Persian";
persian_cat.weight = 5;
persian_cat.informationCats();
persian_cat.hereditaryDiseases();
