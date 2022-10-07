import {
  CLEAR_CURRENT_POKEMON,
  SET_CURRENT_POKEMON,
  SET_LOADING,
  SET_POKEMONS,
  SET_POKEMON_LOADING
} from "./constants";

export const setPokemons = (payload: any) => ({ type: SET_POKEMONS, payload });
export const setCurrentPokemon = (payload: any) => ({ type: SET_CURRENT_POKEMON, payload });
export const setLoading = (payload: boolean) => ({ type: SET_LOADING, payload });
export const setPokemonLoading = (payload: boolean) => ({ type: SET_POKEMON_LOADING, payload });
export const clearCurrentPokemon = () => ({ type: CLEAR_CURRENT_POKEMON });
