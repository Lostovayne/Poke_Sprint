import { arregloPokemones } from "../index.js";
import { ErrorPokemon } from "./ErrorPokemon.js";
import { LimpiarElHtml } from "./LimpiarElHtml.js";
import { MostrarPokemonesHtml } from "./MostrarPokemonesHtml.js";

export const FiltrarporId = (id) => {
  LimpiarElHtml();
  const PokemonesFiltradosId = arregloPokemones.filter(
    (pokemon) => pokemon.id === Number(id)
  );

  PokemonesFiltradosId.length > 0
    ? PokemonesFiltradosId.forEach((pokemon) => MostrarPokemonesHtml(pokemon))
    : ErrorPokemon();
};
