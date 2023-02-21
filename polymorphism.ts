//Base class
class Student {
  name: string;
  age: number;
  department: string;
  studentNumber: number;
  totalDayofSemester: number = 200;

  compulsoryAttendance(): number {
    return this.totalDayofSemester - 7;
  }
  informationofStudents() {
    return `Informations about ${this.department} student: Name:${this.name} Age:${this.age} Student Number: ${this.studentNumber} Total Day Number Of Education: ${this.totalDayofSemester}.`;
  }
}
//Derived classes
//Compulsory attendance for departments
class SoftwareEngineeringStudent extends Student {
  compulsoryAttendance(): number {
    let absentFromSchool = super.compulsoryAttendance();
    return absentFromSchool + 2;
  }
}
class MedicineStudent extends Student {
  extraDay: number;
  favouriteColor: string;
  compulsoryAttendance(): number {
    let absentFromSchool = super.compulsoryAttendance();
    return absentFromSchool + this.extraDay + 5;
  }
}
class ArchitectureStudent extends Student {
  compulsoryAttendance(): number {
    let absentFromSchool = super.compulsoryAttendance();
    return absentFromSchool + 3;
  }
}
//Compulsory attendance for software engineer students
let softwareStudents = new SoftwareEngineeringStudent();
softwareStudents.name = "Nihan";
softwareStudents.age = 26;
softwareStudents.studentNumber = 1;
softwareStudents.department = "Software";
console.log(softwareStudents.informationofStudents());
console.log(
  `Attendance requirement for software engineer students:${softwareStudents.compulsoryAttendance()} days.`
);
//Compulsory attendance for medicine students
let medicineStudents = new MedicineStudent();
medicineStudents.name = "Ayşe";
medicineStudents.age = 24;
medicineStudents.studentNumber = 2;
medicineStudents.extraDay = 1;
medicineStudents.department = "Medicine";
medicineStudents.favouriteColor = "red";
console.log(medicineStudents.informationofStudents());
console.log(
  `Attendance requirement for medicine students:${medicineStudents.compulsoryAttendance()} days.`
);
//Compulsory attendance for architecture students
let architectureStudents = new ArchitectureStudent();
architectureStudents.name = "Fatma";
architectureStudents.age = 24;
architectureStudents.studentNumber = 3;
architectureStudents.department = "Architecture";
console.log(architectureStudents.informationofStudents());
console.log(
  `Attendance requirement for architecture students:${architectureStudents.compulsoryAttendance()} days.`
);
// Creating base student
let baseStudent: Student = softwareStudents;
console.log(
  `Attendance requirement for base software students:${baseStudent.compulsoryAttendance()} days.`
);
baseStudent = medicineStudents;
//(baseStudent as MedicineStudent) = because code reading from left to right
console.log(
  `Favourite color of base medicine students:${
    (baseStudent as MedicineStudent).favouriteColor
  }.`
);
