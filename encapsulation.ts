class Hotel {
  public numOfFloor: number;
  public numOfClients: number;
  private numOfRooms: number;
  private averageAgeOfClients: number;
  setNumOfRooms(numOfRooms: number) {
    if (numOfRooms < 50) {
      console.log("The number of rooms can't be less than 50.");
      return;
    }
    this.numOfRooms = numOfRooms;
  }
  getNumOfRooms() {
    return `Total number of rooms : ${this.numOfRooms}.`;
  }
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

  setAverageAgeOfClients(averageAgeOfClients: number) {
    if (averageAgeOfClients < 18) {
      console.log("average ages of clients can't be less than 18.");
      return;
    }
    this.averageAgeOfClients = averageAgeOfClients;
  }
  getAverageAgeOfClients() {
    return `Average ages of clients : ${this.averageAgeOfClients}.`;
  }
  //2.way set-get
  // set averageAgeOfClient(averageAgeOfClients: number) {
  //   if (averageAgeOfClients < 18) {
  //     console.log("average ages of clients can't be less than 18.");
  //     return;
  //   }
  //   this.averageAgeOfClients = averageAgeOfClients;
  // }
  // get averageAgeOfClient() {
  //   return this.averageAgeOfClients;
  // }
}
let hotel = new Hotel();
hotel.numOfFloor = 5;
hotel.numOfClients = 200;
// access to public data directly
console.log(`Oteldeki toplam müşteri sayısı: ${hotel.numOfClients}.`);
console.log(`Oteldeki toplam oda sayısı: ${hotel.numOfFloor}.`);

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
