const numeros = [1,2,3,4,5,6]

function somar(...numeros) {
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
}
console.log(somar(1, 2, 3)); // 6
console.log(somar(4, 5, 6)); // 15