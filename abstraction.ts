//Base abstract class
abstract class Cat {
  //common properties
  type: string;
  name: string;
  weight: number;
  color: string;
  informationCats(): void {
    console.log(
      `Informations about this cat: Type: ${this.type} Name: ${this.name} Weight: ${this.weight}kg Color: ${this.color}.`
    );
  }
  abstract hereditaryDiseases(): void;
}
//Derived class 1
class Alley extends Cat {
  //fill in the abstract method derived from Cat
  hereditaryDiseases(): void {
    console.log(`${this.type} cats are less likely to get sick.`);
  }
}
//Derived class 2
class Scotish extends Cat {
  //fill in the abstract method derived from Cat
  hereditaryDiseases(): void {
    console.log(
      `${this.type} cats are experience discomfort in their bone structure.`
    );
  }
}
//Derived class 3
class British extends Cat {
  //fill in the abstract method derived from Cat
  hereditaryDiseases(): void {
    console.log(`${this.type} cats are suffer from digestive distress.`);
  }
}
//Derived class 4
class Persian extends Cat {
  //fill in the abstract method derived from Cat
  hereditaryDiseases(): void {
    console.log(`${this.type} cats experience inflammation of the eyes.`);
  }
}
//Alley Cat Definition
let alley_cat = new Alley();
alley_cat.color = "White";
alley_cat.name = "Milka";
alley_cat.type = "Alley";
alley_cat.weight = 5;
alley_cat.informationCats();
alley_cat.hereditaryDiseases();
//Scotish Cat Definition
let scotish_cat = new Scotish();
scotish_cat.color = "Coffee";
scotish_cat.name = "Leo";
scotish_cat.type = "Scotish";
scotish_cat.weight = 3;
scotish_cat.informationCats();
scotish_cat.hereditaryDiseases();
//British Cat Definition
let british_cat = new British();
british_cat.color = "Gray";
british_cat.name = "Smoke";
british_cat.type = "British";
british_cat.weight = 4;
british_cat.informationCats();
british_cat.hereditaryDiseases();
//Persian Cat Definition
let persian_cat = new Persian();
persian_cat.color = "White";
persian_cat.name = "Misha";
persian_cat.type = "Persian";
persian_cat.weight = 5;
persian_cat.informationCats();
persian_cat.hereditaryDiseases();
