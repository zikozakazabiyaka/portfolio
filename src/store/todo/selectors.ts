import { RootState } from "..";

export const errorMessageSelector = (state: RootState) => state.todoList.errorMessage;
export const isInvalidSelector = (state: RootState) => state.todoList.isInvalid;
export const listSelector = (state: RootState) => state.todoList.list;
