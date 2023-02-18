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
//Bad
// console.log(`high ${ salaryCalculate.CalculateBad(1000,SalaryType.High)}`)
// console.log(`low ${ salaryCalculate.CalculateBad(1000,SalaryType.Low)}`)
//Good

interface ISalaryKeyValue {
  salaryType: SalaryType;
  SalaryCalculate: ISalaryCalculate;
}

let externalSalaryType = SalaryType.High;
let externalSalary = 2000;

let salaryArray: ISalaryKeyValue[] = [];

salaryArray.push({
  salaryType: SalaryType.High,
  SalaryCalculate: new HighSalaryCalculate(),
});
salaryArray.push({
  salaryType: SalaryType.Mid,
  SalaryCalculate: new MidSalaryCalculate(),
});
salaryArray.push({
  salaryType: SalaryType.Low,
  SalaryCalculate: new LowSalaryCalculate(),
});

let currentSalaryCalculate = salaryArray.find(
  (x) => x.salaryType == externalSalaryType
);
console.log(currentSalaryCalculate?.SalaryCalculate.calculate(externalSalary));

// console.log(`high ${ salaryCalculate.calculateGood(1000,new HighSalaryCalculate())}`)
// console.log(`low ${ salaryCalculate.calculateGood(1000,new LowSalaryCalculate())}`)
// console.log(`mid ${ salaryCalculate.calculateGood(1000,new MidSalaryCalculate())}`)
