import { createSlice } from "@reduxjs/toolkit";

import notes from "../data/notes";

const initialState = {
  notes: notes,
  filteredNotes: notes,
  refreshing: true,
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    updateNotes: (state, action) => {
      state.refreshing = true;
      state.filteredNotes = notes;
      state.refreshing = false;
    },
    filterNotes: (state, action) => {
      state.filteredNotes = state.notes.filter((item) =>
        item.head.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
  },
});
