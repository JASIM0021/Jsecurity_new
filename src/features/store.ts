import { configureStore, combineReducers } from "@reduxjs/toolkit";
import GlobalSlice from "./slice/GlobalSlice";
import globalApiSlice from "./api/globalApiSlice";

const rootReducer = combineReducers({
  globalReducer: GlobalSlice,
  [globalApiSlice.reducerPath]: globalApiSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(globalApiSlice.middleware),
});

export default store;
