var SalaryType;
(function (SalaryType) {
  SalaryType[(SalaryType["High"] = 0)] = "High";
  SalaryType[(SalaryType["Mid"] = 1)] = "Mid";
  SalaryType[(SalaryType["Low"] = 2)] = "Low";
})(SalaryType || (SalaryType = {}));
class HighSalaryCalculate {
  calculate(salary) {
    return salary * 10;
  }
}
class LowSalaryCalculate {
  calculate(salary) {
    return salary * 5;
  }
}
class MidSalaryCalculate {
  calculate(salary) {
    return salary * 7;
  }
}
class SalaryCalculate {
  calculateGood(salary, salaryCalculate) {
    return salaryCalculate.calculate(salary);
  }
  CalculateBad(salary, salaryType) {
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
let externalSalaryType;
let externalsalary = 2000;
let salaryArray = []; //tuple nesnesi, key ve valuesi var
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
console.log(
  currentSalaryCalculate === null || currentSalaryCalculate === void 0
    ? void 0
    : currentSalaryCalculate.salaryCalculate.calculate(externalsalary)
);
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
