import { RootState } from "..";

export const loadingSelector = (state: RootState) => state.starWars.isLoading;
export const peopleSelector = (state: RootState) => state.starWars.people;
export const peopleCountSelector = (state: RootState) => state.starWars.count;
export const prevPageSelector = (state: RootState) => state.starWars.previous;
export const nextPageSelector = (state: RootState) => state.starWars.next;
export const currentCreatureSelector = (state: RootState) => state.starWars.currentCreature;
