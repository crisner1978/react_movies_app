import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isAuthenticated: false,
  sessionId: "",
  profileImg: '',
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
      state.isAuthenticated = true;
      state.sessionId = localStorage.getItem("session_id");
      state.profileImg = payload?.avatar?.tmdb?.avatar_path 
      localStorage.setItem("accountId", payload.id);
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;

export const userSelector = (state) => state.user;
