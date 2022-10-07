import { RootState } from "..";

export const pokemonsSelector = (state: RootState) => state.pokemon.pokemons;
export const currentPokemonSelector = (state: RootState) => state.pokemon.currentPokemon;
export const countSelector = (state: RootState) => state.pokemon.count;
export const previousPageSelector = (state: RootState) => state.pokemon.previous;
export const nextPageSelector = (state: RootState) => state.pokemon.next;
export const isLoadingSelector = (state: RootState) => state.pokemon.isLoading;
export const isPokemonLoadingSelector = (state: RootState) => state.pokemon.currentPokemon.isLoading;
