import React, { ReactElement } from "react";

import  "./styles.scss";

interface IProps {
  children: ReactElement | ReactElement[];
}

const StarWarsContent = ({ children }: IProps) => (
  <div className="star-wars__content">{children}</div>
);

export default StarWarsContent;
