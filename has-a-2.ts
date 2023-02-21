//Required interfaces
interface IWall {
  wall(): void;
}
interface IWindow {
  window(): void;
}
interface IDoor {
  door(): void;
}
interface IFloor {
  floor(): void;
}
// Room parts types which implements interfaces
class WallPart implements IWall {
  wall(): void {
    console.log("It is a wall type 1.");
  }
}
class WallPart2 implements IWall {
  wall(): void {
    console.log("It is a wall type 2.");
  }
}
class WindowPart implements IWindow {
  window(): void {
    console.log("It is a window type 1.");
  }
}
class WindowPart2 implements IWindow {
  window(): void {
    console.log("It is a window type 2.");
  }
}
class WindowPart3 implements IWindow {
  window(): void {
    console.log("It is a window type 3.");
  }
}
class DoorPart implements IDoor {
  door(): void {
    console.log("It is a door type 1.");
  }
}
class DoorPart2 implements IDoor {
  door(): void {
    console.log("It is a door type 2.");
  }
}
class FloorPart implements IFloor {
  floor(): void {
    console.log("It is a floor type 1.");
  }
}
class FloorPart2 implements IFloor {
  floor(): void {
    console.log("It is a floor type 2.");
  }
}
//Base class
abstract class Room {
  wall: IWall;
  window: IWindow;
  door: IDoor;
  floor: IFloor;
  constructor(wall: IWall, window: IWindow, door: IDoor, floor: IFloor) {
    this.wall = wall;
    this.window = window;
    this.door = door;
    this.floor = floor;
  }
  //Methods
  WhichPart(wall: IWall, window: IWindow, door: IDoor, floor: IFloor) {
    this.wall = wall;
    this.window = window;
    this.door = door;
    this.floor = floor;
  }
  Wall(): void {
    this.wall.wall();
  }
  Window(): void {
    this.window.window();
  }
  Door(): void {
    this.door.door();
  }
  Floor(): void {
    this.floor.floor();
  }
}
// Derived Class
class Room1 extends Room {}
//room1 object from Room1 Class
let room1 = new Room1(
  new WallPart2(),
  new WindowPart(),
  new DoorPart(),
  new FloorPart2()
);
//See the outputs
room1.Wall();
room1.Window();
room1.Door();
room1.Floor();
//Changing with parameters
room1.WhichPart(
  new WallPart(),
  new WindowPart3(),
  new DoorPart2(),
  new FloorPart()
);
//After sending parameters to WhichPart
room1.Wall();
room1.Window();
room1.Door();
room1.Floor();
