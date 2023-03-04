import { AllState } from "../../types/state";
import { appReducerName } from "./reducer";
import { appSlice } from "./appState";
import { RootState } from "../store";

export const appSelector = (state: RootState) => state[appReducerName];

export const appStateSelector = (state: RootState) => appSelector(state)[appSlice.name];
