/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect, useState } from 'react';
import Navigation from './src/navigation/Navigation';
import { Center, ColorMode, NativeBaseProvider, StorageManager } from 'native-base';
import Thems from './src/constant/them';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider } from 'react-redux';
import store from './src/features/store';
import FlashMessage from 'react-native-flash-message';
import HomeNavigation from './src/navigation/HomeNavigation';
import AuthNavigation from './src/navigation/AuthNavigation';
import { LogBox } from 'react-native';
import 'react-native-gesture-handler';




LogBox.ignoreAllLogs();
function  App(): JSX.Element {
  const [user,setUser]=useState({
    idToken:null,
  })
  console.log('user', user)

  const getUser =async()=>{
    const result=  await AsyncStorage.getItem('user')
    const parseValue = await JSON.parse(result as string)
    setUser(parseValue);
    if(parseValue?.idToken){
      console.log('first')
    }
    }
   useEffect(()=>{
    getUser();

   },[])

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
   

    <Provider store={store}>
   <NativeBaseProvider theme={Thems} colorModeManager={colorModeManager} config={Thems.config}>

 {
  user?.idToken ? <HomeNavigation/>:<AuthNavigation/>
 }
</NativeBaseProvider>
<FlashMessage position="top" />
</Provider>

  )
}



export default App;
