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
var Sporter = /** @class */ (function () {
    function Sporter(name, age, profession) {
        this.name = name;
        this.age = age;
        this.profession = profession;
    }
    Sporter.prototype.diet = function () {
        console.log("Every sporter diets for health.");
    };
    Sporter.prototype.practice = function () {
        console.log("Every sporter makes practise to improve.");
    };
    Sporter.prototype.informationsAboutSporter = function () {
        console.log("".concat(this.name, " is a ").concat(this.profession, " and ").concat(this.age, " years old."));
    };
    return Sporter;
}());
// Derived Class 1
var Skier = /** @class */ (function (_super) {
    __extends(Skier, _super);
    function Skier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Skier.prototype.material = function () {
        console.log("".concat(this.name, " as a ").concat(this.profession, ", uses skiing gear."));
    };
    Skier.prototype.sportArea = function () {
        console.log("".concat(this.name, " as a ").concat(this.profession, ", skates on the ski slope."));
    };
    return Skier;
}(Sporter));
// Derived Class 2
var TennisPlayer = /** @class */ (function (_super) {
    __extends(TennisPlayer, _super);
    function TennisPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TennisPlayer.prototype.material = function () {
        console.log("".concat(this.name, " as a ").concat(this.profession, ", uses a racket and a tennis ball."));
    };
    TennisPlayer.prototype.sportArea = function () {
        console.log("".concat(this.name, " as a ").concat(this.profession, ", plays tennis on tennis court."));
    };
    return TennisPlayer;
}(Sporter));
// Derived Class 3
var Basketballer = /** @class */ (function (_super) {
    __extends(Basketballer, _super);
    function Basketballer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Basketballer.prototype.material = function () {
        console.log("".concat(this.name, " as a ").concat(this.profession, ", uses a basket ball and hoop."));
    };
    Basketballer.prototype.sportArea = function () {
        console.log("".concat(this.name, " as a ").concat(this.profession, ", plays basketboll on basketball field."));
    };
    return Basketballer;
}(Sporter));
// Derived Class 4
var Puncher = /** @class */ (function (_super) {
    __extends(Puncher, _super);
    function Puncher() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Puncher.prototype.material = function () {
        console.log("".concat(this.name, " as a ").concat(this.profession, ", uses a boxing glove and headguard."));
    };
    Puncher.prototype.sportArea = function () {
        console.log("".concat(this.name, " as a ").concat(this.profession, ", plays box on boxing ring."));
    };
    return Puncher;
}(Sporter));
//Skier
var skier = new Skier("Nihan", 26, "Skier");
skier.diet();
skier.practice();
skier.informationsAboutSporter();
skier.material();
skier.sportArea();
//Tennis Player
var tennisPlayer = new TennisPlayer("Ayşe", 24, "Tennis player");
tennisPlayer.informationsAboutSporter();
tennisPlayer.material();
tennisPlayer.sportArea();
//Basketball Player
var basketPlayer = new Basketballer("Fatma", 23, "Basketball player");
basketPlayer.informationsAboutSporter();
basketPlayer.material();
basketPlayer.sportArea();
//Puncher
var puncher = new Puncher("Merve", 25, "Puncher");
puncher.informationsAboutSporter();
puncher.material();
puncher.sportArea();
