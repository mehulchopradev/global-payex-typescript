import MyArray from "./my_array";
const marks = [5, 7, 4, 5, 8, 9, 10];

const myArray = new MyArray(marks);

// access the 1st element from the array
// console.log(marks[0]);
const firstElement = myArray.getElement(1);

// access the 2nd element from the array
// console.log(marks[1]);
const secondElement = myArray.getElement(2);

// modify the first element to 6
// marks[0] = 6;
myArray.setElement(1, 6);

// print all elements of the array
// marks.forEach(mark => console.log(mark));
myArray.printAll();

const myArray2 = new MyArray(['audi', 'porshe', 'i20', 'i10']);
const fe = myArray2.getElement(1);
myArray2.setElement(1, 'bmw');