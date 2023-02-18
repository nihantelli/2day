var Product;
(function (Product) {
    var A = /** @class */ (function () {
        function A() {
        }
        A.prototype.method1 = function () { };
        return A;
    }());
    Product.A = A;
    var B = /** @class */ (function () {
        function B() {
        }
        B.prototype.method2 = function () { };
        return B;
    }());
    var enumType;
    (function (enumType) {
    })(enumType = Product.enumType || (Product.enumType = {}));
})(Product || (Product = {}));
