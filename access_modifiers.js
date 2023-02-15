//public private protected
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.method1 = function () { };
    Object.defineProperty(A.prototype, "count2", {
        get: function () {
            return this._count2;
        },
        set: function (a) {
            if (a > 50 && a < 250) {
                this._count2 = a;
            }
            else {
                throw new Error("deger 50 ile 250 arasında olmalıdır");
            }
        },
        enumerable: false,
        configurable: true
    });
    A.prototype.SetCount = function (number) {
        if (number > 1 && number < 100) {
            this._count = number;
        }
        else {
            throw new Error("deger 1 ile 100 arasında olmalıdır");
        }
    };
    A.prototype.GetCount = function () {
        console.log(this._count);
    };
    return A;
}());
//1.yöntem
var a1 = new A();
a1.method1();
a1.SetCount(50);
a1.GetCount();
//2.yöntem
var a2 = new A();
a2.count2 = 300;
console.log(a2.count2);
