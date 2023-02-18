class SalaryCalculate {
  public getSalary(a: number, b: number): number;
  public getSalary(a: string, b: string): string;

  public getSalary(a: any, b: any): number | string {
    if (typeof a == "number") {
      return 5;
    }
    return "salary";
  }
}
var calculate = new SalaryCalculate();
console.log(calculate.getSalary(1, 2));
console.log(calculate.getSalary("ahmet", "mehmet"));
