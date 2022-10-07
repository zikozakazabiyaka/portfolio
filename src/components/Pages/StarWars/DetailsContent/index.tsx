import React, { ReactElement } from "react";

import  "./styles.scss";

interface IProps {
  children: ReactElement | ReactElement[];
}

const DetailsContent = ({ children }: IProps) => (
  <div className="details-content">{children}</div>
);

export default DetailsContent;
