const carro = {
  roda: "Aro15",
  cor: "#000000",
  velocidade: 300.0,
  motor: "V8",
  pecas: [
    "Cambio",
    "Retrovisor",
    "Volante",
    {
      velocimetro: 180.0,
      painelDeMedia: "Media",
    },
  ],
  // acelerar: () => "O carro acelerou!"
  acelerar() {
    return "A velocidade máxima é " + this.velocidade + "km/h";
  },
};

carro.modelo = "Ferrari";

// console.log(carro.velocidade + " km/h");
// console.log(carro.modelo);
// delete carro.roda;
// console.log(carro);
// console.log(carro.acelerar());
// console.log(carro.pecas[3].velocimetro);
// carro.pecas.forEach( peca => console.log(peca) );

for (key in carro) {
  console.log(`${key}: ${carro[key]}`);
}
