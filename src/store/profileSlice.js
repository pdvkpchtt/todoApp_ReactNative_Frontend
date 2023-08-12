import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 1,
  username: "Martin",
  login: "admin",
  password: "1234",
  authorized: true,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    editProfileInfo: (state, action) => {
      return {
        ...state,
        username: action.payload.username,
        login: action.payload.login,
        password: action.payload.password,
      };
    },
    logOut: (state, action) => {
      return {
        ...state,
        authorized: false,
      };
    },
    logIn: (state, action) => {
      return {
        ...state,
        authorized: true,
      };
    },
  },
});
