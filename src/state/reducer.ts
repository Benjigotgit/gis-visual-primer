import { combineReducers } from "@reduxjs/toolkit";
import { AppStateActions } from "../types/state";
import { appReducer, appReducerName } from "./app/reducer";

export const applicationReducer = combineReducers({
  [appReducerName]: appReducer,
});

export const mainReducer = (state: any, action: { type: AppStateActions }) => {
  return applicationReducer(state, action);
};
