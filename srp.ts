//Responsibility:creating a patient list
class CreatePatientList {
  patientList: Patient[] = [];
  createPatientList(patient: Patient) {
    this.patientList.push(patient);
  }
}
//About create a patient list class
let list = new CreatePatientList();
let patientArray = list.patientList;
//Responsibility:defining patient
class Patient {
  name: string;
  age: number;
  disease: string;
  constructor(name: string, age: number, disease: string) {
    this.name = name;
    this.age = age;
    this.disease = disease;
  }
}
//Responsibility : removing first item from list
class Remove {
  remove(patientArray: Patient[]) {
    patientArray.shift();
  }
}
//Responsibility : adding patients
class Add {
  patient1 = new Patient("Buse", 25, "influanza");
  patient2 = new Patient("Merve", 25, "corona");
  patient3 = new Patient("Nihan", 24, "rheumatism");
  patient4 = new Patient("Ahmet", 23, "obeseness");
  patient5 = new Patient("Mehmet", 23, "heart attack");
  patient6 = new Patient("Arda", 28, "pulmonary");
  add() {
    list.createPatientList(this.patient1);
    list.createPatientList(this.patient2);
    list.createPatientList(this.patient3);
    list.createPatientList(this.patient4);
    list.createPatientList(this.patient5);
    list.createPatientList(this.patient6);
  }
}

//Responsibility: writing the console
class WritetoConsole {
  writeToConsole(patientArray: Patient[]) {
    patientArray.forEach((patient) => {
      console.log(patient);
    });
  }
}
//About add class
let adding = new Add();
adding.add();
//About removing class
let removedItem = new Remove();
removedItem.remove(patientArray);
//About write to console class
let write = new WritetoConsole();
write.writeToConsole(patientArray);
