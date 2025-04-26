'use strict';
// Schreiben Sie ein kurzes Programm, das jede Zahl von 1 bis 100 ausgibt.
// Für jedes Vielfache von 3, schreibe “Fizz” anstelle der Zahl.
// Für jedes Vielfache von 5, schreibe “Buzz” anstelle der Zahl.
// Für Zahlen, die ein Vielfaches von 3 und 5 sind, schreibe “FizzBuzz” statt der Zahl.
let str = '';
for (let i = 1; i <= 100; i++) {
    str += i%3 === 0 ? "Fizz " : i % 5 === 0 ? "Buzz " : i+" ";
}
console.log(str)