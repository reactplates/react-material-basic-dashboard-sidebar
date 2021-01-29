import { createSlice } from "@reduxjs/toolkit";

export const layoutSlice = createSlice({
  name: "layout",
  initialState: {
    darkMode: false,
    sidebarOpen: true,
    mobileSidebarOpen: false,
  },
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    setDarkMode: (state, action) => {
      state.darkMode = action.payload;
    },
    setSidebarOpen: (state, action) => {
      state.sidebarOpen = action.payload;
    },
    setMobileSidebarOpen: (state, action) => {
      state.mobileSidebarOpen = action.payload;
    },
  },
});

export const {
  toggleDarkMode,
  setDarkMode,
  setSidebarOpen,
  setMobileSidebarOpen,
} = layoutSlice.actions;

// Selectors
export const selectDarkMode = (state) => state.layout.darkMode;
export const selectSidebarOpen = (state) => state.layout.sidebarOpen;
export const selectMobileSidebarOpen = (state) =>
  state.layout.mobileSidebarOpen;

export default layoutSlice.reducer;
