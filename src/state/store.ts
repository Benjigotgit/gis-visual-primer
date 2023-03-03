import { configureStore } from "@reduxjs/toolkit";
import { mainReducer } from "./reducer";

export const store = configureStore({
  reducer: mainReducer,
  middleware: (getDefaultMiddleware) => {
    const middlewares = getDefaultMiddleware();
    return middlewares;
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
