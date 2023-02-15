abstract class BasePerson {
  id: number;
  name: string;
  abstract show();
  abstract details(a: number);
}
class Person2 extends BasePerson {
  show() {
    console.log(`${this.id}${this.name}`);
  }
  details(a: number) {
    throw new Error("Method not implemented.");
  }
}
var p = new Person2();
p.id = 1;
p.name = "ahmet";
p.show;
