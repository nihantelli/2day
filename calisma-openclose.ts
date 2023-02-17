enum AgeType {
  Old,
  Mid,
  Young,
}
interface IAgeType {
  calculate(age: number): number;
}
class OldAgeFind implements IAgeType {
  calculate(age: number): number {
    return AgeType.Old;
  }
}
class MidAgeFind implements IAgeType {
  calculate(age: number): number {
    return AgeType.Mid;
  }
}
class YoungAgeFind implements IAgeType {
  calculate(age: number): number {
    return AgeType.Young;
  }
}
interface IKeyAgeValue {
  ageType: AgeType;
  ageCalculate: IAgeType;
}
let ageList = new Array();
ageList.push({
  ageType: AgeType.Old,
  ageCalculate: new OldAgeFind(),
});
ageList.push({
  ageType: AgeType.Mid,
  ageCalculate: new MidAgeFind(),
});
ageList.push({
  ageType: AgeType.Young,
  ageCalculate: new YoungAgeFind(),
});
let externalAgeType = AgeType.Old;
let currentAgeCalculate = ageList.find((x) => x.ageType == externalAgeType);
console.log(currentAgeCalculate.ageCalculate.calculate());
class AgeCalculate {
  calculateGood(age: number, ageType: IAgeType) {
    return ageType.calculate(age);
  }
  calculateAgeBad(age: number, ageType: AgeType): number {
    let sumAge = 0;
    if (ageType == AgeType.Old) {
      sumAge = AgeType.Old;
    }
    if (ageType == AgeType.Mid) {
      sumAge = AgeType.Mid;
    }
    if (ageType == AgeType.Young) {
      sumAge = AgeType.Young;
    }
    return sumAge;
  }
}
var ageCalculate = new AgeCalculate();
console.log(`high: ${ageCalculate.calculateGood(0, new OldAgeFind())}`);
console.log(`mid: ${ageCalculate.calculateGood(1, new MidAgeFind())}`);
console.log(`young: ${ageCalculate.calculateGood(2, new YoungAgeFind())}`);
