import type { Marker } from "mapbox-gl";
import type { ScriptObj } from "./script";

export interface AllState {
  app: AppState;
}

export interface AppState {
  currStepIndex: number;
  currStepObj: ScriptObj;
  sideNavOpen: boolean;
  scroll: number;
  scriptBlockOffsets: number[];
  markers: Marker[];
}

export enum AppStateActions {
  setNextScript,
  setSideNavOpen,
}
