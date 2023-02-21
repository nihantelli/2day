var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Base class
var Student = /** @class */ (function () {
    function Student() {
        this.totalDayofSemester = 200;
    }
    Student.prototype.compulsoryAttendance = function () {
        return this.totalDayofSemester - 7;
    };
    Student.prototype.informationofStudents = function () {
        return "Informations about ".concat(this.department, " student: Name:").concat(this.name, " Age:").concat(this.age, " Student Number: ").concat(this.studentNumber, " Total Day Number Of Education: ").concat(this.totalDayofSemester, ".");
    };
    return Student;
}());
//Derived classes
//Compulsory attendance for departments
var SoftwareEngineeringStudent = /** @class */ (function (_super) {
    __extends(SoftwareEngineeringStudent, _super);
    function SoftwareEngineeringStudent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SoftwareEngineeringStudent.prototype.compulsoryAttendance = function () {
        var absentFromSchool = _super.prototype.compulsoryAttendance.call(this);
        return absentFromSchool + 2;
    };
    return SoftwareEngineeringStudent;
}(Student));
var MedicineStudent = /** @class */ (function (_super) {
    __extends(MedicineStudent, _super);
    function MedicineStudent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MedicineStudent.prototype.compulsoryAttendance = function () {
        var absentFromSchool = _super.prototype.compulsoryAttendance.call(this);
        return absentFromSchool + this.extraDay + 5;
    };
    return MedicineStudent;
}(Student));
var ArchitectureStudent = /** @class */ (function (_super) {
    __extends(ArchitectureStudent, _super);
    function ArchitectureStudent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ArchitectureStudent.prototype.compulsoryAttendance = function () {
        var absentFromSchool = _super.prototype.compulsoryAttendance.call(this);
        return absentFromSchool + 3;
    };
    return ArchitectureStudent;
}(Student));
//Compulsory attendance for software engineer students
var softwareStudents = new SoftwareEngineeringStudent();
softwareStudents.name = "Nihan";
softwareStudents.age = 26;
softwareStudents.studentNumber = 1;
softwareStudents.department = "Software";
console.log(softwareStudents.informationofStudents());
console.log("Attendance requirement for software engineer students:".concat(softwareStudents.compulsoryAttendance(), " days."));
//Compulsory attendance for medicine students
var medicineStudents = new MedicineStudent();
medicineStudents.name = "Ayşe";
medicineStudents.age = 24;
medicineStudents.studentNumber = 2;
medicineStudents.extraDay = 1;
medicineStudents.department = "Medicine";
medicineStudents.favouriteColor = "red";
console.log(medicineStudents.informationofStudents());
console.log("Attendance requirement for medicine students:".concat(medicineStudents.compulsoryAttendance(), " days."));
//Compulsory attendance for architecture students
var architectureStudents = new ArchitectureStudent();
architectureStudents.name = "Fatma";
architectureStudents.age = 24;
architectureStudents.studentNumber = 3;
architectureStudents.department = "Architecture";
console.log(architectureStudents.informationofStudents());
console.log("Attendance requirement for architecture students:".concat(architectureStudents.compulsoryAttendance(), " days."));
// Creating base student
var baseStudent = softwareStudents;
console.log("Attendance requirement for base software students:".concat(baseStudent.compulsoryAttendance(), " days."));
baseStudent = medicineStudents;
//(baseStudent as MedicineStudent) = because code reading from left to right
console.log("Favourite color of base medicine students:".concat(baseStudent.favouriteColor, "."));
