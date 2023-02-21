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
var Broom = /** @class */ (function () {
    function Broom() {
    }
    Broom.prototype.sweep = function () {
        console.log("Every broom types used for sweep.");
    };
    Broom.prototype.electricity = function () {
        console.log("Every broom type works with electricity.");
    };
    return Broom;
}());
//Derived classes that implements interfaces as different properties.
var DysonV15 = /** @class */ (function (_super) {
    __extends(DysonV15, _super);
    function DysonV15() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DysonV15.prototype.laser = function () {
        console.log("DysonV15 has laser light head that reveals microscopic dust.");
    };
    DysonV15.prototype.extraWasteBox = function () {
        console.log("DysonV15 has a 3x waste container");
    };
    return DysonV15;
}(Broom));
var DysonV12 = /** @class */ (function (_super) {
    __extends(DysonV12, _super);
    function DysonV12() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DysonV12.prototype.laser = function () {
        console.log("DysonV12 has laser light head that reveals microscopic dust.");
    };
    DysonV12.prototype.lightness = function () {
        console.log("DysonV12 lightness makes it easy to sweep.");
    };
    return DysonV12;
}(Broom));
var DysonV10 = /** @class */ (function (_super) {
    __extends(DysonV10, _super);
    function DysonV10() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DysonV10.prototype.petHead = function () {
        console.log("DysonV10 has a special head for cleaning the hair of pets.");
    };
    return DysonV10;
}(Broom));
// 1.way
var dysonv15 = new DysonV15();
dysonv15.electricity();
dysonv15.sweep();
dysonv15.extraWasteBox();
dysonv15.laser();
var dysonv12 = new DysonV12();
dysonv12.laser();
dysonv12.lightness();
var dysonv10 = new DysonV10();
dysonv10.petHead();
//2.way with creating base broom
var baseBroom;
baseBroom = new DysonV15();
baseBroom.electricity();
baseBroom.sweep();
baseBroom.laser();
baseBroom.extraWasteBox();
baseBroom = new DysonV10();
//(baseBroom as DysonV10) for baseBroom to see DysonV10's methods.
baseBroom.petHead();
baseBroom = new DysonV12();
baseBroom.laser();
baseBroom.lightness();
