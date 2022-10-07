export type TodoItemType = {
  id: string;
  text: string;
  isEdit?: boolean;
}

export type TodoType = {
  isInvalid: boolean;
  errorMessage: string;
  list: TodoItemType[];
}
