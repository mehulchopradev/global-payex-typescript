// generic class
export default class MyArray<T> {

  constructor(private elements: T[]) {}

  // index will be 1 based index
  getElement(index: number): T {
    return this.elements[index - 1];
  }

  // index will be 1 based index
  setElement(index: number, element: T): void {
    this.elements[index - 1] = element;
  }

  printAll(): void {
    this.elements.forEach(element => console.log(element));
  }
}