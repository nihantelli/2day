//depencency ınversion principle
//inversion of control principle
class B implements IB {
  method1(): number {
    return 10;
  }
  method2() {}
  method3() {}
  method4() {}
  method5() {}
}
class Btype2 implements IB {
  method1(): number {
    return 20;
  }
  method2() {
    throw new Error("method not implemented");
  }
}
interface IB {
  method1(): number;
  method2();
}
class A {
  b: IB;
  constructor(b: IB) {
    this.b = b;
  }
  method1(): number {
    return this.b.method1() + 10;
  }
}
var a: A = new A(new Btype2());
//NEW İLE TANIMLAMAMAK İÇİN İNVERSİON OF CONTROL DEVREYE GİRİYOR.
// class A {
//   method1(): number {
//     let b: IB = new B();
//     return b.method1() + 10;
//   }
// }
