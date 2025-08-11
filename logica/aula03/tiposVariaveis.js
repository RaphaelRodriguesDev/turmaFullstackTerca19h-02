let nome = "Rapha"; // String
let idade = 33; // Number
let possuiFaculdade = true; // Boolean(true, false)
let indefinido = undefined; // Undefined(explícita)
let indefinido2; // Undefined(implícita)
let stringVazia = ""; // => String Vazia
let nulo = null; // Indica ausência de objeto | Objeto Vazio.
let carrinhoDeCompras = ["Arroz", "Ovos", "Café"]; // Array => Object
let pessoa = {
  nome: "Raphael",
  idade: 33,
  possuiFaculdade: true,
}; // Object

function criarTexto(nome) {
  return "Seu nome é " + nome;
} // Function

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof possuiFaculdade);
console.log(typeof indefinido);
console.log(typeof indefinido2);
console.log(typeof stringVazia);
console.log(typeof nulo);
console.log(typeof carrinhoDeCompras);
console.log(typeof pessoa);
console.log(typeof criarTexto);
