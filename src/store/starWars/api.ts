export let API_PAGE_URL = 'https://swapi.dev/api/people/?page=';
export let API_CREATURE_DETAILS_PAGE_URL = 'https://swapi.dev/api/people/';

export const getPeople = async (path: string) => {
  const response = await fetch(path);
  
  return response.json();
};

export const getCreatureDetails = async (path: string) => {
  const response = await fetch(path);

  return response.json();
};

export const getCreaturePlanet = async (path: string) => {
  const response = await fetch(path);

  return response.json();
};
