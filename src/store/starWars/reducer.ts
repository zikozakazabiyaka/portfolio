import {
  CLEAR_CREATURE_DETAILS,
  SET_CREATURE_PLANET,
  SET_CURRENT_CREATURE,
  SET_LOADING,
  SET_PEOPLE,
  SET_PEOPLE_COUNT,
  SET_PLANET_LOADING,
} from "./constants";
import { StarWarsType } from "./types";


export const INITIAL_STATE: StarWarsType = {
  isLoading: true,
  people: [],
  next: null,
  previous: null,
  count: 0,
  currentCreature: {
    isPlanetLoading: true,
  },
}

const starWarsReducer = (state = INITIAL_STATE, action: any) => {
  switch(action.type) {
    case SET_PEOPLE:
      return {
        ...state,
        people: action.payload.results,
        next: action.payload.next,
        previous: action.payload.previous,
        count: action.payload.count,
      };
    case SET_LOADING: 
      return { ...state, isLoading: action.payload };
    case SET_PLANET_LOADING:
      return { ...state, currentCreature: { ...state.currentCreature, isPlanetLoading: action.payload }};
    case SET_CURRENT_CREATURE:
      return { ...state, currentCreature: { ...state.currentCreature, ...action.payload }};
    case CLEAR_CREATURE_DETAILS:
      return { ...state, currentCreature: INITIAL_STATE.currentCreature };
    case SET_CREATURE_PLANET:
      return { ...state, currentCreature: { ...state.currentCreature, planet: action.payload }};
    case SET_PEOPLE_COUNT:
      return { ...state, count: action.payload };
    default:
      return state;
  }
};

export default starWarsReducer;
