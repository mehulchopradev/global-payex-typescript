import Shape from "../abc/geometry/shape";

// Developer Y
export default class Rectangle extends Shape {
  /* length: number;
  breadth: number; */

  /* constructor(length: number, breadth: number) {
    super();
    this.length = length;
    this.breadth = breadth;
  } */

  // shorthand constructor declaration which is equivalent to the above commented out code
  constructor(public length: number, public breadth: number){
    super();
  }

  area(): number {
    return this.length * this.breadth;
  }
  perimeter(): number {
    return 2 * (this.length + this.breadth);
  }
}