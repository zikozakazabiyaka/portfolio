import React, { ChangeEventHandler } from "react";

import './styles.scss';

interface IProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
  isChecked?: boolean;
  text?: string;
}

const Checkbox = ({ onChange, isChecked, text }: IProps) => (
  <label className="checkbox">
    <input
      className="checkbox__input"
      type="checkbox"
      checked={isChecked}
      onChange={onChange}
    />
    <span className="checkbox__shape">
      {isChecked && (
        <svg viewBox="0 0 16 12" fill="none">
          <path
            d="M2 4.5L6 10L14 1"
            strokeWidth="2"
            stroke="#fff"
          />
       </svg>
      )}
    </span>
    {text && <span className="checkbox__text">{text}</span>}
  </label>
);

export default Checkbox;
