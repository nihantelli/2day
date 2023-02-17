class CarService {
  _car: ICar;
  constructor(_car: ICar) {
    this._car = _car;
  }
  addCar(data: string) {
    this._car.getToCar(data);
  }
}
interface ICar {
  getToCar(data: string);
}
class carRepository implements ICar {
  getToCar(data: string) {
    console.log("CAR REPOSITORYE ULAŞILDI");
  }
}
class carRepositoryFromSQL implements ICar {
  getToCar(data: string) {
    console.log("CAR REPOSITORY SQLE ULAŞILDI");
  }
}
let carservice = new CarService(new carRepository());
console.log(carservice.addCar("volvo"));
