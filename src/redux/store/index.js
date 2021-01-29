import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "../features/layout/layoutSlice";
import authReducer from "../features/auth/authSlice";

const store = configureStore({
  reducer: {
    layout: layoutReducer,
    auth: authReducer,
  },
  preloadedState: {
    layout:
      localStorage.getItem("layoutState") != null
        ? JSON.parse(localStorage.getItem("layoutState"))
        : undefined,
  },
});

const handleChange = () => {
  if (store.getState() != null && store.getState().layout != null) {
    localStorage.setItem(
      "layoutState",
      JSON.stringify(store.getState().layout)
    );
  }
};

store.subscribe(handleChange);

export default store;
