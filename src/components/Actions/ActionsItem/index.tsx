import React, { ReactElement } from "react";
import classNames from "classnames";

import './styles.scss';

interface IProps {
  children: ReactElement;
  width?: 'md';
  widthAuto?: boolean;
}

const ActionsItem = ({ children, width, widthAuto }: IProps) => (
  <div className={classNames("actions__item", {
    [`actions__item--${width}`]: width,
    'actions__item--width-auto': widthAuto,
  })}>
    {children}
  </div>
);

export default ActionsItem;
