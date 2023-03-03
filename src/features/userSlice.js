import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //login and logout are called actions
    //we can dispatch an action and it will run whats inside actions and can manupulate
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

//login and logout can be accessed outside
export const { login, logout } = userSlice.actions;

//selector
export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
