import { LimpiarHtml } from "./LimpiarListado.js";
import { MostrarListaPokemones } from "./MostrarListaPokemones.js";

const ListadoPokemones = document.querySelector("#ListadoPokemones");
const cargarPokemones = document.querySelector("#cargarPokemones");
const cargarMasPokemones = document.querySelector("#cargarMasPokemones");
const BorrarPokemones = document.querySelector("#BorrarPokemones");
let PokemonesListados = {};
const Base_Url = "https://pokeapi.co/api/v2/pokemon";

cargarPokemones.addEventListener("click", async () => {
  cargarMasPokemones.classList.remove("disabled");
  BorrarPokemones.classList.remove("disabled");
  cargarPokemones.classList.add("disabled");
  LimpiarHtml();
  FetchListadoPokemones(Base_Url);
});

async function FetchListadoPokemones(Base_Url) {
  PokemonesListados = await fetch(Base_Url)
    .then((response) => response.json())
    .then((data) => {
      MostrarListaPokemones(data);
      return data;
    });
}

cargarMasPokemones.addEventListener("click", async () => {
  LimpiarHtml();
  FetchListadoPokemones(PokemonesListados.next);
});

BorrarPokemones.addEventListener("click", async () => {
  LimpiarHtml();
  BorrarPokemones.classList.add("disabled");
  cargarMasPokemones.classList.add("disabled");
  cargarPokemones.classList.remove("disabled");
  FetchListadoPokemones(Base_Url);
});
