//depencency ınversion principle
//inversion of control principle
var B = /** @class */ (function () {
    function B() {
    }
    B.prototype.method1 = function () {
        return 10;
    };
    B.prototype.method2 = function () { };
    B.prototype.method3 = function () { };
    B.prototype.method4 = function () { };
    B.prototype.method5 = function () { };
    return B;
}());
var Btype2 = /** @class */ (function () {
    function Btype2() {
    }
    Btype2.prototype.method1 = function () {
        return 20;
    };
    Btype2.prototype.method2 = function () {
        throw new Error("method not implemented");
    };
    return Btype2;
}());
var A = /** @class */ (function () {
    function A(b) {
        this.b = b;
    }
    A.prototype.method1 = function () {
        return this.b.method1() + 10;
    };
    return A;
}());
var a = new A(new Btype2());
//NEW İLE TANIMLAMAMAK İÇİN İNVERSİON OF CONTROL DEVREYE GİRİYOR.
// class A {
//   method1(): number {
//     let b: IB = new B();
//     return b.method1() + 10;
//   }
// }
