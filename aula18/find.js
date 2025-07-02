const numeros = [1, 2, 3, 4, 5];
const letras = ["Daniel", "Carlos", "Ana", "Braga"]
// const encontrado = numeros.find(numero => numero > 3);
// const encontrado = letras.find(letra => letra === "Ana");
const encontrado = letras.find(letra => letra.startsWith("B"));
console.log(encontrado);
