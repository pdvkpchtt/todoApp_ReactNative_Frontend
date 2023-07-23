import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "theme_usual",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
});
