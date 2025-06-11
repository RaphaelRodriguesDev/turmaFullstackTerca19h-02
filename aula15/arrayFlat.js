let arr = [1, 2, [3, 4, [20, 30, [40]]], [5, 6]];
let arrFlat = arr.flat(Infinity);
console.log(arrFlat); // Saída: [1, 2, 3, 4]
