import type { script } from "../script";
import { ScriptObj } from "./script";

export interface AllState {
  app: AppState;
}

export interface AppState {
  currStepIndex: number;
  currStepObj: ScriptObj;
}

export enum AppStateActions {
  SET_NEXT_STEP,
}