import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  makes: {},
};

const filtersSlice = createSlice({
  name: "filter",
  initialState,

  selectors: {
    selectNameFilter: (state) => state.makes,
  },

  reducers: {
    changeFilter: (state, action) => {
      state.makes = action.payload;
    },
    reset: (state) => {
      state.makes = {};
    },
  },
});

export const filterReducer = filtersSlice.reducer;
export const { changeFilter, reset } = filtersSlice.actions;
export const { selectNameFilter } = filtersSlice.selectors;
