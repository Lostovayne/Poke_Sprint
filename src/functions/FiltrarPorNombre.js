import { arregloPokemones } from "../index.js";
import { ErrorPokemon } from "./ErrorPokemon.js";
import { LimpiarElHtml } from "./LimpiarElHtml.js";
import { MostrarPokemonesHtml } from "./MostrarPokemonesHtml.js";

export const FiltrarPorNombre = (Nombrepokemon) => {
  LimpiarElHtml();
  const pokemonFiltrado = arregloPokemones.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(Nombrepokemon.toLowerCase())
  );

  pokemonFiltrado.length > 0
    ? pokemonFiltrado.forEach((pokemon) => MostrarPokemonesHtml(pokemon))
    : ErrorPokemon();
};
