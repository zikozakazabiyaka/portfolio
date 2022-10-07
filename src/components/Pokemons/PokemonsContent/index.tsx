import React, { ReactElement } from "react";

import  "./styles.scss";

interface IProps {
  children: ReactElement | ReactElement[];
}

const PokemonsContent = ({ children }: IProps) => (
  <div className="pokemons__content">{children}</div>
);

export default PokemonsContent;
