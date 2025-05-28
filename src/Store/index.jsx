import { configureStore } from "@reduxjs/toolkit";
import countryReducer from "../redux/countrySlice.jsx";

const store = configureStore({
  reducer: {
    country: countryReducer,
  },
});

export default store;