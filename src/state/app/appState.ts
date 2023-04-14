import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { script } from "../../script";
import { AppState } from "../../types/state";

const initialState: AppState = {
  currStepIndex: 0,
  currStepObj: script[0],
  sideNavOpen: true,
};

export const appSlice = createSlice({
  initialState,
  name: "appState",
  reducers: {
    setNextScript: (state, action: PayloadAction<number>) => {
      try{
        state.currStepIndex = action.payload;
        state.currStepObj = script[action.payload];
      } catch {
        
      }
        
    },
    setSideNavOpen: (state, action: PayloadAction<boolean>) => {
      console.log("ok", action.payload);
      state.sideNavOpen = action.payload;
    },
  },
});

export const { setNextScript, setSideNavOpen } = appSlice.actions;
