import classNames from "classnames";
import React, { ReactElement } from "react";

import './styles.scss';

interface IProps {
  children: ReactElement;
  align?: 'left';
}

const ModalContentTitle = ({ children, align }: IProps) => (
  <div className={classNames("modal__content-title", {
    [`modal__content-title--${align}`]: align,
  })}>
    {children}
  </div>
);

export default ModalContentTitle;
