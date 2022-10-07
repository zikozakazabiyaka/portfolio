import {
  setCreaturePlanet,
  setCurrentCreature,
  setLoading,
  setPeople,
  setPeopleCount,
  setPlanetLoading,
} from "./actions";
import { getCreatureDetails, getCreaturePlanet, getPeople } from "./api";
import { AppDispatch } from "..";

const getPeopleThunk = (path: string) => (dispatch: AppDispatch ) => {
  dispatch(setLoading(true));

  return getPeople(path)
    .then(({ results, next, previous, count }) => {
      const nextValue = next ? next : undefined;
      const prevValue = previous ? previous : undefined;
      dispatch(setPeople({ results, next: nextValue, previous: prevValue, count }));
    })
    .finally(() => {
      dispatch(setLoading(false));
    })
};

export const getCreatureThunk = (path: string) => (dispatch: AppDispatch) => {
  const pagePath = path.slice(0, path.lastIndexOf('/'))
  dispatch(setLoading(true));

  return Promise.all([
    getCreatureDetails(path),
    getPeople(pagePath),
  ])
    .then(([{ name, height, mass, gender, homeworld }, { count }]) => {
      dispatch(setPeopleCount(count));
      dispatch(setCurrentCreature({ name, height, mass, gender, homeworld }));
    })
    .finally(() => {
      dispatch(setLoading(false));
    })
};

export const getCreaturePlanetThunk = (path: string) => (dispatch: AppDispatch) => (
  getCreaturePlanet(path)
    .then(({ name }) => {
      dispatch(setCreaturePlanet(name));
    })
    .finally(() => {
      dispatch(setPlanetLoading(false));
    })
);

export default getPeopleThunk;
