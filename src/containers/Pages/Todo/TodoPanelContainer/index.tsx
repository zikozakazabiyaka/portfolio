import React, { useState, ChangeEventHandler } from "react";
import Button from "../../../../components/Button";
import TodoInfo from "../../../../components/Pages/Todo/TodoInfo";
import TodoPanel from "../../../../components/Pages/Todo/TodoPanel";
import ControlInputContainer from "../../../ControlInputContainer";
import Actions from "../../../../components/Actions";
import ActionsItem from "../../../../components/Actions/ActionsItem";
import { isEmpty } from "../../../../utils/validation";
import { textIsInvalid } from "../../../../utils/validation";
import { EMPTY_FIELD, INCORRECT_TEXT } from "../../../../constants/validation";

interface IProps {
  text: string;
  isEditMode?: boolean;
  onCancel: () => void;
  onSave: (text: string) => void;
  onEdit: () => void;
  onRemove: () => void;
}

const TodoPanelContainer = ({ 
  text,
  isEditMode = false,
  onCancel,
  onSave,
  onEdit,
  onRemove,
}: IProps) => {
  const [value, setValue] = useState(text);
  const [isInvalid, setIsInvalid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setValue(target.value);
  }

  const handleCancel = () => {
    if (text !== value) {
      setValue(text);
    }
    isInvalid && setIsInvalid(false);
    errorMessage && setErrorMessage('');
    onCancel();
  }

  const handleSave = () => {
    if (isEmpty(value.trim())) {
      setIsInvalid(true);
      setErrorMessage(EMPTY_FIELD)
    } else if (textIsInvalid(value)) {
      setIsInvalid(true);
      setErrorMessage(INCORRECT_TEXT)
    } else {
      isInvalid && setIsInvalid(false);
      errorMessage && setErrorMessage('');
      onSave(value);
    }
  }

  return (
    <TodoPanel>
      {isEditMode 
        ? (
          <>
            <ControlInputContainer
              onChange={handleChange}
              value={value}
              placeholder="Type some value"
              isInvalid={isInvalid}
              message={errorMessage}
            />
            <Actions>
              <ActionsItem>
                <Button fill="secondary" onClick={handleCancel}>Cancel</Button>
              </ActionsItem>
              <ActionsItem>
                <Button fill="primary" onClick={handleSave}>Save</Button>
              </ActionsItem>
            </Actions>
          </>
      ) : (
        <>
          <TodoInfo>{value}</TodoInfo>
          <Actions>
            <ActionsItem>
              <Button fill="secondary" onClick={onEdit}>Edit</Button>
            </ActionsItem>
            <ActionsItem>
              <Button fill="invalid" onClick={onRemove}>Remove</Button>
            </ActionsItem>
          </Actions>
        </>
      )}
    </TodoPanel>
  )
}

export default TodoPanelContainer;
