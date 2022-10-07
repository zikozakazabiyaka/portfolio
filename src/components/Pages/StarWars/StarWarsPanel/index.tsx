import React, { ReactElement } from "react";

import './styles.scss';

interface IProps {
  children: ReactElement | ReactElement[];
}

const StarWarsPanel = ({ children }: IProps) => (
  <div className="star-wars__panel">{children}</div>
);

export default StarWarsPanel;
