let price: number = 20;
let price2: number = 20.44;
let name2: string = "ahmet";
let isShow: boolean = true;
let products: null = null;
let product: undefined = undefined;
let price3: any = 24;
price3.toFixed();
let price4: unknown = 30;
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["ahmet", "mehmet", "hasan"];
let productList: Array<string | number> = ["kalem", "defter", "silgi", 23];
let value1: string | boolean = true;
let tuple: [string, number] = ["a", 3];

function calculate(a: number, b: number): [number, number, number] {
  return [a + b, a * b, a - b];
}
class Result {
  toplama: number;
  cikarma: number;
  carpma: number;
}

function calculate2(a: number, b: number): Result {
  var result = new Result();
  result.toplama = a + b;
  result.cikarma = a - b;
  result.carpma = a * b;
  return result;
}

console.log(`toplam :${calculate(3, 3)[0]}`);
console.log(`çarpım :${calculate(3, 3)[1]}`);
console.log(`çıkarma :${calculate(3, 3)[2]}`);

//for
for (let index = 0; index < names.length; index++) {
  const element = names[index];
  console.log(element);
}
//class type
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
    console.log(`${this.name} ${this.surName} ${this.age}`);
  }
}

//Generic Class

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
    console.log(`${this.name} ${this.surName} ${this.age}`);
  }
}

var student1 = new Student("ahmet", "yıldız", 25);
var student2 = new StudentGeneric<string>("mehmet", "Dertli", 23);
//var student2 = new Student(); // throw error
student1.show();
student2.show();

//Enum
enum Color {
  Red = 100,
  Green = 200,
  Blue = 300,
}
enum Gender {
  Kadın,
  Erkek,
}
var color: Color = Color.Red;
console.log(color);
console.log(Color[color]);

//function
function Add(a: number, b: number): number {
  // console.log(a + b);
  return a + b;
}

// generic function
function GenericAdd<T1, T2, T3>(a: T1, b: T2): T3 {
  // ahmet mehmet => ahmetmehmet
  //  3,5=> 8;
  let sum = (a as number) + (b as number);
  //console.log(sum);

  //console.log(`${a} ${b}`)
  return sum as T3;
}

console.log(`Generic Add :${GenericAdd<number, number, number>(2, 5)}`);
// interfaces
interface IPerson {
  name: string;
  age: number;
  calculate(): void;
  show(id: string, name: string): number;
}

let person: IPerson = {
  name: "ahmet",
  age: 23,
  calculate: function () {},
  show: function (id, name) {
    return 5;
  },
};

class Person implements IPerson {
  name: string;
  age: number;

  birthDate: Date;
  calculate(): void {
    throw new Error("Method not implemented.");
  }
  show(id: string, name: string): number {
    throw new Error("Method not implemented.");
  }
}
var p1 = new Person();
p1.age = 20;
p1.name = "ahmet";
p1.birthDate = new Date();

let person2: IPerson = p1;

(person2 as Person).birthDate;

interface IProduct {
  id: number;
  name: string;
  price: number;
}

var product5: IProduct = { id: 1, name: "kalem", price: 3000 };
var product6: IProduct = { id: 1, name: "kalem", price: 3000 };
