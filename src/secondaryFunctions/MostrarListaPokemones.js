const ListadoPokemones = document.querySelector("#ListadoPokemones");

export const MostrarListaPokemones = ({ results }) => {
  results.forEach((pokemon) => {
    const li = document.createElement("li");
    li.innerHTML = `${pokemon.name}`;
    ListadoPokemones.appendChild(li);
  });
};
