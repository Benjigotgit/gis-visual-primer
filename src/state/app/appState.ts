import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { script } from "../../script";

const initialState = {
  currStepIndex: 0,
  currStepObj: script[0],
};

export const appSlice = createSlice({
  initialState,
  name: "appState",
  reducers: {
    setNextStep: (state, action: PayloadAction<number>) => {
      state.currStepIndex = action.payload;
      state.currStepObj = script[action.payload];
    },
  },
});

export const { setNextStep } = appSlice.actions;
