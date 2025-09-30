class Veiculo {
  constructor(tipo, cor, velocidade) {
    this.tipo = tipo;
    this.cor = cor;
    this.velocidade = velocidade;
  }

  mostrarInfo() {
    console.log(
      `Este é um ${this.tipo}, de cor ${this.cor}, e sua velocidade máxima é de ${this.velocidade} km/h.`
    );
  }
}

class Carro extends Veiculo {
  constructor(cor, modelo, velocidade) {
    super("carro", cor, velocidade);
    this._modelo = modelo;
  }

  get modelo() {
    return this._modelo;
  }

  set modelo(novoModelo) {
    this._modelo = novoModelo;
  }

  mostrarInfo() {
    console.log(
      `Este é um ${this.modelo}, de cor ${this.cor}, e sua velocidade máxima é de ${this.velocidade} km/h.`
    );
  }

  acelerar(velocidadeExtra = 10) {
    this.velocidade += velocidadeExtra;
    console.log(
      `O ${this.modelo} acelerou. Nova velocidade: ${this.velocidade} km/h.`
    );
  }
}

const barco = new Veiculo("Barco", "Branca", 80);

barco.mostrarInfo();

const porsche = new Carro("vermelho", "Porsche 911 Turbo", 320);
porsche.modelo = "GTS";
console.log(porsche.modelo);
const fiat = new Carro("azul", "Fiat 500", 160);
const ferrari = new Carro("amarelo", "Ferrari F450", 340);

porsche.mostrarInfo();
fiat.mostrarInfo();
ferrari.mostrarInfo();
ferrari.acelerar();
ferrari.acelerar(100);
ferrari.acelerar(50);
