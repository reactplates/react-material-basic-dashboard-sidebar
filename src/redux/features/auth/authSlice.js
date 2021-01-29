import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      id: "abc123",
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    doLogin: (state, action) => {
      state.user = action.payload;
    },
    doLogout: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, doLogin, doLogout } = authSlice.actions;

// Selectors
export const selectUser = (state) => state.auth.user;
export const selectIsLoggedIn = (state) => state.auth.user != null;

export default authSlice.reducer;
