import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice";
import uiReducer from "./features/uiSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
