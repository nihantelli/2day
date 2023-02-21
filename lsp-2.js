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
//Base class
var CoffeeMaker = /** @class */ (function () {
    function CoffeeMaker() {
    }
    CoffeeMaker.prototype.makeCoffee = function () {
        console.log("Every coffee machine makes coffee.");
    };
    return CoffeeMaker;
}());
//Derived classes that implements interfaces as different properties.
var Machine1 = /** @class */ (function (_super) {
    __extends(Machine1, _super);
    function Machine1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Machine1.prototype.worksByPressing = function () {
        console.log("Machine1 works by only pressing like frenchpress.");
    };
    return Machine1;
}(CoffeeMaker));
var Machine2 = /** @class */ (function (_super) {
    __extends(Machine2, _super);
    function Machine2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Machine2.prototype.grindCoffee = function () {
        console.log("Machine2 has the ability to grind bean coffee.");
    };
    return Machine2;
}(CoffeeMaker));
var Machine3 = /** @class */ (function (_super) {
    __extends(Machine3, _super);
    function Machine3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Machine3.prototype.frothingMilk = function () {
        console.log("Machine3 has the feature of foaming the milk in the chamber.");
    };
    return Machine3;
}(CoffeeMaker));
// 1.way
var machine1 = new Machine1();
machine1.makeCoffee();
machine1.worksByPressing();
var machine2 = new Machine2();
machine2.makeCoffee();
machine2.grindCoffee();
var machine3 = new Machine3();
machine3.makeCoffee();
machine3.frothingMilk();
//2.way with creating base machine
var baseMachine;
baseMachine = new Machine1();
baseMachine.worksByPressing();
baseMachine = new Machine2();
baseMachine.grindCoffee();
baseMachine = new Machine3();
baseMachine.frothingMilk();
