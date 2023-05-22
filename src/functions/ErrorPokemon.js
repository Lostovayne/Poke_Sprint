const CardContainer = document.querySelector("#CardContainer");

export const ErrorPokemon = () => {
  const p = document.createElement("p");
  p.innerHTML = "No se encontro el pokemon";
  CardContainer.appendChild(p);
};
