//Main class that takes parameter.
class Payment {
  payment: IPayment;
  constructor(payment: IPayment) {
    this.payment = payment;
  }
  pay(productsArray: IProduct[]) {
    this.payment.getPay(productsArray);
  }
}
interface IPayment {
  getPay(productsArray: IProduct[]);
}
//Classes that hold payment methods.
class CashPayment implements IPayment {
  getPay(productsArray: IProduct[]) {
    productsArray.forEach((x) =>
      console.log(`${x.product} received as a result of cash payment.`)
    );
  }
}
class CardPayment implements IPayment {
  getPay(productsArray: IProduct[]) {
    productsArray.forEach((x) =>
      console.log(`${x.product} received as a result of card payment.`)
    );
  }
}
class CriptoPayment implements IPayment {
  getPay(productsArray: IProduct[]) {
    productsArray.forEach((x) =>
      console.log(`${x.product} received as a result of cripto payment.`)
    );
  }
}
interface IProduct {
  product: string;
}
//Creating product array.
let productsArray: IProduct[] = [];
productsArray.push({ product: "Book1" });
productsArray.push({ product: "Book2" });
productsArray.push({ product: "Book3" });
productsArray.push({ product: "Book4" });
productsArray.push({ product: "Book5" });
//Sending as parameter instead of creating in class to reduce dependency.
let paymentCard = new Payment(new CardPayment());
paymentCard.pay(productsArray);
let paymentCash = new Payment(new CashPayment());
paymentCash.pay(productsArray);
let paymentCripto = new Payment(new CriptoPayment());
paymentCash.pay(productsArray);
