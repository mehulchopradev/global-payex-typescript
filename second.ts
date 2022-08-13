export {};

function perimeterRectangle(length: number, breadth: number) : number {
  return 2 * (length + breadth);
}

// perimeterRectangle('mehul', 'chopra'); // error
// perimeterRectangle(89); // error

// let perimeter: string;
// perimeter = perimeterRectangle(5, 2); // error

let perimeter: number;
perimeter = perimeterRectangle(5, 3);
console.log(perimeter);

// optional parameters with default value
function areaRectangle(length: number, breadth: number=2): number {
  return length * breadth;
}

console.log(areaRectangle(5)); // breadth default 2

// username here is only an optional parameter
function greetUser(username?: string): string {
  return username ? `Welcome to the app ${username}` : 'Welcome guest';
}

console.log(greetUser('mehul25')); // Welcome to the app mehul25
console.log(greetUser()); // Welcome guest


function nextGenAdd(...args: number[]): number {
  let sum = 0;
  args.forEach(n => sum+= n);
  return sum;
}

console.log(nextGenAdd());
console.log(nextGenAdd(5, 6, 7));
console.log(nextGenAdd(5, 6, 7, 10, 5, 3, 2, 7, 9));
// console.log(nextGenAdd('audi', 'porshe', 'mercedes')); // error