import React from "react";
import classNames from "classnames";

import './styles.scss';
import loader from '../../images/loader.svg';

interface IProps {
  text?: string;
  size?: 'sm';
}

const Loader = ({ text, size }: IProps) => (
  <div className={classNames('loader', {
    [`loader--${size}`]: size,
  })}>
    <div className="loader__content">
      <img src={loader} alt="loader" />
      {text && <span>{text}</span>}
    </div>
  </div>
);

export default Loader;
