const CardContainer = document.querySelector("#CardContainer");

export const MostrarPokemonesHtml = async (pokemon) => {
  const { name, id, sprites } = pokemon;
  const img = sprites?.other.dream_world.front_default;
  //Crear Html para la card
  const card = document.createElement("div");
  card.classList.add("card", "p-4", "pointer");
  card.style.width = "18rem";
  card.setAttribute("data-bs-toggle", "modal");
  card.setAttribute("data-bs-target", "#exampleModal");
  card.innerHTML = `
  <img src=${img} class="card-img-top" alt=${name}>
  <div class="card-body">
    <h5 class="card-title">${id}</h5>
    <h5 class="card-text">${name}</h5>
    <div>Habilidades : ${pokemon?.abilities[0].ability.name} </div>
    <div>Habilidades : ${pokemon?.abilities[1]?.ability.name} </div>
    <div>Tipos : ${pokemon.types[0].type.name}</div>
  </div>
  `;

  CardContainer.appendChild(card);
};
