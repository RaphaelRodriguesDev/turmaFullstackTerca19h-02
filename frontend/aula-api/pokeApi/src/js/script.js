const cardsContainer = document.querySelector(".cards-container");
cardsContainer.innerHTML = "";

async function loadPokemons(limit = 649) {
  for (let i = 1; i <= limit; i++) {
    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();

      const card = document.createElement("div");
      card.setAttribute("class", "card");
      const img = document.createElement("img");
      img.src = data.sprites.other.dream_world.front_default;
      const title = document.createElement("h2");
      title.innerText = data.name;

      card.appendChild(img);
      card.appendChild(title);
      cardsContainer.appendChild(card);
    } catch (err) {
      console.error(`Erro ao carregar o Pokémon ${i}:`, err);
    }
  }
}

loadPokemons(150).catch(err =>
  console.error("Erro ao iniciar carregamento:", err)
);