//Defining interfaces which has different methods
interface IBoot {
  boot(): void;
}
interface IJumper {
  jumper(color: string): void;
}
interface ITrousers {
  trousers(): void;
}
interface IWatchMovie {
  watch(movie: string): void;
}
interface IShopping {
  goshopping(): void;
}
interface IDrink {
  drinking(drink: string): void;
}
//Defining classes that implement the needed interfaces.
class Person1 implements IBoot, IJumper, IWatchMovie {
  boot(): void {
    console.log("Person1 prefers to wear boots.");
  }
  jumper(color: string): void {
    console.log(`Person1 prefers to wear ${color} jumper.`);
  }
  watch(movie: string): void {
    console.log(`Person1 prefers to watch ${movie}.`);
  }
}
class Person2 implements IJumper, IShopping {
  jumper(color: string): void {
    console.log(`Person2 prefers to wear ${color} jumper.`);
  }
  goshopping(): void {
    console.log("Person2 prefers to go shopping.");
  }
}
class Person3 implements IDrink, IWatchMovie, ITrousers {
  drinking(drink: string): void {
    console.log(`Person3 prefers to drink ${drink}`);
  }
  watch(movie: string): void {
    console.log(`Person3 prefers to watch ${movie}.`);
  }
  trousers(): void {
    console.log("Person3 prefers to wear trousers.");
  }
}
//To see outputs
let person1 = new Person1();
person1.boot();
person1.jumper("red");
person1.watch("Titanic");
let person2 = new Person2();
person2.goshopping();
person2.jumper("blue");
let person3 = new Person3();
person3.drinking("coffee");
person3.watch("Fight Club");
