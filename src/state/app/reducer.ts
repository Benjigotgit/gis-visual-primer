import { combineReducers } from "@reduxjs/toolkit";
import { appSlice } from "./appState";

export const appReducer = combineReducers({
  [appSlice.name]: appSlice.reducer,
});

export const appReducerName = "app";
