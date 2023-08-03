import { configureStore } from "@reduxjs/toolkit";

import { themeSlice } from "./themeSlice";
import { notesSlice } from "./notesSlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    notes: notesSlice.reducer,
  },
});
