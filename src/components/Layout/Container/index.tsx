import React, { ReactElement } from "react";

import "./styles.scss";

interface IProps {
  children: ReactElement | ReactElement[];
}

const Container = ({ children }: IProps) => (
  <div className="container">{children}</div>
);

export default Container;
