import {
  SET_ERROR_MESSAGE,
  CLEAR_ERROR_MESSAGE,
  ADD_TODO_ITEM,
  REMOVE_TODO_ITEM,
  UPDATE_TODO_ITEM,
  SET_EDIT_MODE
} from "./constants";

import { TodoType } from "./types";

export const INITIAL_TODO_STATE: TodoType = {
  isInvalid: false,
  errorMessage: '',
  list: [],
};

const todoReducer = (state = INITIAL_TODO_STATE, action: any) => {
  switch (action.type) {
    case SET_ERROR_MESSAGE:
      return { ...state, errorMessage: action.payload, isInvalid: true };
    case CLEAR_ERROR_MESSAGE:
      return { ...state, errorMessage: '', isInvalid: false };
    case ADD_TODO_ITEM:
      return { ...state, list: [...state.list, { id: action.payload.id, text: action.payload.text }]};
    case REMOVE_TODO_ITEM:
      return { ...state, list: state.list.filter(item => item.id !== action.payload) };
    case SET_EDIT_MODE:
      return { ...state, list: state.list.map(item => item.id === action.payload ? {...item, isEdit: !item.isEdit } : item)};
    case UPDATE_TODO_ITEM:
      return { ...state, list: state.list.map(item => item.id === action.payload.id ? { ...item, text: action.payload.text, isEdit: false } : item)}
    default:
      return state
  }
}

export default todoReducer;
