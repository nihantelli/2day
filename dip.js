//Main class that takes parameter.
var Payment = /** @class */ (function () {
    function Payment(payment) {
        this.payment = payment;
    }
    Payment.prototype.pay = function (productsArray) {
        this.payment.getPay(productsArray);
    };
    return Payment;
}());
//Classes that hold payment methods.
var CashPayment = /** @class */ (function () {
    function CashPayment() {
    }
    CashPayment.prototype.getPay = function (productsArray) {
        productsArray.forEach(function (x) {
            return console.log("".concat(x.product, " received as a result of cash payment."));
        });
    };
    return CashPayment;
}());
var CardPayment = /** @class */ (function () {
    function CardPayment() {
    }
    CardPayment.prototype.getPay = function (productsArray) {
        productsArray.forEach(function (x) {
            return console.log("".concat(x.product, " received as a result of card payment."));
        });
    };
    return CardPayment;
}());
var CriptoPayment = /** @class */ (function () {
    function CriptoPayment() {
    }
    CriptoPayment.prototype.getPay = function (productsArray) {
        productsArray.forEach(function (x) {
            return console.log("".concat(x.product, " received as a result of cripto payment."));
        });
    };
    return CriptoPayment;
}());
//Creating product array.
var productsArray = [];
productsArray.push({ product: "Book1" });
productsArray.push({ product: "Book2" });
productsArray.push({ product: "Book3" });
productsArray.push({ product: "Book4" });
productsArray.push({ product: "Book5" });
//Sending as parameter instead of creating in class to reduce dependency.
var paymentCard = new Payment(new CardPayment());
paymentCard.pay(productsArray);
var paymentCash = new Payment(new CashPayment());
paymentCash.pay(productsArray);
var paymentCripto = new Payment(new CriptoPayment());
paymentCash.pay(productsArray);
