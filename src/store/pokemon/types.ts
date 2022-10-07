export type PokemonsItemType = {
  name: string;
  url: string;
};

export type CurrentPokemonType = {
  isLoading?: boolean;
  name: string;
  height: string;
  weight: string;
  power: string;
  icon: string;
  types: string[];
  stats: {
    baseStats: number[],
    stat: string[],
  }
};

export type PokemonsType = {
  isLoading?: boolean;
  pokemons: PokemonsItemType[];
  count?: number,
  next?: string | null;
  previous?: string | null;
  currentPokemon?: CurrentPokemonType;
};


