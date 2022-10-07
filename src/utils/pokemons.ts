export const getPokemonId = (url: string) => {
  const parseUrl = url.split('/');

  return parseUrl[parseUrl.length - 2];
};

