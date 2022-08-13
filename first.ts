export {};

// explicitly give data type to variables

const name: string = 'mehul chopra';
let gender: string;

// gender = 1; // error
gender = 'm';

const pi: number = 3.14;
const age: number = 35;
let isLightsOn: boolean = true;
// isLightsOn = 0; // error

// implicit data typing to variables
let fullName = 'mehul chopra';
// fullName = 8; // error

let d; // data type `any`
d = 10;
d = 'mehul chopra';

const cars = ['audi', 'bmw', 'porshe'];
// cars[0] = 10; // error
// const i: number = cars[0]; // error

let marks: number[] = [];
marks.push(5, 6, 4, 3, 7);
// marks.push('audi'); // error

// union types
let isEngineOn: boolean | number;

isEngineOn = true;
isEngineOn = 1;
// isEngineOn = 'on'; // error

// tuple data type
// hetrogenous data
const s1: [string, string, number, number] = ['mehul', 'm', 10, 90];
// s1[0] = 89; // error
s1[3] = 95;
console.log(s1);

// create ur own data type

type Gender = 'm' | 'f';
let gen: Gender;

gen = 'm';
gen = 'f';
// gen = 'a'; // error

type Student = {
  name: string,
  gender: Gender,
  roll?: number // roll is an optional object attribute
}

const st1: Student = {
  name: 'mehul',
  gender: 'm',
  roll: 10,
  // address: 'India', // error
};

/* const st2: Student = {
  name: 'mehul',
  gen: 'm',
  r: 10
} */ // error

const st3: Student = {
  name: 'jane',
  gender: 'f',
};

