// const estrutura = document.querySelectorAll(".quadrado");
// estrutura.forEach((el) => {
//   // el.style.backgroundColor = "lightblue";
//   el.addEventListener("click", (event) => {
//     el.style.width = parseInt(getComputedStyle(el).width) + 100 + "px";
//   });
// });

const quadrado = document.getElementById("estrutura");

if (!quadrado) {
  alert("Elemento não encontrado");
} else {
  // captura os valores iniciais computados (ex.: "100px", "rgb(...)" )
  const estiloInicial = getComputedStyle(quadrado);
  const larguraOriginal = estiloInicial.width;
  const corOriginal = estiloInicial.backgroundColor;
  const htmlOriginal = quadrado.innerHTML;

  quadrado.style.transition = "all 1s";

  let revertTimeout = null;

  // quando o mouse entra: aplica o formato "Modificado" e cancela qualquer timeout
  quadrado.addEventListener("mouseenter", () => {
    if (revertTimeout) {
      clearTimeout(revertTimeout);
      revertTimeout = null;
    }

    quadrado.style.width = "300px";
    quadrado.style.backgroundColor = "#00ff1eff";
    quadrado.innerHTML = "<h2>Modificado</h2>";
  });

  // quando o mouse sai: agenda o revert após 1s
  quadrado.addEventListener("mouseleave", () => {
    // evita empilhar timeouts
    if (revertTimeout) {
      clearTimeout(revertTimeout);
    }

    revertTimeout = setTimeout(() => {
      quadrado.style.width = larguraOriginal;
      quadrado.style.backgroundColor = corOriginal;
      quadrado.innerHTML = htmlOriginal;
      revertTimeout = null;
    }, 1000);
  });
}
