import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { LangReducer } from "./Lang.reducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({ langState: LangReducer });
const middleware = [thunk];
const LangStore = legacy_createStore(
  rootReducer,
  applyMiddleware(...middleware)
);
export default LangStore;
