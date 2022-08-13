import Shape from "./shape"

export default function print(shape: Shape): void {
  console.log('************ Area *****************');
  console.log(shape.area());
  console.log('************* Perimeter **************');
  console.log(shape.perimeter());
  console.log('************************************');
}