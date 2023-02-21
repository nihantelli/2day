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
    //Base class
    var House = /** @class */ (function () {
        function House() {
        }
        House.prototype.structure = function (type) {
            console.log("".concat(type, " have a structural system."));
        };
        House.prototype.inHouse = function (type) {
            console.log("".concat(type, " have at least one kitchen, one bathroom, one room."));
        };
        return House;
    }());
    //Derived class 1 - defining different methods
    var Residence = /** @class */ (function (_super) {
        __extends(Residence, _super);
        function Residence() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Residence.prototype.garden = function () {
            console.log("Residence flats doesn't have a garden.");
        };
        Residence.prototype.security = function () {
            console.log("Residence flats have a security system.");
        };
        Residence.prototype.floor = function () {
            console.log("Residence are high-rise buildings.");
        };
        return Residence;
    }(House));
    //Derived class 2 - defining different methods
    var DetachedHouse = /** @class */ (function (_super) {
        __extends(DetachedHouse, _super);
        function DetachedHouse() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DetachedHouse.prototype.garden = function () {
            console.log("Detached houses have a private garden.");
        };
        DetachedHouse.prototype.security = function () {
            console.log("Detached houses generally have a security system.");
        };
        DetachedHouse.prototype.floor = function () {
            console.log("Detached houses are low-rise buildings.");
        };
        return DetachedHouse;
    }(House));
    //Derived class 3 - defining different methods
    var Apartment = /** @class */ (function (_super) {
        __extends(Apartment, _super);
        function Apartment() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Apartment.prototype.garden = function () {
            console.log("Apartments don't have a private garden.");
        };
        Apartment.prototype.security = function () {
            console.log("Apartments generally don't have a security system.");
        };
        Apartment.prototype.floor = function () {
            console.log("Apartments are mid-rise buildings.");
        };
        return Apartment;
    }(House));
    //Residence House
    var residenceFlat = new Residence();
    residenceFlat.structure("Residences");
    residenceFlat.inHouse("Residences");
    residenceFlat.garden();
    residenceFlat.security();
    residenceFlat.floor();
    //Detached House
    var detachedHouse = new DetachedHouse();
    detachedHouse.structure("Detached houses");
    detachedHouse.inHouse("Detached houses");
    detachedHouse.garden();
    detachedHouse.security();
    detachedHouse.floor();
    //Apartment
    var apartment = new Apartment();
    apartment.structure("Apartments");
    apartment.inHouse("Apartments");
    apartment.garden();
    apartment.security();
    apartment.floor();
})(isA || (isA = {}));
