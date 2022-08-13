import Student from "./college/student";
console.log(Student.count);

const s1 = new Student('mehul', 'm', 10, 90);
// console.log(s1);

const s2 = new Student();
// console.log(s2);

console.log(Student.count);

const s3 = new Student('jane', undefined, 20, undefined);
// console.log(s3);

const s4 = Student.newInstance('john', 'm', 34, 97);


console.log(s1.getDetails());
console.log(s2.getDetails());
// console.log(s3.getDetail()); // error

console.log(Student.count);