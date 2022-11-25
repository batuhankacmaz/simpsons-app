import {configureStore} from "@reduxjs/toolkit";
import simpsonReducer from "./simpsonSlice";

export const store = configureStore({
  reducer: {simpson: simpsonReducer},
});
