var SalaryCalculate = /** @class */ (function () {
    function SalaryCalculate() {
    }
    SalaryCalculate.prototype.getSalary = function (a, b) {
        if (typeof a == "number") {
            return 5;
        }
        return "salary";
    };
    return SalaryCalculate;
}());
var calculate = new SalaryCalculate();
console.log(calculate.getSalary(1, 2));
console.log(calculate.getSalary("ahmet", "mehmet"));
