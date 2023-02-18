function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
var add_anonymous = function (a, b) {
    return a + b;
};
add_anonymous(5, 6);
var add_anonymous_type_2 = function (a, b) {
    return a + b;
};
//birden fazla satır varsa { } kullanılır ve return kelimesi şarttır.
var add_anonymous_type_3 = function (a, b) { return a + b; };
var add_anonymous_type_4 = function () { return console.log("boş method"); };
function add2() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var sum = 0;
    a.forEach(function (x) {
        sum += x;
    });
    return sum;
}
function add3(x, y) {
    var a = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        a[_i - 2] = arguments[_i];
    }
    var sum = 0;
    a.forEach(function (x) {
        sum += x;
    });
    return sum;
}
function calculate(a, b, c) {
    if (c === void 0) { c = 6; }
    return a + b + c;
}
calculate(2, 4);
calculate(2, 4, 10);
console.log(add2(2, 3, 4, 5));
