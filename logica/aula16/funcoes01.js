let num1 = 10;
let num2 = 10;
let operador = "/";

const somar = (n1, n2) => n1 + n2;
const subtrair = (n1, n2) => n1 - n2;
const multiplicar = (n1, n2) => n1 * n2;
const dividir = (n1, n2) => n1 / n2;
const calcularModulo = (n1, n2) => n1 % n2;

function calcular(n1 = 0, n2 = 0, op = "+") {
  switch (op) {
    case "+":
      return somar(n1, n2);
      break;
    case "-":
      return subtrair(n1, n2);
      break;
    case "*":
      return multiplicar(n1, n2);
      break;
    case "/":
      return dividir(n1, n2);
      break;
    case "%":
      return calcularModulo(n1, n2);
      break;
    default:
      return "Operador Inválido";
  }
}

console.log(calcular(num1, num2, operador));
