//Defining interfaces which has different methods
interface ICooking {
  bestCooking(): void;
}
interface ITravel {
  travelingWorld(): void;
}
interface IFashion {
  fashionNews(): void;
}
interface IArt {
  makingArt(): void;
}
//Defining classes that implement the needed interfaces.
class Channel1 implements ICooking, IArt {
  bestCooking(): void {
    console.log("Channel1 has some cooking videos.");
  }
  makingArt(): void {
    console.log("Channel1 has some art videos.");
  }
}
class Channel2 implements ITravel, IFashion {
  travelingWorld(): void {
    console.log("Channel2 has some traveling videos.");
  }
  fashionNews(): void {
    console.log("Channel2 has some fashion videos.");
  }
}
class Channel3 implements IFashion {
  fashionNews(): void {
    console.log("Channel3 has some fashion videos.");
  }
}
class Channel4 implements IArt, ICooking, IFashion, ITravel {
  makingArt(): void {
    console.log("Channel4 has some art videos.");
  }
  bestCooking(): void {
    console.log("Channel4 has some cooking videos.");
  }
  fashionNews(): void {
    console.log("Channel4 has some fashion videos.");
  }
  travelingWorld(): void {
    console.log("Channel4 has some traveling videos.");
  }
}
//To see outputs
let chanel1 = new Channel1();
chanel1.bestCooking();
chanel1.makingArt();

let chanel2 = new Channel2();
chanel2.fashionNews();
chanel2.travelingWorld();
let chanel3 = new Channel3();
chanel3.fashionNews();
let chanel4 = new Channel4();
chanel4.bestCooking();
chanel4.fashionNews();
chanel4.makingArt();
chanel4.travelingWorld();
