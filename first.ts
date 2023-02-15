let price1: number = 20;
let price2: number = 20.45;
let name2: string = "ahmet";
let isShow: boolean = true;
let products: null = null;
let product: undefined = undefined;
let price3: any = { name: "ahmet" };
let price4: unknown = 30;
// hangi türdeyse ona göre fonksiyon çalışsın
// (price4 as number).toFixed();
// (price4 as string).concat("aaa");
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["ahmet", "mehmet", "hasan"];
let productList: Array<string> = ["kalem", "defter", "silgi"];
// arrayde başka tipler de olabilir anlamında, any kullanmasak iyi olur
let newList: Array<string | number> = ["kalem", "defter", "silgi"];
//fonksiyonlarda birden fazla değer dönmek için
let tuple: [string, number] = ["a", 3];
class Result {
  toplama: number;
  cikarma: number;
  carpma: number;
}
function calculate(a: number, b: number): [number, number, number] {
  return [a + b, a * b, a - b];
}
console.log(`toplam:${calculate(3, 3)[0]}`);
console.log(`çarpım:${calculate(3, 3)[1]}`);
console.log(`çıkarma:${calculate(3, 3)[2]}`);

function calculate2(a: number, b: number): Result {
  var result = new Result();
  result.toplama = a + b;
  result.cikarma = a - b;
  result.carpma = a * b;
  return result;
}

console.log(calculate2(4, 5));
//for
// for (let index = 0; index < names.length; index++) {
//   const element = names[index];
//   console.log(element);
// }
class Student {
  name: string;
  surName: string;
  age: number;
  constructor(name: string, surName: string, age: number) {
    this.name = name;
    this.surName = surName;
    this.age = age;
  }
  show() {
    console.log(`${this.name}${this.surName}${this.name}${this.age}`);
  }
}
var student1 = new Student("ahmet", "yıldız", 25);
console.log(student1.name);
console.log(student1.show());
//generic class
class StudentGeneric<T1> {
  name: T1;
  surName: string;
  age: number;
  constructor(name: string, surName: string, age: number) {
    (this.name as string) = name;
    this.surName = surName;
    this.age = age;
  }
  show() {
    console.log(`${this.name}${this.surName}${this.name}${this.age}`);
  }
}
var student2 = new StudentGeneric<string>("mehmet", "dertli", 23);

//Enum
enum Color {
  Red = 100,
  Green = 200,
  Blue = 300,
}
var color: Color = Color.Red;
console.log(color);
console.log(Color[color]);
//yukarıdaki gibi değer atamazsak 0-1-2-3-4 diye gider
enum Gender {
  Kadın,
  Erkek,
}
var value: Gender = Gender.Erkek;
console.log(value);
//function
function Add(a: number, b: number): number {
  return a + b;
}
//generic function
//alınacak değerin türünü <> belirttik. a,b değerleri bu türde olacak dedik.
function GenericAdd<T1, T2>(a: T1, b: T2): any {
  let sum = (a as number) + (b as number);
  console.log(sum);
  return sum;
}
GenericAdd<number, number>(2, 5);

// function GenericAdd<T1, T2,T3>(a: T1, b: T2): T3 {
//     let sum = (a as number) + (b as number);
//     console.log(sum);
//     return sum as T3;
//   }
//   GenericAdd<number, number, number>(2, 5);
//interface
interface IPerson {
  name: string;
  age: number;
  calculate(): void;
}
// somutlaştırma 1.yol, obje atadık
let person: IPerson = { name: "nihan", age: 23, calculate: function () {} };
console.log(person.name);
interface IProduct {
  id: number;
  name: string;
  price: number;
}
var product5: IProduct = { id: 1, name: "kalem", price: 2000 };
class Person implements IPerson {
  name: string;
  age: number;
  birthDate: Date;
  calculate(): void {
    throw new Error("method not implemented");
  }
  show(id: string, name: string): number {
    throw new Error("method notimplemented");
  }
}
// somutlaştırma 2.yol. implement yoluyla interfacein verilerini aldık. newle nesne oluşturduk
var p1 = new Person();
p1.age = 20;
p1.name = "ahmet";
p1.birthDate = new Date();

let person2: IPerson = p1;
(person2 as Person).birthDate;
