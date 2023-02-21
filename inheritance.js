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
//Base Class
var Furniture = /** @class */ (function () {
    function Furniture(color, weight, length, height) {
        this.color = color;
        this.weight = weight;
        this.length = length;
        this.height = height;
    }
    //Common method
    Furniture.prototype.target = function () {
        return "It used at home decorator.";
    };
    return Furniture;
}());
//Derived Class 1
var Sofa = /** @class */ (function (_super) {
    __extends(Sofa, _super);
    function Sofa(color, weight, length, height, pillow) {
        var _this = 
        //adding uniq properties to this class
        _super.call(this, color, weight, height, length) || this;
        _this.pillow = pillow;
        return _this;
    }
    Sofa.prototype.usageArea = function () {
        return "Sofa used at living room.";
    };
    return Sofa;
}(Furniture));
//Derived Class 2
var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table(color, weight, length, height, eatOn) {
        var _this = 
        //adding uniq properties to this class
        _super.call(this, color, weight, height, length) || this;
        _this.eatOn = eatOn;
        return _this;
    }
    Table.prototype.usageArea = function () {
        return "Table used at kitchen.";
    };
    return Table;
}(Furniture));
//Derived Class 3
var Wardrobe = /** @class */ (function (_super) {
    __extends(Wardrobe, _super);
    function Wardrobe(color, weight, length, height, shelf) {
        var _this = 
        //adding uniq properties to this class
        _super.call(this, color, weight, height, length) || this;
        _this.shelf = shelf;
        return _this;
    }
    Wardrobe.prototype.usageArea = function () {
        return "Wardrobe used at bedroom.";
    };
    return Wardrobe;
}(Furniture));
//SOFA
var sofa = new Sofa("red", 15, 2, 1, true);
console.log("PROPERTIES OF SOFA/ color: ".concat(sofa.color, ". weight: ").concat(sofa.weight, "kg. lenght: ").concat(sofa.length, "m. height: ").concat(sofa.height, "m. having of pillow: ").concat(sofa.pillow, "."));
console.log("Common property of furnitures: ".concat(sofa.target(), "."));
console.log(sofa.usageArea());
//TABLE
var table = new Table("yellow", 5, 2, 1, true);
console.log("PROPERTIES OF TABLE/ color: ".concat(table.color, ". weight: ").concat(table.weight, "kg. lenght: ").concat(table.length, "m. height: ").concat(table.height, "m. ability to eat on: ").concat(table.eatOn, "."));
console.log("Common property of furnitures: ".concat(table.target(), "."));
console.log(table.usageArea());
//WARDROBE
var wardrobe = new Wardrobe("blue", 20, 2, 3, true);
console.log("PROPERTIES OF WARDROBE/ color: ".concat(wardrobe.color, ". weight: ").concat(wardrobe.weight, "kg. lenght: ").concat(wardrobe.length, "m. height: ").concat(wardrobe.height, "m. having of shelf: ").concat(wardrobe.shelf, "."));
console.log("Common property of furnitures: ".concat(wardrobe.target(), "."));
console.log(wardrobe.usageArea());
