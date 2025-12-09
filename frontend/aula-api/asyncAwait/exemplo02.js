async function esperarSegundos(s) {
  await new Promisse(resolve => setTimeout(resolve, s * 1000))
  console.log(`Esperei ${s} segundos`);
}

esperarSegundos(2);