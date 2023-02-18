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
var isA;
(function (isA) {
    var Vehicle = /** @class */ (function () {
        function Vehicle() {
        }
        Vehicle.prototype.ileri = function () { };
        return Vehicle;
    }());
    var Car = /** @class */ (function (_super) {
        __extends(Car, _super);
        function Car() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Car.prototype.sag = function () {
            console.log("saga gider");
        };
        Car.prototype.sol = function () {
            console.log("sola gider");
        };
        return Car;
    }(Vehicle));
    var Car2 = /** @class */ (function (_super) {
        __extends(Car2, _super);
        function Car2() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Car2.prototype.sag = function () {
            console.log("saga gider");
        };
        Car2.prototype.sol = function () {
            console.log("sola gider type2");
        };
        return Car2;
    }(Vehicle));
    var Car3 = /** @class */ (function (_super) {
        __extends(Car3, _super);
        function Car3() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Car3.prototype.sag = function () {
            console.log("saga gider type3");
        };
        Car3.prototype.sol = function () {
            console.log("sola gider");
        };
        return Car3;
    }(Vehicle));
    var Train = /** @class */ (function (_super) {
        __extends(Train, _super);
        function Train() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Train.prototype.sag = function () {
            throw new Error("saga gidemez");
        };
        Train.prototype.sol = function () {
            throw new Error("sola gidemez");
        };
        return Train;
    }(Vehicle));
})(isA || (isA = {}));
