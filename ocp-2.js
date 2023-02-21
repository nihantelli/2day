//Classes which implements IJob
var Doctor = /** @class */ (function () {
    function Doctor() {
    }
    Doctor.prototype.show = function (shift) {
        console.log("Their premium amount will be ".concat(shift * 500, " Tl per mount."));
    };
    return Doctor;
}());
var Chef = /** @class */ (function () {
    function Chef() {
    }
    Chef.prototype.show = function (shift) {
        console.log("Their premium amount will be ".concat(shift * 300, " Tl per mount."));
    };
    return Chef;
}());
var Teacher = /** @class */ (function () {
    function Teacher() {
    }
    Teacher.prototype.show = function (shift) {
        console.log("Their premium amount will be ".concat(shift * 400, " Tl per mount."));
    };
    return Teacher;
}());
var Developer = /** @class */ (function () {
    function Developer() {
    }
    Developer.prototype.show = function (shift) {
        console.log("Their premium amount will be ".concat(shift * 600, " Tl per mount."));
    };
    return Developer;
}());
var Premium = /** @class */ (function () {
    function Premium() {
    }
    Premium.prototype.calculatePremium = function (shift, job) {
        return job.show(shift);
    };
    Premium.prototype.calculateBad = function (shift, occupations) {
        var total = 0;
        if (occupations[0] == "Doctors") {
            total = shift * 500;
        }
        if (occupations[1] == "Chefs") {
            total = shift * 300;
        }
        if (occupations[2] == "Teachers") {
            total = shift * 400;
        }
        if (occupations[3] == "Developers") {
            total = shift * 600;
        }
        return total;
    };
    return Premium;
}());
var premium = new Premium();
var occupations = ["Doctors", "Chefs", "Teachers", "Developers"];
var jobArray = [];
jobArray.push({ type: occupations[0], premium: new Doctor() });
jobArray.push({ type: occupations[1], premium: new Chef() });
jobArray.push({ type: occupations[2], premium: new Teacher() });
jobArray.push({ type: occupations[3], premium: new Developer() });
jobArray.forEach(function (x, i) {
    return console.log("".concat(occupations[i], " get premium after work  ").concat(x.premium.show(5)));
});
console.log("Bad way :".concat(premium.calculateBad(50, occupations)));
