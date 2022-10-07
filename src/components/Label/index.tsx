import React from "react";
import classNames from "classnames";

import './styles.scss';

interface IProps {
  children: string;
  isRequired?: boolean;
  [restProps: string]: any;
}

const Label = ({ children, isRequired, ...restProps }: IProps) => (
  <label
    className={classNames('label', {
      'is-required': isRequired,
    })}
    {...restProps}
  >
    {children}
  </label>
);

export default Label;
