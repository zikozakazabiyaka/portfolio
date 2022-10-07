import React, { ChangeEventHandler, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";

import Container from "../../../components/Layout/Container";
import Todo from "../../../components/Pages/Todo";
import Button from "../../../components/Button";
import TodoContent from "../../../components/Pages/Todo/TodoContent";
import TodosList from "../../../components/Pages/Todo/TodoList";
import TodosLisItem from "../../../components/Pages/Todo/TodoListItem";
import TodoControls from "../../../components/Pages/Todo/TodoControls";
import TodoEmpty from "../../../components/Pages/Todo/TodoEmpty";
import TodoPanelContainer from "./TodoPanelContainer";
import ControlInputContainer from "../../ControlInputContainer";
import { isEmpty } from "../../../utils/validation";
import { textIsInvalid } from "../../../utils/validation";
import { errorMessageSelector, isInvalidSelector, listSelector } from "../../../store/todo/selectors";
import {
  setErrorMessage,
  clearErrorMessage,
  addTodoItem,
  removeTodoItem,
  setEditMode,
  updateTodoItem,
} from "../../../store/todo/actions";
import Actions from "../../../components/Actions";
import ActionsItem from "../../../components/Actions/ActionsItem";
import { RootState } from "../../../store";
import { TodoItemType } from "../../../store/todo/types";
import { EMPTY_FIELD, INCORRECT_TEXT } from "../../../constants/validation";
import { PageTitle } from "../../../components/PageTitle";

interface IProps {
  isInvalid?: boolean;
  errorMessage?: string;
  list: TodoItemType[];
  setError: (error: string) => void;
  clearError: () => void;
  addItem: (item: TodoItemType) => void;
  removeItem: (id: string) => void;
  editMode: (id: string) => void;
  updateItem: (item: TodoItemType) => void;
}

const mapStateToProps = (state: RootState) => ({
  isInvalid: isInvalidSelector(state),
  errorMessage: errorMessageSelector(state),
  list: listSelector(state),
});

const mapDispatchToProps = {
  setError: setErrorMessage,
  clearError: clearErrorMessage,
  addItem: addTodoItem,
  removeItem: removeTodoItem,
  editMode: setEditMode,
  updateItem: updateTodoItem
}

const TodoContainer = ({ 
  isInvalid,
  errorMessage,
  list,
  setError,
  clearError,
  addItem,
  removeItem,
  editMode,
  updateItem,
}: IProps) => {
  const [value, setValue] = useState('');

  const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    setValue(target.value);
  }

  const handleAddItem = () => {
    if (isEmpty(value.trim())) {
      setError(EMPTY_FIELD);
      setValue('');
    } else if (textIsInvalid(value)) {
      setError(INCORRECT_TEXT)
    } else {
      addItem({ id: uuidv4(), text: value, isEdit: false })
      errorMessage && clearError();
      setValue('');
    }
  }

  const handleRemoveItem = (id: string) => () => {
    removeItem(id);
  }

  const handleToggleEdit = (id: string) => () => {
    editMode(id);
  }

  const handleSave = (id: string) => (text: string) => {
    updateItem({id, text })
  }

  return (
    <>
      <PageTitle>Todo list</PageTitle>
      <Container>
        <Todo>
          <h2>Todo list</h2>
          <TodoContent>
            <TodoControls>
              <ControlInputContainer
                onChange={handleChange}
                value={value}
                placeholder="Type some value"
                isInvalid={isInvalid}
                message={errorMessage}
              />
              <Actions>
                <ActionsItem>
                  <Button fill="primary" onClick={handleAddItem}>Add</Button>
                </ActionsItem>
              </Actions>
            </TodoControls>
              {list.length
                ? (
                  <TodosList>
                    {list.map(item => (
                      <TodosLisItem key={item.id}>
                        <TodoPanelContainer
                          text={item.text}
                          onEdit={handleToggleEdit(item.id)}
                          onCancel={handleToggleEdit(item.id)}
                          onRemove={handleRemoveItem(item.id)}
                          onSave={handleSave(item.id)}
                          isEditMode={item.isEdit}
                        />
                      </TodosLisItem>
                    ))}
                  </TodosList>
                ) : <TodoEmpty>List is empty</TodoEmpty>
              }
          </TodoContent>
        </Todo>
      </Container>
    </>
  )
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
