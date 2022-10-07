import React, { ReactElement } from "react";

import './styles.scss';

interface IProps {
  children: ReactElement | ReactElement[];
}

const PokemonsPanel = ({ children }: IProps) => (
  <div className="pokemons__panel">{children}</div>
);

export default PokemonsPanel;
