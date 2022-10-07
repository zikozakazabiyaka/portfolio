import React, { ReactElement } from "react";

import './styles.scss';

interface IProps {
  children: ReactElement | ReactElement[];
}

const ModalContentInfo = ({ children }: IProps) => (
  <div className="modal__content-info">
    {children}
  </div>
);

export default ModalContentInfo;
