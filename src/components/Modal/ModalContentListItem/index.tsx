import classNames from "classnames";
import React, { ReactElement } from "react";

import './styles.scss';

interface IProps {
  children: ReactElement | ReactElement[];
  display?: 'flex';
  direction?: 'column';
  width?: '50';
}

const ModalContentListItem = ({ children, display, direction, width }: IProps) => (
  <li className={classNames("modal__content-list-item", {
    [`modal__content-list-item--${display}`]: display,
    [`modal__content-list-item--${width}`]: width,
    [`modal__content-list-item--${direction}`]: display === 'flex' ? direction : undefined,
  })}>
    {children}
  </li>
);

export default ModalContentListItem;
