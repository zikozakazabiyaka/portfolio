import React, { ChangeEventHandler } from "react";
import ControlInput from "../../components/ControlInput";
import Input from "../../components/Input";

interface IProps {
  isInvalid?: boolean;
  message?: string;
  value: string;
  onChange: ChangeEventHandler;
  [restProps: string]: any;
}

const ControlInputContainer = ({
  isInvalid,
  message,
  value,
  onChange,
  ...restProps
}: IProps) => (
  <ControlInput message={isInvalid ? message : ''}>
    <Input
      value={value}
      onChange={onChange}
      isInvalid={isInvalid}
      {...restProps}
    />
  </ControlInput>
);

export default ControlInputContainer;
