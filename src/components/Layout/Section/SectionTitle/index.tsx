import React, { ReactElement } from "react";
import classNames from "classnames";

import './styles.scss';

interface IProps {
  children: ReactElement;
  color?: 'brown';
}

const SectionTitle = ({ children, color }: IProps) => (
  <div className={classNames("section__title", {
    [`section__title--${color}`]: color,
  })}
  >
    {children}
  </div>
);

export default SectionTitle;
