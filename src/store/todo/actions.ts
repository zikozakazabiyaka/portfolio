import {
  SET_ERROR_MESSAGE,
  CLEAR_ERROR_MESSAGE,
  ADD_TODO_ITEM,
  REMOVE_TODO_ITEM,
  UPDATE_TODO_ITEM,
  SET_EDIT_MODE,
} from './constants';

import { TodoItemType } from './types';

export const setErrorMessage = (payload: string) => ({ type: SET_ERROR_MESSAGE, payload });
export const clearErrorMessage = () => ({ type: CLEAR_ERROR_MESSAGE });
export const addTodoItem = (payload: TodoItemType) => ({ type: ADD_TODO_ITEM, payload });
export const removeTodoItem = (payload: string) => ({ type: REMOVE_TODO_ITEM, payload });
export const setEditMode = (payload: string) => ({ type: SET_EDIT_MODE, payload });
export const updateTodoItem = (payload: TodoItemType) => ({ type: UPDATE_TODO_ITEM, payload });
