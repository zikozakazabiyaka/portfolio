import {
  SET_PEOPLE,
  SET_LOADING,
  SET_CURRENT_CREATURE,
  CLEAR_CREATURE_DETAILS,
  SET_CREATURE_PLANET,
  SET_PLANET_LOADING,
  SET_PEOPLE_COUNT
} from "./constants";

export const setPeople = (payload: any) => ({ type: SET_PEOPLE, payload });
export const setLoading = (payload: boolean) => ({ type: SET_LOADING, payload });
export const setPlanetLoading = (payload: boolean) => ({ type: SET_PLANET_LOADING, payload });
export const setCurrentCreature = (payload: any) => ({ type: SET_CURRENT_CREATURE, payload });
export const setCreaturePlanet = (payload: any) => ({ type: SET_CREATURE_PLANET, payload });
export const clearCreatureDetails = () => ({ type: CLEAR_CREATURE_DETAILS });
export const setPeopleCount = (payload: number) => ({ type: SET_PEOPLE_COUNT, payload });
