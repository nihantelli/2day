//Responsibility:creating a patient list
var CreatePatientList = /** @class */ (function () {
    function CreatePatientList() {
        this.patientList = [];
    }
    CreatePatientList.prototype.createPatientList = function (patient) {
        this.patientList.push(patient);
    };
    return CreatePatientList;
}());
//About create a patient list class
var list = new CreatePatientList();
var patientArray = list.patientList;
//Responsibility:defining patient
var Patient = /** @class */ (function () {
    function Patient(name, age, disease) {
        this.name = name;
        this.age = age;
        this.disease = disease;
    }
    return Patient;
}());
//Responsibility : removing first item from list
var Remove = /** @class */ (function () {
    function Remove() {
    }
    Remove.prototype.remove = function (patientArray) {
        patientArray.shift();
    };
    return Remove;
}());
//Responsibility : adding patients
var Add = /** @class */ (function () {
    function Add() {
        this.patient1 = new Patient("Buse", 25, "influanza");
        this.patient2 = new Patient("Merve", 25, "corona");
        this.patient3 = new Patient("Nihan", 24, "rheumatism");
        this.patient4 = new Patient("Ahmet", 23, "obeseness");
        this.patient5 = new Patient("Mehmet", 23, "heart attack");
        this.patient6 = new Patient("Arda", 28, "pulmonary");
    }
    Add.prototype.add = function () {
        list.createPatientList(this.patient1);
        list.createPatientList(this.patient2);
        list.createPatientList(this.patient3);
        list.createPatientList(this.patient4);
        list.createPatientList(this.patient5);
        list.createPatientList(this.patient6);
    };
    return Add;
}());
//Responsibility: writing the console
var WritetoConsole = /** @class */ (function () {
    function WritetoConsole() {
    }
    WritetoConsole.prototype.writeToConsole = function (patientArray) {
        patientArray.forEach(function (patient) {
            console.log(patient);
        });
    };
    return WritetoConsole;
}());
//About add class
var adding = new Add();
adding.add();
//About removing class
var removedItem = new Remove();
removedItem.remove(patientArray);
//About write to console class
var write = new WritetoConsole();
write.writeToConsole(patientArray);
