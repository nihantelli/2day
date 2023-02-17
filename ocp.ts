enum SalaryType {
  High,
  Mid,
  Low,
}
interface ISalaryCalculate {
  calculate(salary: number): number;
}
class HighSalaryCalculate implements ISalaryCalculate {
  calculate(salary: number): number {
    return salary * 10;
  }
}
class LowSalaryCalculate implements ISalaryCalculate {
  calculate(salary: number): number {
    return salary * 5;
  }
}
class MidSalaryCalculate implements ISalaryCalculate {
  calculate(salary: number): number {
    return salary * 7;
  }
}
class SalaryCalculate {
  calculateGood(salary: number, salaryCalculate: ISalaryCalculate) {
    return salaryCalculate.calculate(salary);
  }
  CalculateBad(salary: number, salaryType: SalaryType): number {
    let sumSalary = 0;
    switch (salaryType) {
      case SalaryType.High:
        sumSalary = salary * 10;
        break;
      case SalaryType.Low:
        sumSalary = salary * 5;
        break;
      default:
        break;
    }
    return sumSalary;
  }
}
var salaryCalculate = new SalaryCalculate();
//bad
console.log(`high ${salaryCalculate.CalculateBad(1000, SalaryType.High)}`);
console.log(`low ${salaryCalculate.CalculateBad(1000, SalaryType.Low)}`);
//good
interface ISalaryKeyValue {
  salaryType: SalaryType;
  salaryCalculate: ISalaryCalculate;
}
let externalSalaryType: SalaryType.High;
let externalsalary = 2000;
let salaryArray: ISalaryKeyValue[] = []; //tuple nesnesi, key ve valuesi var
salaryArray.push({
  salaryType: SalaryType.High,
  salaryCalculate: new HighSalaryCalculate(),
});
salaryArray.push({
  salaryType: SalaryType.Mid,
  salaryCalculate: new MidSalaryCalculate(),
});
salaryArray.push({
  salaryType: SalaryType.Low,
  salaryCalculate: new LowSalaryCalculate(),
});
let currentSalaryCalculate = salaryArray.find(
  (x) => x.salaryType == externalSalaryType
);
console.log(currentSalaryCalculate?.salaryCalculate.calculate(externalsalary));

console.log(
  `high ${salaryCalculate.calculateGood(1000, new HighSalaryCalculate())}`
);
//calculate gooda gönderilen parametre HighSalaryCalculate classından oluşan nesne. ve onun altındaki calculate methodunu çalıştırdık
console.log(
  `low ${salaryCalculate.calculateGood(1000, new LowSalaryCalculate())}`
);
console.log(
  `mid ${salaryCalculate.calculateGood(1000, new MidSalaryCalculate())}`
);
