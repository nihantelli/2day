//Base Class
class Furniture {
  //Common properties
  color: string;
  weight: number;
  length: number;
  height: number;
  constructor(color: string, weight: number, length: number, height: number) {
    this.color = color;
    this.weight = weight;
    this.length = length;
    this.height = height;
  }
  //Common method
  target(): string {
    return "It used at home decorator.";
  }
}
//Derived Class 1
class Sofa extends Furniture {
  pillow: boolean;
  constructor(
    color: string,
    weight: number,
    length: number,
    height: number,
    pillow: boolean
  ) {
    //adding uniq properties to this class
    super(color, weight, height, length);
    this.pillow = pillow;
  }
  usageArea(): string {
    return "Sofa used at living room.";
  }
}
//Derived Class 2
class Table extends Furniture {
  eatOn: boolean;
  constructor(
    color: string,
    weight: number,
    length: number,
    height: number,
    eatOn: boolean
  ) {
    //adding uniq properties to this class
    super(color, weight, height, length);
    this.eatOn = eatOn;
  }
  usageArea(): string {
    return "Table used at kitchen.";
  }
}
//Derived Class 3
class Wardrobe extends Furniture {
  shelf: boolean;
  constructor(
    color: string,
    weight: number,
    length: number,
    height: number,
    shelf: boolean
  ) {
    //adding uniq properties to this class
    super(color, weight, height, length);
    this.shelf = shelf;
  }
  usageArea(): string {
    return "Wardrobe used at bedroom.";
  }
}
//SOFA
let sofa = new Sofa("red", 15, 2, 1, true);
console.log(
  `PROPERTIES OF SOFA/ color: ${sofa.color}. weight: ${sofa.weight}kg. lenght: ${sofa.length}m. height: ${sofa.height}m. having of pillow: ${sofa.pillow}.`
);
console.log(`Common property of furnitures: ${sofa.target()}.`);
console.log(sofa.usageArea());

//TABLE
let table = new Table("yellow", 5, 2, 1, true);
console.log(
  `PROPERTIES OF TABLE/ color: ${table.color}. weight: ${table.weight}kg. lenght: ${table.length}m. height: ${table.height}m. ability to eat on: ${table.eatOn}.`
);
console.log(`Common property of furnitures: ${table.target()}.`);
console.log(table.usageArea());

//WARDROBE
let wardrobe = new Wardrobe("blue", 20, 2, 3, true);
console.log(
  `PROPERTIES OF WARDROBE/ color: ${wardrobe.color}. weight: ${wardrobe.weight}kg. lenght: ${wardrobe.length}m. height: ${wardrobe.height}m. having of shelf: ${wardrobe.shelf}.`
);
console.log(`Common property of furnitures: ${wardrobe.target()}.`);
console.log(wardrobe.usageArea());
