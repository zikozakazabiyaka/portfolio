export type StarWarsItemType = {
  name: string;
  url: string;
}

export type CurrentCreatureType = {
  name?: string;
  height?: string;
  mass?: string;
  gender?: string;
  homeworld?: string;
  planet?: any;
  isPlanetLoading: boolean;
}

export type StarWarsType = {
  isLoading: boolean;
  people: StarWarsItemType[];
  next: string | null;
  previous: string | null;
  count?: number;
  currentCreature?: CurrentCreatureType;
};
