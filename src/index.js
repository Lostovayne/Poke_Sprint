import { FiltrarporId } from "./functions/FiltrarPorId.js";
import { FiltrarPorNombre } from "./functions/FiltrarPorNombre.js";
import { LimpiarElHtml } from "./functions/LimpiarElHtml.js";
import { MostrarCargando } from "./functions/MostrarCargando.js";
import { MostrarPokemonesHtml } from "./functions/MostrarPokemonesHtml.js";
import { fetchData } from "./helpers/Fetch.js";

export const arregloPokemones = [];
const form = document.querySelector("#form");

const CargarPokemones = async () => {
  form["input"].value = "";
  for (let i = 120; i <= 151; i++) {
    const pokemon = await fetchData("pokemon/" + i);
    arregloPokemones.push(pokemon);
    MostrarPokemonesHtml(pokemon);
  }
};

const TiempodeCarga = () => {
  MostrarCargando();
  setTimeout(() => {
    LimpiarElHtml();
    CargarPokemones();
  }, 2000);
};

TiempodeCarga();

//Buscar Pokemon por Nombre
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const Nombrepokemon = e.target.input.value;
  Nombrepokemon === "";
  isNaN(Number(Nombrepokemon))
    ? FiltrarPorNombre(Nombrepokemon)
    : FiltrarporId(Nombrepokemon);
});
