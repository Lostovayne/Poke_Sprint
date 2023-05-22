import { fetchData } from "../helpers/Fetch";

const CargarPokemones = async () => {
  fetchData("https://pokeapi.co/api/v2/pokemon");
};
