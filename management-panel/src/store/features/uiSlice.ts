import { createSlice } from "@reduxjs/toolkit";

interface UiState {
  sidebarOpen: boolean;
}

const initialState: UiState = {
  sidebarOpen: window.innerWidth > 768,
};

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    closeSidebar: (state) => {
      state.sidebarOpen = false;
    },
  },
});

export const { toggleSidebar, closeSidebar } = uiSlice.actions;
export default uiSlice.reducer;
