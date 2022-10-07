import React, { ReactElement } from "react";

import './styles.scss';

interface IProps {
  children: ReactElement[];
}

const Pokemons = ({ children }: IProps) => <div className="pokemons">{children}</div>;

export default Pokemons;
