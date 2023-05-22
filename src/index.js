import { FiltrarporId } from "./functions/FiltrarPorId.js";
import { FiltrarPorNombre } from "./functions/FiltrarPorNombre.js";
import { LimpiarElHtml } from "./functions/LimpiarElHtml.js";
import { MostrarCargando } from "./functions/MostrarCargando.js";
import { MostrarPokemonesHtml } from "./functions/MostrarPokemonesHtml.js";
import { fetchData } from "./helpers/Fetch.js";

const CardContainer = document.querySelector("#CardContainer");
const ctx = document.getElementById("myChart");
let data = {};

export let arregloPokemones = [];
const form = document.querySelector("#form");

const CargarPokemones = async () => {
  arregloPokemones = [];
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

function Data(name, hp, Attack, Defense, SpAtk, SpDef, Speed) {
  data = {
    labels: ["Hp", "Attack", "Defense", "Sp.Atk", " Sp.Def", " Speed "],
    datasets: [
      {
        label: `${name}`,
        data: [hp, Attack, Defense, SpAtk, SpDef, Speed],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(153, 102, 255)",
          "rgb(255, 159, 64)",
        ],
        hoverOffset: 4,
      },
    ],
  };
  return data;
}

CardContainer.addEventListener("click", async (e) => {
  if (e.target.parentElement.classList.contains("card")) {
    const dataId = e.target.parentElement.children[1].children[0].textContent;
    const datosPokemon = await fetchData("pokemon/" + dataId);
    document.querySelector("#exampleModalLabel").textContent =
      datosPokemon.name;

    const config = {
      type: "doughnut",
      data: Data(
        datosPokemon.name,
        datosPokemon.stats[0].base_stat,
        datosPokemon.stats[1].base_stat,
        datosPokemon.stats[2].base_stat,
        datosPokemon.stats[3].base_stat,
        datosPokemon.stats[4].base_stat,
        datosPokemon.stats[5].base_stat
      ),
    };

    new Chart(ctx, config);
  }
});

form["input"].addEventListener("input", (e) => {
  e.target.value === "" && TiempodeCarga();
});
