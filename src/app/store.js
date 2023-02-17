import { configureStore } from "@reduxjs/toolkit";
import peopleReducer from "./reducers/peopleSlice";

const rootReducer = {
  people: peopleReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});
