import classNames from "classnames";
import React, { ReactElement } from "react";

import './styles.scss';

interface IProps {
  children: ReactElement | ReactElement[];
  direction?: 'row';
  gap?: 'xxs';
  fullWidth?: boolean;
  wrap?: 'wrap';
}

const ModalContentList = ({ children, direction, gap, fullWidth, wrap }: IProps) => (
  <ul className={classNames('modal__content-list', {
    [`modal__content-list--${direction}`]: direction,
    [`modal__content-list--${gap}`]: gap,
    [`modal__content-list--${wrap}`]: direction === 'row' ? wrap : undefined,
    'modal__content-list--full-width': fullWidth,
  })}>
    {children}
  </ul>
);

export default ModalContentList;
