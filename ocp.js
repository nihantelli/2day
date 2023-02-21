//Defining dog type enum
var DogType;
(function (DogType) {
    DogType[DogType["Golden"] = 0] = "Golden";
    DogType[DogType["Buldog"] = 1] = "Buldog";
    DogType[DogType["Yorkshire"] = 2] = "Yorkshire";
    DogType[DogType["Labrador"] = 3] = "Labrador";
})(DogType || (DogType = {}));
//Classes which implements IFoodAmount
var GoldenRetriever = /** @class */ (function () {
    function GoldenRetriever() {
    }
    GoldenRetriever.prototype.calculate = function (weight) {
        return weight / 500;
    };
    return GoldenRetriever;
}());
var Buldog = /** @class */ (function () {
    function Buldog() {
    }
    Buldog.prototype.calculate = function (weight) {
        return weight / 400;
    };
    return Buldog;
}());
var Yorkshire = /** @class */ (function () {
    function Yorkshire() {
    }
    Yorkshire.prototype.calculate = function (weight) {
        return weight / 400;
    };
    return Yorkshire;
}());
var Labrador = /** @class */ (function () {
    function Labrador() {
    }
    Labrador.prototype.calculate = function (weight) {
        return weight / 500;
    };
    return Labrador;
}());
var NecessaryFoodAmount = /** @class */ (function () {
    function NecessaryFoodAmount() {
    }
    NecessaryFoodAmount.prototype.calculateAmount = function (weight, foodAmount) {
        return foodAmount.calculate(weight);
    };
    return NecessaryFoodAmount;
}());
var necessaryFoodAmount = new NecessaryFoodAmount();
//Defining empty array
var amountArray = [];
var buldog = { dogType: DogType.Buldog, necessaryFoodAmount: new Buldog() };
var golden = {
    dogType: DogType.Golden,
    necessaryFoodAmount: new GoldenRetriever()
};
var labrador = {
    dogType: DogType.Labrador,
    necessaryFoodAmount: new Labrador()
};
var yorkshire = {
    dogType: DogType.Yorkshire,
    necessaryFoodAmount: new Yorkshire()
};
//Creating an array
amountArray.push(buldog, golden, labrador, yorkshire);
//See the outputs
amountArray.forEach(function (x) {
    return console.log("".concat(DogType[x.dogType], " dogs should eat about ").concat(x.necessaryFoodAmount.calculate(20000), "gr food per day."));
});
//other way
// console.log(
//   `Buldogs should eat about ${necessaryFoodAmount.calculateAmount(
//     20000,
//     new Buldog()
//   )}gr food per day.`
// );
// console.log(
//   `Golden Retrievers should eat about ${necessaryFoodAmount.calculateAmount(
//     20000,
//     new GoldenRetriever()
//   )}gr food per day.`
// );
// console.log(
//   `Labrador Retrievers should eat about ${necessaryFoodAmount.calculateAmount(
//     20000,
//     new Labrador()
//   )}gr food per day.`
// );
// console.log(
//   `Yorkshires should eat about ${necessaryFoodAmount.calculateAmount(
//     20000,
//     new Yorkshire()
//   )}gr food per day.`
// );
