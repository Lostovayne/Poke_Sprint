const CardContainer = document.querySelector("#CardContainer");
export const MostrarPokemonesHtml = (pokemon) => {
  const { name, id, sprites } = pokemon;
  const img = sprites?.other.dream_world.front_default;
  //Crear Html para la card
  const card = document.createElement("div");
  card.classList.add("card", "p-4");
  card.style.width = "18rem";
  card.innerHTML = `
  <img src=${img} class="card-img-top" alt=${name}>
  <div class="card-body">
    <h5 class="card-title">${id}</h5>
    <h5 class="card-text">${name}</h5>
  </div>
  `;

  CardContainer.appendChild(card);
};
