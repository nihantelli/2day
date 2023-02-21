namespace isA {
  //Base class
  abstract class House {
    structure(type: string): void {
      console.log(`${type} have a structural system.`);
    }
    inHouse(type: string): void {
      console.log(`${type} have at least one kitchen, one bathroom, one room.`);
    }

    abstract garden(): void;
    abstract security(): void;
    abstract floor(): void;
  }
  //Derived class 1 - defining different methods
  class Residence extends House {
    garden(): void {
      console.log("Residence flats doesn't have a garden.");
    }
    security(): void {
      console.log("Residence flats have a security system.");
    }
    floor(): void {
      console.log("Residence are high-rise buildings.");
    }
  }
  //Derived class 2 - defining different methods
  class DetachedHouse extends House {
    garden(): void {
      console.log("Detached houses have a private garden.");
    }
    security(): void {
      console.log("Detached houses generally have a security system.");
    }
    floor(): void {
      console.log("Detached houses are low-rise buildings.");
    }
  }
  //Derived class 3 - defining different methods
  class Apartment extends House {
    garden(): void {
      console.log("Apartments don't have a private garden.");
    }
    security(): void {
      console.log("Apartments generally don't have a security system.");
    }
    floor(): void {
      console.log("Apartments are mid-rise buildings.");
    }
  }
  //Residence House
  let residenceFlat = new Residence();
  residenceFlat.structure("Residences");
  residenceFlat.inHouse("Residences");
  residenceFlat.garden();
  residenceFlat.security();
  residenceFlat.floor();
  //Detached House
  let detachedHouse = new DetachedHouse();
  detachedHouse.structure("Detached houses");
  detachedHouse.inHouse("Detached houses");
  detachedHouse.garden();
  detachedHouse.security();
  detachedHouse.floor();
  //Apartment
  let apartment = new Apartment();
  apartment.structure("Apartments");
  apartment.inHouse("Apartments");
  apartment.garden();
  apartment.security();
  apartment.floor();
}
