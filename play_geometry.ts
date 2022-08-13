// Manager
import Square from "./geometry/square";
import Rectangle from './geometry/rectangle';
import print from "./abc/geometry/print_stats";
import Circle from "./geometry/circle";
import Shape from "./abc/geometry/shape";

const s = new Square(5);
print(s);
console.log(s.side);

const r = new Rectangle(5, 4);
print(r);

const c = new Circle(5);
print(c);

// const s1 = new Shape(); // error cannot create object of an abstract class
let s2: Shape;
