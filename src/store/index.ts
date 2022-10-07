import { CombinedState, configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
import logger from "redux-logger";

import reducers from "./reducers";

export const store = configureStore({
  reducer: reducers,
  middleware: [logger, thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type GetState = CombinedState<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
