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
var BaseVehicle = /** @class */ (function () {
    function BaseVehicle() {
    }
    BaseVehicle.prototype.WriteToLog = function (log) {
        console.log(log);
    };
    return BaseVehicle;
}());
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Car.prototype.Method1 = function (a) {
        throw new Error("Method not implemented.");
    };
    return Car;
}(BaseVehicle));
var Train = /** @class */ (function (_super) {
    __extends(Train, _super);
    function Train() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Train.prototype.Method1 = function (a) {
        throw new Error("Method not implemented.");
    };
    return Train;
}(BaseVehicle));
var car1 = new Car();
car1.id = 1;
car1.type = "type 1";
car1.WriteToLog("car1 class");
var train1 = new Train();
train1.id = 20;
train1.type = "type 20";
train1.WriteToLog("train1 class");
