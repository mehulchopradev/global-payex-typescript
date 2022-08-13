// generic function
// where the parameter type and the return type are generic and in sync with each other
function supriseMe<T>(elements: T[]): T {
  const index = Math.floor(Math.random() * elements.length);
  return elements[index];
}


const movie = supriseMe(['Titanic', '3 idiots', 'Forest gump', 'Terminator 2']);
console.log('***** Netflix suprise me with *********', movie);

const n = supriseMe([5, 7, 2, 3, 7, 9, 10]);
console.log(n);