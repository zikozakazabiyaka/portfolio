import React, { ChangeEventHandler } from "react";
import classNames from "classnames";

import './styles.scss';

interface IProps {
  type?: 'text' | 'password';
  value?: string;
  onChange?: ChangeEventHandler;
  isInvalid?: boolean;
  [restProps: string]: any;
}

const Input = ({
  type = 'text',
  value,
  onChange,
  isInvalid = false,
  ...restProps
}: IProps) => (
  <input
    type={type}
    value={value}
    className={classNames('input', {
      'is-invalid': isInvalid
    })}
    onChange={onChange}
    {...restProps}
  />
);

export default Input;
