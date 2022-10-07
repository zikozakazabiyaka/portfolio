import React, { ReactNode } from "react";
import Button from "../Button";
import cross from "../../images/cross.svg";

import './styles.scss';

interface IProps {
  children: ReactNode;
  onClose: () => void;
}

const Modal = ({ children, onClose }: IProps) => (
  <div className="modal-overlay">
    <div className="modal">
      <div className="modal__close">
        <Button onClick={onClose} shape="square" icon={<img src={cross} alt="close" />} />
      </div>
      <div className="modal__content">
        {children}
      </div>
    </div>
  </div>
);

export default Modal;
