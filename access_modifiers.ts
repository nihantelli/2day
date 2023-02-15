//public private protected
class A {
  private name: string; //nesne örneği üzerinden erişim yok
  method1(): void {}
  protected age: number; //nesne örneği üzerinden erişim yok
  private _count: number;
  private _count2: number;
  get count2() {
    return this._count2;
  }
  set count2(a: number) {
    if (a > 50 && a < 250) {
      this._count2 = a;
    } else {
      throw new Error("deger 50 ile 250 arasında olmalıdır");
    }
  }
  SetCount(number: number) {
    if (number > 1 && number < 100) {
      this._count = number;
    } else {
      throw new Error("deger 1 ile 100 arasında olmalıdır");
    }
  }
  GetCount() {
    console.log(this._count);
  }
}
//1.yöntem
var a1 = new A();
a1.method1();
a1.SetCount(50);
a1.GetCount();
//2.yöntem
var a2 = new A();
a2.count2 = 300;
console.log(a2.count2);
