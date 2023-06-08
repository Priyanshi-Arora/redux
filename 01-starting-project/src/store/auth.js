import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {isAuthenticated: false}

const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    logIn(state) {
      state.isAuthenticated = true;
    },
    logOut(state) {
      state.isAuthenticated = false;
    }
  }
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;

export default authSlice;
