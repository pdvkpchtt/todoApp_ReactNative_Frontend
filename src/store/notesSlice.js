import { createSlice } from "@reduxjs/toolkit";

import notes from "../data/notes";

const initialState = {
  notes: notes,
  filteredNotes: notes,
  category: "",
  refreshing: true,
};

export const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    updateNotes: (state, action) => {
      state.refreshing = true;
      state.category = "";
      state.filteredNotes = state.notes; // пока так
      state.refreshing = false;
    },
    filterNotes: (state, action) => {
      state.filteredNotes = state.notes.filter((item) =>
        item.head.toLowerCase().includes(action.payload.toLowerCase())
      );
    },
    setFilter: (state, action) => {
      state.category = action.payload;
      state.filteredNotes = state.notes.filter(
        (item) => item.category.toLowerCase() == action.payload
      );
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter((item) => item.id != action.payload);
      state.filteredNotes = state.notes;
    },
  },
});
