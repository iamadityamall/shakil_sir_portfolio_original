import { configureStore } from "@reduxjs/toolkit";
import { navReducer } from "./Features/Navbar/navSlice";

const store = configureStore({
  reducer: {
    navbar: navReducer,
  },
});

export default store;
