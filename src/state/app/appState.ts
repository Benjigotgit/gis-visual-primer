import { createSlice } from "@reduxjs/toolkit";
import { script } from "../../script";
import { AppState } from "../../types/state";

import type { PayloadAction } from "@reduxjs/toolkit";
import type { Marker, Map } from "mapbox-gl";

const initialState: AppState = {
  currStepIndex: 0,
  currStepObj: script[0],
  sideNavOpen: true,
  scroll: 0,
  scriptBlockOffsets: [],
  markers: [],
};

export const appSlice = createSlice({
  initialState,
  name: "appState",
  reducers: {
    setNextScript: (state, action: PayloadAction<number>) => {
      try {
        state.currStepIndex = action.payload;
        state.currStepObj = script[action.payload];
      } catch {}
    },
    setSideNavOpen: (state, action: PayloadAction<boolean>) => {
      state.sideNavOpen = action.payload;
    },
    setScriptBlockOffsets: (state, action: PayloadAction<number[]>) => {
      state.scriptBlockOffsets = action.payload;
    },
    setMarkers: (state, action: PayloadAction<Marker>) => {
      state.markers = [...state.markers, action.payload];
    },
    removeMarkers: (state, action: PayloadAction<Map>) => {
      state.markers.forEach((marker) => {
        marker.remove();
      });
      state.markers = [];
    },
    resetState: (state, action) => {
      state.currStepIndex = 0;
      state.currStepObj = script[0];
      state.sideNavOpen = true;
      state.scroll = 0;
      state.scriptBlockOffsets = [];
      state.markers = [];
    },
  },
});

export const {
  setNextScript,
  setSideNavOpen,
  setScriptBlockOffsets,
  setMarkers,
  removeMarkers,
  resetState,
} = appSlice.actions;
