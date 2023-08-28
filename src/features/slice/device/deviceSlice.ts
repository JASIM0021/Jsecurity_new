import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const DeviceSlice = createSlice({
  name: "device",
  initialState: {
    deviceInfo: {},
    deviceLocation: {},
    selectedDevice: {},
  },
  reducers: {
    saveDeviceInfo: (state, action) => {
      state.deviceInfo = action.payload;
    },
    saveDeviceLocation: (state, action) => {
      console.warn("save device to db", action);
      state.deviceLocation = action.payload;
    },
    saveSelectedDevice: (state, action) => {
      state.selectedDevice = action.payload;
    },
  },
});

export const { saveDeviceInfo, saveDeviceLocation, saveSelectedDevice } =
  DeviceSlice.actions;
export default DeviceSlice.reducer;
