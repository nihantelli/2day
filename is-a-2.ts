abstract class Sporter {
  name: string;
  age: number;
  profession: string;
  constructor(name: string, age: number, profession: string) {
    this.name = name;
    this.age = age;
    this.profession = profession;
  }
  diet(): void {
    console.log("Every sporter diets for health.");
  }
  practice(): void {
    console.log("Every sporter makes practise to improve.");
  }
  informationsAboutSporter(): void {
    console.log(
      `${this.name} is a ${this.profession} and ${this.age} years old.`
    );
  }
  abstract material(): void;
  abstract sportArea(): void;
}
// Derived Class 1
class Skier extends Sporter {
  material(): void {
    console.log(`${this.name} as a ${this.profession}, uses skiing gear.`);
  }
  sportArea(): void {
    console.log(
      `${this.name} as a ${this.profession}, skates on the ski slope.`
    );
  }
}
// Derived Class 2
class TennisPlayer extends Sporter {
  material(): void {
    console.log(
      `${this.name} as a ${this.profession}, uses a racket and a tennis ball.`
    );
  }
  sportArea(): void {
    console.log(
      `${this.name} as a ${this.profession}, plays tennis on tennis court.`
    );
  }
}
// Derived Class 3
class Basketballer extends Sporter {
  material(): void {
    console.log(
      `${this.name} as a ${this.profession}, uses a basket ball and hoop.`
    );
  }
  sportArea(): void {
    console.log(
      `${this.name} as a ${this.profession}, plays basketboll on basketball field.`
    );
  }
}
// Derived Class 4
class Puncher extends Sporter {
  material(): void {
    console.log(
      `${this.name} as a ${this.profession}, uses a boxing glove and headguard.`
    );
  }
  sportArea(): void {
    console.log(
      `${this.name} as a ${this.profession}, plays box on boxing ring.`
    );
  }
}

//Skier
let skier = new Skier("Nihan", 26, "Skier");
skier.diet();
skier.practice();
skier.informationsAboutSporter();
skier.material();
skier.sportArea();
//Tennis Player
let tennisPlayer = new TennisPlayer("Ayşe", 24, "Tennis player");
tennisPlayer.informationsAboutSporter();
tennisPlayer.material();
tennisPlayer.sportArea();
//Basketball Player
let basketPlayer = new Basketballer("Fatma", 23, "Basketball player");
basketPlayer.informationsAboutSporter();
basketPlayer.material();
basketPlayer.sportArea();
//Puncher
let puncher = new Puncher("Merve", 25, "Puncher");
puncher.informationsAboutSporter();
puncher.material();
puncher.sportArea();
