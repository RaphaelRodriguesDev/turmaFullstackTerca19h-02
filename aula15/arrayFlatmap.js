let numeros = [1, 2, 3];
// let resultado = numeros.flatMap(num => [`${num} * 2 = ${num, num * 2}`]);
let resultado = numeros.flatMap(num => [num +  " * 2 = " + num, num * 2]);
console.log(resultado); // [1, 2, 2, 4, 3, 6]

// `Idade: ${idade}`
// `Resultado: ${numero1 + numero2}`

// let numeros = [1, 2, 3];
// let resultado = numeros.flatMap(num => [num * 2]);
// console.log(resultado); // [1, 2, 2, 4, 3, 6]
