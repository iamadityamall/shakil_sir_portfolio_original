import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSidebar: false,
  isDarkmode: false,
};

const navSlice = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    toggleSidebarButton: (state, action) => {
      state.showSidebar = action.payload;
    },
    toggleDarkmodeButton: (state) => {
      state.isDarkmode = !state.isDarkmode;
    },
  },
});

export const { toggleSidebarButton, toggleDarkmodeButton } = navSlice.actions;
export const navReducer = navSlice.reducer;
