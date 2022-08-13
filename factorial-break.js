// Factorial de 10 con bucle WHILE, bifurcación IF y sentencia BREAK.
// npm run factBreak

let resultadoFact10 = 1;
let factorialDe = 10;

while (true) {
 resultadoFact10 *= factorialDe--;

 if (factorialDe === 1) break;
}

console.log(resultadoFact10);
