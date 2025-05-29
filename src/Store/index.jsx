
import { configureStore } from '@reduxjs/toolkit';
import countryReducer from '../redux/countrySlice.jsx';
import loginReducer from '../redux/loginSlice.jsx'; 

export const store = configureStore({
  reducer: {
    country: countryReducer,
    login: loginReducer,
  },
});
