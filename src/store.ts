import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import toggleReducer from "./toggleReducer";

const reducers = combineReducers({
  toggles: toggleReducer,
});

export const store = createStore(reducers, composeWithDevTools());

export type RootState = ReturnType<typeof store.getState>;
