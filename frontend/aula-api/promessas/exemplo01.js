const p = new Promise (resolverPromessa => {
  resolverPromessa([
    {
      id: 1,
      nome: "Carlos",
      idade: 62
    },
    {
      id: 2,
      nome: "Angela",
      idade: 35
    },
    {
      id: 3,
      nome: "Alberto",
      idade: 23
    },
  ]);
});

p.then(JSON.stringify)
  .then(JSON.parse)
  .then(valor => valor.forEach(el => {
    console.log(el.nome, el.idade);
  }));