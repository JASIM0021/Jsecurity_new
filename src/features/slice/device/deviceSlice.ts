import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const DeviceSlice = createSlice({
  name: "device",
  initialState: {
    deviceInfo: {},
    deviceLocation: {},
  },
  reducers: {
    saveDeviceInfo: (state, action) => {
      console.warn("action", action);
      state.deviceInfo = action.payload;
    },
    saveDeviceLocation: (state, action) => {
      state.deviceLocation = action.payload;
    },
  },
});

export const { saveDeviceInfo, saveDeviceLocation } = DeviceSlice.actions;
export default DeviceSlice.reducer;
