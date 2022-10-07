import React, { ReactElement } from "react";
import classNames from "classnames";

import './styles.scss';

interface IProps {
  children: ReactElement | ReactElement[];
  align?: 'right';
}

const SectionItem = ({ children, align}: IProps) => (
  <div className={classNames("section__item", {
    [`section__item--${align}`]: align,
  })}
  >
    {children}
  </div>
);


export default SectionItem;
