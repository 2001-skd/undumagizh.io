import { createSlice } from "@reduxjs/toolkit";

const bookMarkSlice = createSlice({
  name: "bookmark",
  initialState: { items: [] },
  reducers: {
    addBookMark: (state, action) => {
      state.items.push(action.payload);
    },
    deleteBookMark: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },

    resetBookMark: (state) => {
      state.items = [];
    },
  },
});

export default bookMarkSlice.reducer;
export const { addBookMark, deleteBookMark, resetBookMark } =
  bookMarkSlice.actions;
