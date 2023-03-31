import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { script } from "../../script";
import { AppState } from "../../types/state";

const initialState: AppState = {
  currStepIndex: 0,
  currStepObj: script[0],
  sideNavOpen: true,
  scroll: 0
};

export const appSlice = createSlice({
  initialState,
  name: "appState",
  reducers: {
    setNextScript: (state, action: PayloadAction<number>) => {
    
      if(action.payload > state.currStepIndex){
      state.scroll += 300;
      window.scrollTo({
          top: state.scroll,
          left: 100,
          behavior: "smooth"})
      } else {
      //   state.scroll = (state.scroll - 300) * -1;
      // window.scrollTo({
      //     top: state.scroll,
      //     left: 100,
      //     behavior: "smooth"})
      }
          state.currStepIndex = action.payload;
          state.currStepObj = script[action.payload];
    },
    setSideNavOpen: (state, action: PayloadAction<boolean>) => {
      console.log("ok", action.payload);
      state.sideNavOpen = action.payload;
    },
  },
});

export const { setNextScript, setSideNavOpen } = appSlice.actions;
