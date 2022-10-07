import { combineReducers } from "@reduxjs/toolkit";

import loginReducer from "./login/reducer";
import modalReducer from "./modal/reducer";
import pokemonReducer from "./pokemon/reducer";
import starWarsReducer from "./starWars/reducer";
import todoReducer from "./todo/reducer";

const reducer = combineReducers({
  todoList: todoReducer,
  loginForm: loginReducer,
  starWars: starWarsReducer,
  pokemon: pokemonReducer,
  modal: modalReducer,
});

export default reducer;
