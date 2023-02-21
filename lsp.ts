//Base class
class Broom {
  sweep() {
    console.log("Every broom types used for sweep.");
  }
  electricity() {
    console.log("Every broom type works with electricity.");
  }
}
//Defining interfaces for each broom type that have different properties.
interface IDysonV15 {
  laser(): void;
  extraWasteBox(): void;
}
interface IDysonV12 {
  laser(): void;
  lightness(): void;
}
interface IDysonV10 {
  petHead(): void;
}
//Derived classes that implements interfaces as different properties.
class DysonV15 extends Broom implements IDysonV15 {
  laser(): void {
    console.log("DysonV15 has laser light head that reveals microscopic dust.");
  }
  extraWasteBox(): void {
    console.log("DysonV15 has a 3x waste container");
  }
}
class DysonV12 extends Broom implements IDysonV12 {
  laser(): void {
    console.log("DysonV12 has laser light head that reveals microscopic dust.");
  }
  lightness(): void {
    console.log("DysonV12 lightness makes it easy to sweep.");
  }
}
class DysonV10 extends Broom implements IDysonV10 {
  petHead(): void {
    console.log("DysonV10 has a special head for cleaning the hair of pets.");
  }
}
// 1.way
let dysonv15 = new DysonV15();
dysonv15.electricity();
dysonv15.sweep();
dysonv15.extraWasteBox();
dysonv15.laser();
let dysonv12 = new DysonV12();
dysonv12.laser();
dysonv12.lightness();
let dysonv10 = new DysonV10();
dysonv10.petHead();

//2.way with creating base broom
let baseBroom: Broom;
baseBroom = new DysonV15();
baseBroom.electricity();
baseBroom.sweep();
(baseBroom as DysonV15).laser();
(baseBroom as DysonV15).extraWasteBox();

baseBroom = new DysonV10();
//(baseBroom as DysonV10) for baseBroom to see DysonV10's methods.
(baseBroom as DysonV10).petHead();

baseBroom = new DysonV12();
(baseBroom as DysonV12).laser();
(baseBroom as DysonV12).lightness();
