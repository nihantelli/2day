interface IFoodAmount {
  calculate(weight: number): number;
}
//Defining dog type enum
enum DogType {
  Golden,
  Buldog,
  Yorkshire,
  Labrador,
}
//Classes which implements IFoodAmount
class GoldenRetriever implements IFoodAmount {
  calculate(weight: number): number {
    return weight / 500;
  }
}
class Buldog implements IFoodAmount {
  calculate(weight: number): number {
    return weight / 400;
  }
}
class Yorkshire implements IFoodAmount {
  calculate(weight: number): number {
    return weight / 400;
  }
}
class Labrador implements IFoodAmount {
  calculate(weight: number): number {
    return weight / 500;
  }
}
class NecessaryFoodAmount {
  calculateAmount(weight: number, foodAmount: IFoodAmount) {
    return foodAmount.calculate(weight);
  }
}
let necessaryFoodAmount = new NecessaryFoodAmount();
//Bad solution
//   calculateBad(weight: number, dogType: DogType): number {
//     let total = 0;
//     if (dogType == 0) {
//       total = weight / 500;
//     }
//     if (dogType == 1) {
//       total = weight / 400;
//     }
//     if (dogType == 2) {
//       total = weight / 400;
//     }
//     if (dogType == 3) {
//       total = weight / 500;
//     }
//     return total;
//   }

//Bad solution
// console.log(
//   `golden ${necessaryFoodAmount.calculateBad(20000, DogType.Golden)}`
// );
// console.log(
//   `buldog ${necessaryFoodAmount.calculateBad(20000, DogType.Buldog)}`
// );
// console.log(
//   `labrador ${necessaryFoodAmount.calculateBad(20000, DogType.Labrador)}`
// );
// console.log(
//   `yorkshire ${necessaryFoodAmount.calculateBad(20000, DogType.Yorkshire)}`
// );

// Interface definition for new objects to push amounArray
interface IAmount {
  dogType: DogType;
  necessaryFoodAmount: IFoodAmount;
}
//Defining empty array
let amountArray: IAmount[] = [];
let buldog = { dogType: DogType.Buldog, necessaryFoodAmount: new Buldog() };
let golden = {
  dogType: DogType.Golden,
  necessaryFoodAmount: new GoldenRetriever(),
};
let labrador = {
  dogType: DogType.Labrador,
  necessaryFoodAmount: new Labrador(),
};
let yorkshire = {
  dogType: DogType.Yorkshire,
  necessaryFoodAmount: new Yorkshire(),
};
//Creating an array
amountArray.push(buldog, golden, labrador, yorkshire);
//See the outputs
amountArray.forEach((x) =>
  console.log(
    `${
      DogType[x.dogType]
    } dogs should eat about ${x.necessaryFoodAmount.calculate(
      20000
    )}gr food per day.`
  )
);
//other way
// console.log(
//   `Buldogs should eat about ${necessaryFoodAmount.calculateAmount(
//     20000,
//     new Buldog()
//   )}gr food per day.`
// );
// console.log(
//   `Golden Retrievers should eat about ${necessaryFoodAmount.calculateAmount(
//     20000,
//     new GoldenRetriever()
//   )}gr food per day.`
// );
// console.log(
//   `Labrador Retrievers should eat about ${necessaryFoodAmount.calculateAmount(
//     20000,
//     new Labrador()
//   )}gr food per day.`
// );
// console.log(
//   `Yorkshires should eat about ${necessaryFoodAmount.calculateAmount(
//     20000,
//     new Yorkshire()
//   )}gr food per day.`
// );
