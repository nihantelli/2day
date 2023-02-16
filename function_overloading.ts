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
var calculate2 = new SalaryCalculate();
console.log(calculate2.getSalary(1, 2));
console.log(calculate2.getSalary("ahmet", "mehmet"));
