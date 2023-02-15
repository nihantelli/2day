class Person {
  id: number;
  name: string;
  protected age: number;
  salary: number;
  constructor(name: string) {
    this.name = name;
  }
  show(): void {
    `${this.id}-${this.name}`;
  }
}
class JuniorDevPerson extends Person {
  constructor(id: number, name: string, age: number) {
    super(name); //basedeki constructora ulaşmak için
    this.id = id;
    this.age = age;
  }
}
var jun = new JuniorDevPerson(1, "NİHAN", 25);
console.log(jun);
class MidDevPerson extends Person {}
class SeniorDevPerson extends Person {}

var mid = new MidDevPerson("ahmet");
mid.name = "nihan";
console.log(mid);
