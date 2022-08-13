import Student from "./college/student";
import Professor from "./college/professor";
import CollegeUser from "./college/college_user";
import calculateSalary from "./abc/salary-processor/calculate";

const s1 = new Student('mehul', 'm', 10, 90);
const p1 = new Professor('jane', 'f', ['Physics', 'Chemistry'], 15, 8000);
console.log(calculateSalary(p1));

console.log(s1);
console.log(p1);

// encapsulation
s1.roll = 12;
// Internally
// Student/set/roll(-12)

console.log(s1.roll);
// Interally
// Student/get/roll() --> Roll

console.log(s1.getDetails());
console.log(p1.getDetails());

const c1 = new CollegeUser("mehul", 'm');
console.log(c1);