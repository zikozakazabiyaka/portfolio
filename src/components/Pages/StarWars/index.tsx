import React, { ReactElement } from "react";

import  "./styles.scss";

interface IProps {
  children: ReactElement | ReactElement[];
}

const StarWars = ({ children }: IProps) => (
  <div className="star-wars">{children}</div>
);

export default StarWars;
