import React, { ReactElement } from "react";

import './styles.scss';

interface IProps {
  children: ReactElement | ReactElement[];
}

const StarWarsDetailsList = ({ children }: IProps) => (
  <ul className="star-wars__details-list">{children}</ul>
);

export default StarWarsDetailsList;
