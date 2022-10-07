import { ReactElement } from 'react';
import ReactDOM from 'react-dom';

interface IProps {
  children: ReactElement,
}

const ModalPortal = ({ children }: IProps) => {
  const modalRoot = document.getElementById('modal-root');

  return ReactDOM.createPortal(children, modalRoot as HTMLElement | DocumentFragment );
}

export default ModalPortal;
