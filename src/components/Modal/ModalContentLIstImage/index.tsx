import classNames from "classnames";
import React, { ReactElement } from "react";

import './styles.scss';

interface IProps {
  children: ReactElement;
  size?: '20';
}

const ModalContentListImage = ({ children, size }: IProps) => (
  <div className={classNames("modal__content-list-image", {
    [`modal__content-list-image--${size}`]: size,
  })}>
    {children}
  </div>
);

export default ModalContentListImage;
