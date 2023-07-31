import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";
import NavigationString from "../../constant/NavigationString";

const GlobalSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    initialScreen: NavigationString.OnBoarding,
  },
  reducers: {
    saveUser: (state, action) => {
      state.user = action.payload;
      AsyncStorage.setItem("user", JSON.stringify(state.user));
    },
    changeInitialScreen: (state, action) => {
      state.initialScreen = action.payload;
    },
  },
});

export const { saveUser } = GlobalSlice.actions;
export default GlobalSlice.reducer;
