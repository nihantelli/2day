//Responsibility : information about kintergarten
class Kindergarten {
  name: string = "Özel İstanbul Anaokulu";
  capacity: number = 130;
  city: string = "İstanbul";
}
//Responsibility : defining rule body
class Rules {
  uniform: string = "compulsory";
  lessonHours: string = "8:00 - 15:00";
  lunchBreak: string = "12:00-13:00";
}
//Responsibility : creating children list
class CreateChildrenList {
  childrenList: Child[] = [];
  createChildrenList(child: Child) {
    this.childrenList.push(child);
  }
}
let children = new CreateChildrenList();
let childrenArray = children.childrenList;
//Responsibility : defining child
class Child {
  name: string;
  surname: string;
  patient: string;
}
//Alternative way different from example srp.ts,defining outside
let child1 = new Child();
let child2 = new Child();
let child3 = new Child();
child1.name = "Nihan";
child1.surname = "Telli";
child1.patient = "Filiz Telli";
child2.name = "Ayşe";
child2.surname = "Çelik";
child2.patient = "Fatma Çelik";
child3.name = "Seren";
child3.surname = "Çiçek";
child3.patient = "Yaren Çiçek";

//Responsibility : adding children
class AddChildren {
  add() {
    children.createChildrenList(child1);
    children.createChildrenList(child2);
    children.createChildrenList(child3);
  }
}
//Responsibility: writing the console
class Writetoconsole {
  writeTo(childrenArray: Child[]) {
    childrenArray.forEach((child) => {
      console.log(child);
    });
    console.log(
      `Kindergartens name: ${kinderGarten.name}, Kindergartens capacity: ${kinderGarten.capacity}, Kindergartens city: ${kinderGarten.city}`
    );
    console.log(
      `About school rules, school hours: ${rules.lessonHours}, lunch break time: ${rules.lunchBreak}, wearing uniform:${rules.uniform}`
    );
  }
}
//About adding children
let added = new AddChildren();
added.add();
//About kindergarten informations
let kinderGarten = new Kindergarten();
//About rules
let rules = new Rules();
//About write to console class
let writings = new Writetoconsole();
writings.writeTo(childrenArray);
