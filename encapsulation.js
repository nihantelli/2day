var Hotel = /** @class */ (function () {
    function Hotel() {
    }
    Hotel.prototype.setNumOfRooms = function (numOfRooms) {
        if (numOfRooms < 50) {
            console.log("The number of rooms can't be less than 50.");
            return;
        }
        this.numOfRooms = numOfRooms;
    };
    Hotel.prototype.getNumOfRooms = function () {
        return "Total number of rooms : ".concat(this.numOfRooms, ".");
    };
    // 2.way set-get
    // set numOfRoom(numOfRooms: number) {
    //   if (numOfRooms < 50) {
    //     console.log("The number of rooms can't be less than 50.");
    //     return;
    //   }
    //   this.numOfRooms = numOfRooms;
    // }
    // get numOfRoom() {
    //   return this.numOfRooms;
    // }
    Hotel.prototype.setAverageAgeOfClients = function (averageAgeOfClients) {
        if (averageAgeOfClients < 18) {
            console.log("average ages of clients can't be less than 18.");
            return;
        }
        this.averageAgeOfClients = averageAgeOfClients;
    };
    Hotel.prototype.getAverageAgeOfClients = function () {
        return "Average ages of clients : ".concat(this.averageAgeOfClients, ".");
    };
    return Hotel;
}());
var hotel = new Hotel();
hotel.numOfFloor = 5;
hotel.numOfClients = 200;
// access to public data directly
console.log("Oteldeki toplam m\u00FC\u015Fteri say\u0131s\u0131: ".concat(hotel.numOfClients, "."));
console.log("Oteldeki toplam oda say\u0131s\u0131: ".concat(hotel.numOfFloor, "."));
// access to private data with methods. not directly
//not access
hotel.setNumOfRooms(40);
//access
hotel.setNumOfRooms(60);
console.log(hotel.getNumOfRooms());
//not access
hotel.setAverageAgeOfClients(15);
//access
hotel.setAverageAgeOfClients(20);
console.log(hotel.getAverageAgeOfClients());
// 2.way set-get
// let hotel2 = new Hotel();
// hotel2.numOfRoom = 60;
// console.log(hotel2.numOfRoom);
// hotel2.averageAgeOfClient = 17;
// console.log(hotel2.averageAgeOfClient);
