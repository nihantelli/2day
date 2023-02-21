//Base class
class CoffeeMaker {
  makeCoffee() {
    console.log("Every coffee machine makes coffee.");
  }
}
//Defining interfaces for each coffee machine that have different properties.
interface IMachine1 {
  worksByPressing(): void;
}
interface IMachine2 {
  grindCoffee(): void;
}
interface IMachine3 {
  frothingMilk(): void;
}
//Derived classes that implements interfaces as different properties.
class Machine1 extends CoffeeMaker implements IMachine1 {
  worksByPressing(): void {
    console.log("Machine1 works by only pressing like frenchpress.");
  }
}
class Machine2 extends CoffeeMaker implements IMachine2 {
  grindCoffee(): void {
    console.log("Machine2 has the ability to grind bean coffee.");
  }
}
class Machine3 extends CoffeeMaker implements IMachine3 {
  frothingMilk(): void {
    console.log("Machine3 has the feature of foaming the milk in the chamber.");
  }
}
// 1.way
let machine1 = new Machine1();
machine1.makeCoffee();
machine1.worksByPressing();
let machine2 = new Machine2();
machine2.makeCoffee();
machine2.grindCoffee();
let machine3 = new Machine3();
machine3.makeCoffee();
machine3.frothingMilk();

//2.way with creating base machine
let baseMachine: CoffeeMaker;
baseMachine = new Machine1();
(baseMachine as Machine1).worksByPressing();

baseMachine = new Machine2();
(baseMachine as Machine2).grindCoffee();
baseMachine = new Machine3();
(baseMachine as Machine3).frothingMilk();
