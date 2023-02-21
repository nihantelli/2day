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
// Exam types which implements interfaces
var ExamSpeaking = /** @class */ (function () {
    function ExamSpeaking() {
    }
    ExamSpeaking.prototype.speaking = function () {
        console.log("It is a speaking exam type 1.");
    };
    return ExamSpeaking;
}());
var ExamSpeaking2 = /** @class */ (function () {
    function ExamSpeaking2() {
    }
    ExamSpeaking2.prototype.speaking = function () {
        console.log("It is a speaking exam type 2.");
    };
    return ExamSpeaking2;
}());
var ExamListening = /** @class */ (function () {
    function ExamListening() {
    }
    ExamListening.prototype.listening = function () {
        console.log("It is a listening exam type 1.");
    };
    return ExamListening;
}());
var ExamListening2 = /** @class */ (function () {
    function ExamListening2() {
    }
    ExamListening2.prototype.listening = function () {
        console.log("It is a listening exam type 2.");
    };
    return ExamListening2;
}());
var ExamListening3 = /** @class */ (function () {
    function ExamListening3() {
    }
    ExamListening3.prototype.listening = function () {
        console.log("It is a listening exam type 3.");
    };
    return ExamListening3;
}());
var ExamWriting = /** @class */ (function () {
    function ExamWriting() {
    }
    ExamWriting.prototype.writing = function () {
        console.log("It is a writing exam type 1.");
    };
    return ExamWriting;
}());
var ExamWriting2 = /** @class */ (function () {
    function ExamWriting2() {
    }
    ExamWriting2.prototype.writing = function () {
        console.log("It is a writing exam type 2.");
    };
    return ExamWriting2;
}());
var ExamReading = /** @class */ (function () {
    function ExamReading() {
    }
    ExamReading.prototype.reading = function () {
        console.log("It is a reading exam type 1.");
    };
    return ExamReading;
}());
var ExamReading2 = /** @class */ (function () {
    function ExamReading2() {
    }
    ExamReading2.prototype.reading = function () {
        console.log("It is a reading exam type 2.");
    };
    return ExamReading2;
}());
//Base class
var EnglishExam = /** @class */ (function () {
    function EnglishExam(speaking, listening, writing, reading) {
        this.speaking = speaking;
        this.listening = listening;
        this.writing = writing;
        this.reading = reading;
    }
    //methods
    EnglishExam.prototype.WhichExam = function (speaking, listening, writing, reading) {
        this.speaking = speaking;
        this.listening = listening;
        this.writing = writing;
        this.reading = reading;
    };
    EnglishExam.prototype.Speaking = function () {
        this.speaking.speaking();
    };
    EnglishExam.prototype.Listening = function () {
        this.listening.listening();
    };
    EnglishExam.prototype.Writing = function () {
        this.writing.writing();
    };
    EnglishExam.prototype.Reading = function () {
        this.reading.reading();
    };
    return EnglishExam;
}());
// Derived Class
var Exam1 = /** @class */ (function (_super) {
    __extends(Exam1, _super);
    function Exam1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Exam1;
}(EnglishExam));
//exam1 object from Exam1 class
var exam1 = new Exam1(new ExamSpeaking(), new ExamListening2(), new ExamWriting2(), new ExamReading());
//See the outputs
exam1.Speaking();
exam1.Listening();
exam1.Writing();
exam1.Reading();
exam1.WhichExam(new ExamSpeaking2(), new ExamListening3(), new ExamWriting(), new ExamReading2());
//After sending parameters to WhichExam
exam1.Speaking();
exam1.Listening();
exam1.Writing();
exam1.Reading();
