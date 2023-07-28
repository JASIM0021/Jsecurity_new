/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import Navigation from './src/navigation/Navigation';
import { Center, ColorMode, NativeBaseProvider, StorageManager } from 'native-base';
import Thems from './src/constant/them';
import AsyncStorage from '@react-native-async-storage/async-storage';






function  App(): JSX.Element {

  const colorModeManager: StorageManager = {
    get: async () => {
      try {
        let val = await AsyncStorage.getItem("@my-app-color-mode");
        return val === "dark" ? "dark" : "light";
      } catch (e) {
        console.log(e);
        return "light";
      }
    },
    set: async (value: ColorMode) => {
      try {
        await AsyncStorage.setItem("@my-app-color-mode", value as string);
      } catch (e) {
        console.log(e);
      }
    },

  }






  return (
   


   <NativeBaseProvider theme={Thems} colorModeManager={colorModeManager} config={Thems.config}>

  <Navigation/>
</NativeBaseProvider>

  )
}



export default App;
