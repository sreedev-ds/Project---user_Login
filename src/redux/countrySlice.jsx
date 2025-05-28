import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  all: [],
  region: "All",
};

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {
    setCountries: (state, action) => {
      state.all = action.payload;
    },
    setRegion: (state, action) => {
      state.region = action.payload;
    },
  },
});

export const { setCountries, setRegion } = countrySlice.actions;
export default countrySlice.reducer;