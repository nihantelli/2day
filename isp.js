//Defining classes that implement the needed interfaces.
var Channel1 = /** @class */ (function () {
    function Channel1() {
    }
    Channel1.prototype.bestCooking = function () {
        console.log("Channel1 has some cooking videos.");
    };
    Channel1.prototype.makingArt = function () {
        console.log("Channel1 has some art videos.");
    };
    return Channel1;
}());
var Channel2 = /** @class */ (function () {
    function Channel2() {
    }
    Channel2.prototype.travelingWorld = function () {
        console.log("Channel2 has some traveling videos.");
    };
    Channel2.prototype.fashionNews = function () {
        console.log("Channel2 has some fashion videos.");
    };
    return Channel2;
}());
var Channel3 = /** @class */ (function () {
    function Channel3() {
    }
    Channel3.prototype.fashionNews = function () {
        console.log("Channel3 has some fashion videos.");
    };
    return Channel3;
}());
var Channel4 = /** @class */ (function () {
    function Channel4() {
    }
    Channel4.prototype.makingArt = function () {
        console.log("Channel4 has some art videos.");
    };
    Channel4.prototype.bestCooking = function () {
        console.log("Channel4 has some cooking videos.");
    };
    Channel4.prototype.fashionNews = function () {
        console.log("Channel4 has some fashion videos.");
    };
    Channel4.prototype.travelingWorld = function () {
        console.log("Channel4 has some traveling videos.");
    };
    return Channel4;
}());
//To see outputs
var chanel1 = new Channel1();
chanel1.bestCooking();
chanel1.makingArt();
var chanel2 = new Channel2();
chanel2.fashionNews();
chanel2.travelingWorld();
var chanel3 = new Channel3();
chanel3.fashionNews();
var chanel4 = new Channel4();
chanel4.bestCooking();
chanel4.fashionNews();
chanel4.makingArt();
chanel4.travelingWorld();
