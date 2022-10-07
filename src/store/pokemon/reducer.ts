import {
  CLEAR_CURRENT_POKEMON,
  SET_CURRENT_POKEMON,
  SET_LOADING,
  SET_POKEMONS,
  SET_POKEMON_LOADING
} from "./constants";

import { PokemonsType } from "./types";

export const INITIAL_STATE: PokemonsType = {
  isLoading: true,
  pokemons: [],
  currentPokemon: {
    isLoading: true,
    name: '',
    height: '',
    weight: '',
    power: '',
    icon: '',
    types: [],
    stats: {
      baseStats: [],
      stat: [],
    }
  },
  count: 0,
  next: null,
  previous: null,
};

const pokemonReducer = (state = INITIAL_STATE, action: any) => {
  switch(action.type) {
    case SET_POKEMONS:
      const { results, count, next, previous } = action.payload;
      return ({ ...state, pokemons: results, count, next, previous });
    case SET_CURRENT_POKEMON:
      return ({ ...state, currentPokemon: { ...state.currentPokemon, ...action.payload }})
    case SET_LOADING:
      return ({ ...state, isLoading: action.payload });
    case SET_POKEMON_LOADING:
      return ({ ...state, currentPokemon: { ...state.currentPokemon, isLoading: action.payload } });
    case CLEAR_CURRENT_POKEMON:
      return ({ ...state, currentPokemon: INITIAL_STATE.currentPokemon });
    default:
      return state
  }
}

export default pokemonReducer;
