const ListadoPokemones = document.querySelector("#ListadoPokemones");

export const LimpiarHtml = () => {
  while (ListadoPokemones.firstChild) {
    ListadoPokemones.removeChild(ListadoPokemones.firstChild);
  }
};
