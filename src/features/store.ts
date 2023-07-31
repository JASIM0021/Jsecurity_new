import { configureStore, combineReducers } from "@reduxjs/toolkit";
import GlobalSlice from "./slice/GlobalSlice";

const rootReducer = combineReducers({
  globalReducer: GlobalSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
