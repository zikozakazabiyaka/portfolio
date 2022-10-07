import React, { ReactElement } from "react";
import classNames from "classnames";

import './styles.scss';

interface IProps {
  children: ReactElement | ReactElement[];
  listStyle?: 'none';
}

const SectionList = ({ children, listStyle }: IProps) => (
  <ul className={classNames("section__list", {
    [`section__list--${listStyle}`]: listStyle,
  })}
  >
    {children}
  </ul>
);

export default SectionList;
