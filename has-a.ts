//Required interfaces
interface ISpeaking {
  speaking(): void;
}
interface IListening {
  listening(): void;
}
interface IWriting {
  writing(): void;
}
interface IReading {
  reading(): void;
}
// Exam types which implements interfaces
class ExamSpeaking implements ISpeaking {
  speaking(): void {
    console.log("It is a speaking exam type 1.");
  }
}
class ExamSpeaking2 implements ISpeaking {
  speaking(): void {
    console.log("It is a speaking exam type 2.");
  }
}
class ExamListening implements IListening {
  listening(): void {
    console.log("It is a listening exam type 1.");
  }
}
class ExamListening2 implements IListening {
  listening(): void {
    console.log("It is a listening exam type 2.");
  }
}
class ExamListening3 implements IListening {
  listening(): void {
    console.log("It is a listening exam type 3.");
  }
}
class ExamWriting implements IWriting {
  writing(): void {
    console.log("It is a writing exam type 1.");
  }
}
class ExamWriting2 implements IWriting {
  writing(): void {
    console.log("It is a writing exam type 2.");
  }
}
class ExamReading implements IReading {
  reading(): void {
    console.log("It is a reading exam type 1.");
  }
}
class ExamReading2 implements IReading {
  reading(): void {
    console.log("It is a reading exam type 2.");
  }
}
//Base class
abstract class EnglishExam {
  speaking: ISpeaking;
  listening: IListening;
  writing: IWriting;
  reading: IReading;
  constructor(
    speaking: ISpeaking,
    listening: IListening,
    writing: IWriting,
    reading: IReading
  ) {
    this.speaking = speaking;
    this.listening = listening;
    this.writing = writing;
    this.reading = reading;
  }
  //methods
  WhichExam(
    speaking: ISpeaking,
    listening: IListening,
    writing: IWriting,
    reading: IReading
  ) {
    this.speaking = speaking;
    this.listening = listening;
    this.writing = writing;
    this.reading = reading;
  }
  Speaking(): void {
    this.speaking.speaking();
  }
  Listening(): void {
    this.listening.listening();
  }
  Writing(): void {
    this.writing.writing();
  }
  Reading(): void {
    this.reading.reading();
  }
}

// Derived Class
class Exam1 extends EnglishExam {}
//exam1 object from Exam1 class
let exam1 = new Exam1(
  new ExamSpeaking(),
  new ExamListening2(),
  new ExamWriting2(),
  new ExamReading()
);
//See the outputs
exam1.Speaking();
exam1.Listening();
exam1.Writing();
exam1.Reading();
exam1.WhichExam(
  new ExamSpeaking2(),
  new ExamListening3(),
  new ExamWriting(),
  new ExamReading2()
);
//After sending parameters to WhichExam
exam1.Speaking();
exam1.Listening();
exam1.Writing();
exam1.Reading();
