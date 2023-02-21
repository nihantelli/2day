var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Room parts types which implements interfaces
var WallPart = /** @class */ (function () {
    function WallPart() {
    }
    WallPart.prototype.wall = function () {
        console.log("It is a wall type 1.");
    };
    return WallPart;
}());
var WallPart2 = /** @class */ (function () {
    function WallPart2() {
    }
    WallPart2.prototype.wall = function () {
        console.log("It is a wall type 2.");
    };
    return WallPart2;
}());
var WindowPart = /** @class */ (function () {
    function WindowPart() {
    }
    WindowPart.prototype.window = function () {
        console.log("It is a window type 1.");
    };
    return WindowPart;
}());
var WindowPart2 = /** @class */ (function () {
    function WindowPart2() {
    }
    WindowPart2.prototype.window = function () {
        console.log("It is a window type 2.");
    };
    return WindowPart2;
}());
var WindowPart3 = /** @class */ (function () {
    function WindowPart3() {
    }
    WindowPart3.prototype.window = function () {
        console.log("It is a window type 3.");
    };
    return WindowPart3;
}());
var DoorPart = /** @class */ (function () {
    function DoorPart() {
    }
    DoorPart.prototype.door = function () {
        console.log("It is a door type 1.");
    };
    return DoorPart;
}());
var DoorPart2 = /** @class */ (function () {
    function DoorPart2() {
    }
    DoorPart2.prototype.door = function () {
        console.log("It is a door type 2.");
    };
    return DoorPart2;
}());
var FloorPart = /** @class */ (function () {
    function FloorPart() {
    }
    FloorPart.prototype.floor = function () {
        console.log("It is a floor type 1.");
    };
    return FloorPart;
}());
var FloorPart2 = /** @class */ (function () {
    function FloorPart2() {
    }
    FloorPart2.prototype.floor = function () {
        console.log("It is a floor type 2.");
    };
    return FloorPart2;
}());
//Base class
var Room = /** @class */ (function () {
    function Room(wall, window, door, floor) {
        this.wall = wall;
        this.window = window;
        this.door = door;
        this.floor = floor;
    }
    //Methods
    Room.prototype.WhichPart = function (wall, window, door, floor) {
        this.wall = wall;
        this.window = window;
        this.door = door;
        this.floor = floor;
    };
    Room.prototype.Wall = function () {
        this.wall.wall();
    };
    Room.prototype.Window = function () {
        this.window.window();
    };
    Room.prototype.Door = function () {
        this.door.door();
    };
    Room.prototype.Floor = function () {
        this.floor.floor();
    };
    return Room;
}());
// Derived Class
var Room1 = /** @class */ (function (_super) {
    __extends(Room1, _super);
    function Room1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Room1;
}(Room));
//room1 object from Room1 Class
var room1 = new Room1(new WallPart2(), new WindowPart(), new DoorPart(), new FloorPart2());
//See the outputs
room1.Wall();
room1.Window();
room1.Door();
room1.Floor();
//Changing with parameters
room1.WhichPart(new WallPart(), new WindowPart3(), new DoorPart2(), new FloorPart());
//After sending parameters to WhichPart
room1.Wall();
room1.Window();
room1.Door();
room1.Floor();
