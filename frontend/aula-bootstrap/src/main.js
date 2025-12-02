document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formCards");
  const input = document.getElementById("qtdCards");
  const container = document.getElementById("cardsContainer");

  function sanitizeQuantity(value) {
    const n = parseInt(value, 10);
    if (isNaN(n)) return 0;
    return Math.min(100, Math.max(1, n));
  }

  function createCard(index) {
    const col = document.createElement("div");
    col.className = "col-12 col-sm-6 col-md-4 col-lg-3";

    // Usa imagem local existente; ajuste se desejar outras imagens
    const imgSrc = "./assets/img/computador.jpg";

    col.innerHTML = `
      <div class="card h-100">
        <img src="${imgSrc}" class="card-img-top" alt="Card ${index}">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">Card ${index}</h5>
          <p class="card-text">Exemplo de card gerado dinamicamente com JavaScript + Bootstrap.</p>
          <a href="#" class="btn btn-outline-primary mt-auto">Ação</a>
        </div>
      </div>
    `;

    return col;
  }

  function renderCards(qtd) {
    container.innerHTML = ""; // limpa
    for (let i = 1; i <= qtd; i++) {
      container.appendChild(createCard(i));
    }
  }

  // Render inicial baseado no valor padrão do input
  renderCards(sanitizeQuantity(input.value));

  // Submissão do formulário
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const qtd = sanitizeQuantity(input.value);
    renderCards(qtd);
  });
});
