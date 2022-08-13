import Shape from "../abc/geometry/shape";

// Developer X
export default class Square extends Shape {

  // default access specifier --- public
  // side: number;

  constructor(public side: number) {
    super();
  }

  area(): number {
    return this.side * this.side;
  }

  perimeter(): number {
    return 4 * this.side;
  }
}