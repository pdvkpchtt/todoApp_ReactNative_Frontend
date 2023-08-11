import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 1,
  username: "Martin",
  login: "admin",
  password: 1234,
  authorised: true,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    editUserName: (state, action) => {
      return {
        ...state,
        username: action.payload,
      };
    },
  },
});
