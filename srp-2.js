//Responsibility : information about kintergarten
var Kindergarten = /** @class */ (function () {
    function Kindergarten() {
        this.name = "Özel İstanbul Anaokulu";
        this.capacity = 130;
        this.city = "İstanbul";
    }
    return Kindergarten;
}());
//Responsibility : defining rule body
var Rules = /** @class */ (function () {
    function Rules() {
        this.uniform = "compulsory";
        this.lessonHours = "8:00 - 15:00";
        this.lunchBreak = "12:00-13:00";
    }
    return Rules;
}());
//Responsibility : creating children list
var CreateChildrenList = /** @class */ (function () {
    function CreateChildrenList() {
        this.childrenList = [];
    }
    CreateChildrenList.prototype.createChildrenList = function (child) {
        this.childrenList.push(child);
    };
    return CreateChildrenList;
}());
var children = new CreateChildrenList();
var childrenArray = children.childrenList;
//Responsibility : defining child
var Child = /** @class */ (function () {
    function Child() {
    }
    return Child;
}());
//Alternative way different from example srp.ts,defining outside
var child1 = new Child();
var child2 = new Child();
var child3 = new Child();
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
var AddChildren = /** @class */ (function () {
    function AddChildren() {
    }
    AddChildren.prototype.add = function () {
        children.createChildrenList(child1);
        children.createChildrenList(child2);
        children.createChildrenList(child3);
    };
    return AddChildren;
}());
//Responsibility: writing the console
var Writetoconsole = /** @class */ (function () {
    function Writetoconsole() {
    }
    Writetoconsole.prototype.writeTo = function (childrenArray) {
        childrenArray.forEach(function (child) {
            console.log(child);
        });
        console.log("Kindergartens name: ".concat(kinderGarten.name, ", Kindergartens capacity: ").concat(kinderGarten.capacity, ", Kindergartens city: ").concat(kinderGarten.city));
        console.log("About school rules, school hours: ".concat(rules.lessonHours, ", lunch break time: ").concat(rules.lunchBreak, ", wearing uniform:").concat(rules.uniform));
    };
    return Writetoconsole;
}());
//About adding children
var added = new AddChildren();
added.add();
//About kindergarten informations
var kinderGarten = new Kindergarten();
//About rules
var rules = new Rules();
//About write to console class
var writings = new Writetoconsole();
writings.writeTo(childrenArray);
