import CollegeUser from "./college_user";

export default class Student extends CollegeUser {
  // instance attributes
  private _roll: number = 0;
  marks: number = 0;

  // static attributes
  static count: number = 0;

  constructor(name?: string, gender?: string, roll?: number, marks?: number) {
    super(name, gender);

    // putting guards
    if (roll) {
      this.roll = roll;
      // Internally
      // Student/set/roll(...)
    }

    if (marks) {
      this.marks = marks;
    }
    // this.address = 'India'; // error

    Student.count++;
  }

  // instance methods
  getDetails(): string {
    return `${super.getDetails()}\nRoll: ${this.roll}\nMarks: ${this.marks}`;
  }

  // static methods
  static newInstance(name: string, gender: string, roll: number, marks: number): Student {
    return new Student(name, gender, roll, marks);
  }

  set roll(roll: number) {
    if (roll > 0) {
      this._roll = roll;
    } else {
      throw new Error('Roll cannot be 0 or less than 0');
    }
  }

  get roll() {
    return this._roll;
  }
}