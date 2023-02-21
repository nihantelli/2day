interface IJob {
  show(shift: number): void;
}
//Classes which implements IJob
class Doctor implements IJob {
  show(shift: number): void {
    console.log(`Their premium amount will be ${shift * 500} Tl per mount.`);
  }
}
class Chef implements IJob {
  show(shift: number): void {
    console.log(`Their premium amount will be ${shift * 300} Tl per mount.`);
  }
}
class Teacher implements IJob {
  show(shift: number): void {
    console.log(`Their premium amount will be ${shift * 400} Tl per mount.`);
  }
}
class Developer implements IJob {
  show(shift: number): void {
    console.log(`Their premium amount will be ${shift * 600} Tl per mount.`);
  }
}
class Premium {
  calculatePremium(shift: number, job: IJob) {
    return job.show(shift);
  }
  //Bad solution
  // calculateBad(shift: number, occupations: string[]): number {
  //   let total = 0;
  //   if (occupations[0] == "Doctors") {
  //     total = shift * 500;
  //   }
  //   if (occupations[1] == "Chefs") {
  //     total = shift * 300;
  //   }
  //   if (occupations[2] == "Teachers") {
  //     total = shift * 400;
  //   }
  //   if (occupations[3] == "Developers") {
  //     total = shift * 600;
  //   }
  //   return total;
  // }
}

let premium = new Premium();

interface IJobType {
  type: string;
  premium: IJob;
}

let occupations = ["Doctors", "Chefs", "Teachers", "Developers"];
let jobArray: IJobType[] = [];
jobArray.push({ type: occupations[0], premium: new Doctor() });
jobArray.push({ type: occupations[1], premium: new Chef() });
jobArray.push({ type: occupations[2], premium: new Teacher() });
jobArray.push({ type: occupations[3], premium: new Developer() });
//Bad solution
// console.log(`Bad way :${premium.calculateBad(50, occupations)}`);
jobArray.forEach((x, i) =>
  console.log(`${occupations[i]} get premium after work  ${x.premium.show(5)}`)
);
