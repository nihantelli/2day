function add(a: number, b: number): number {
  return a + b;
}
console.log(add(1, 2));
let add_anonymous = function (a: number, b: number): number {
  return a + b;
};
add_anonymous(5, 6);
let add_anonymous_type_2 = (a: number, b: number): number => {
  return a + b;
};
//birden fazla satır varsa { } kullanılır ve return kelimesi şarttır.
let add_anonymous_type_3 = (a: number, b: number): number => a + b;
let add_anonymous_type_4 = () => console.log("boş method");
function add2(...a: number[]) {
  var sum = 0;
  a.forEach((x) => {
    sum += x;
  });
  return sum;
}
function add3(x: number, y: number, ...a: number[]) {
  var sum = 0;
  a.forEach((x) => {
    sum += x;
  });
  return sum;
}
function calculate(a: number, b: number, c: number = 6): number {
  return a + b + c;
}
calculate(2, 4);
calculate(2, 4, 10);
console.log(add2(2, 3, 4, 5));
