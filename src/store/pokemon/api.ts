const API_URL = 'https://pokeapi.co/api/v2/pokemon';
export const LIMIT = 20;

export const getPokemons = async (page: number) => {
  const response = await fetch(`${API_URL}?offset=${(page - 1) * LIMIT}&limit=${LIMIT}`);

  return response.json();
};

export const getCurrentPokemon = async (id: string) => {
  const response = await fetch(`${API_URL}/${id}/`);

  return response.json();
};

