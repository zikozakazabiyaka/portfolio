import { AppDispatch } from "..";
import { setCurrentPokemon, setLoading, setPokemonLoading, setPokemons } from "./actions";
import { getCurrentPokemon, getPokemons } from "./api";

export const getPokemonsThunk = (page: number) => (dispatch: AppDispatch) => {
  dispatch(setLoading(true));

  return getPokemons(page)
    .then(response => {
      const { results, count, next, previous } = response;

      const nextValue = next ? next : undefined;
      const prevValue = previous ? previous : undefined;
      dispatch(setPokemons({ results, count, next: nextValue, previous: prevValue }));
    })
    .finally(() => dispatch(setLoading(false)))
};

export const getCurrentPokemonThunk = (id: string) => (dispatch: AppDispatch) => {
  dispatch(setPokemonLoading(true));

  return getCurrentPokemon(id)
    .then(({
      base_experience: power,
      name,
      sprites: { other: { dream_world: { front_default: icon } } },
      stats,
      height,
      weight,
      types,
    }) => {      
      const pokemonTypes = types.map(({ type }: { type: { name: string }}) => type.name);
      const pokemonBaseStat = stats.map(({ base_stat }: { base_stat: number }) => base_stat);
      const pokemonStats = stats.map(({ stat }: { stat: { name: string }}) => stat.name);

      dispatch(setCurrentPokemon({
        power, name, icon, height, weight,
        types: pokemonTypes,
        stats: {
          baseStats: pokemonBaseStat,
          stat: pokemonStats,
         },
      }))
    })
    .finally(() => dispatch(setPokemonLoading(false)));
};
