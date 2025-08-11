function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

const pessoa1 = new Pessoa("João", 25);
pessoa1.nome = "Alfredo";

console.log(pessoa1);
