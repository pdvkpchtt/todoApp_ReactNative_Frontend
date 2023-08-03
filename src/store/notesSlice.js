import { createSlice } from "@reduxjs/toolkit";

import notes from "../data/notes";

const initialState = {
  notes: notes,
  refreshing: true,
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    updateNotes: (state, action) => {
      state.refreshing = true;
      state.notes = notes;
      state.refreshing = false;
    },
  },
});
