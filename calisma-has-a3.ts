interface FlyBehavior {
  Fly(): void;
}

interface RunBehavior {
  Run(): void;
}
class FlyType1 implements FlyBehavior {
  Fly(): void {
    console.log("fly type 1");
  }
}
class FlyType2 implements FlyBehavior {
  Fly(): void {
    console.log("fly type 2");
  }
}
class FlyType3 implements FlyBehavior {
  Fly(): void {
    console.log("fly type 3");
  }
}
class RunType1 implements RunBehavior {
  Run(): void {
    console.log("run type 1");
  }
}
class RunType2 implements RunBehavior {
  Run(): void {
    console.log("run type 2");
  }
}
class RunType3 implements RunBehavior {
  Run(): void {
    console.log("run type 3");
  }
}
abstract class Animal {
  public _flyBehavior: FlyBehavior;
  public _runBehavior: RunBehavior;
  constructor(flyBehavior: FlyBehavior, runBehavior: RunBehavior) {
    this._flyBehavior = flyBehavior;
    this._runBehavior = runBehavior;
  }
  SetRunOrFly(flyBehavior: FlyBehavior, runBehavior: RunBehavior) {
    this._flyBehavior = flyBehavior;
    this._runBehavior = runBehavior;
  }
  Run(): void {
    console.log("run");
  }
  Fly(): void {
    console.log("fly");
  }
}
class Animal1 extends Animal {}
class Animal2 extends Animal {}
class Animal3 extends Animal {}
let animal1 = new Animal1(new FlyType1(), new RunType1());
animal1.Fly();
animal1.Run();
animal1.SetRunOrFly(new FlyType1(), new RunType1());
animal1.Fly();
animal1.Run();
