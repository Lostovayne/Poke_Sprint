const URL_BASE = "https://pokeapi.co/api/v2/";

export const fetchData = async (url) => {
  try {
    const response = await fetch(`${URL_BASE}${url}`);
    const data = await response.json();
    return await data;
  } catch (error) {
    console.log(error);
  }
};
