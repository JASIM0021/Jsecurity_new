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
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './src/features/store';
import FlashMessage from 'react-native-flash-message';
import HomeNavigation from './src/navigation/HomeNavigation';
import AuthNavigation from './src/navigation/AuthNavigation';
import { LogBox } from 'react-native';
import 'react-native-gesture-handler';
import getDeviceInfo from './src/logic/DeviceInfo';
import { saveDeviceInfo } from './src/features/slice/device/deviceSlice';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import OneSignal from 'react-native-onesignal';
import { saveUser } from './src/features/slice/GlobalSlice';




LogBox.ignoreAllLogs();
function  App(): JSX.Element {
// const {selectedDeviceId,deviceInfo}=useSelector((state:any)=>state.deviceSlice)

  const [user,setUser]=useState({
    idToken:''
  })
  const [isSignIn,setIsSignin]=useState(false)
const dispatch =useDispatch()
  const getUser =async()=>{
  const isSignedIn =await GoogleSignin.isSignedIn()
  setIsSignin(isSignedIn)
  const result=  await AsyncStorage.getItem('user')
 
  const parseValue = await JSON.parse(result as string)
  setUser(parseValue);
  dispatch(saveUser(parseValue));

    }
   useEffect(()=>{
    getUser();
    (async()=>{
    const playerId=await OneSignal.getDeviceState()


      const devicedata=await getDeviceInfo()
      if(devicedata){

        await dispatch(saveDeviceInfo({...devicedata, playerId: playerId?.userId}))
      }

     }
      )()



   },[isSignIn])

  const colorModeManager: StorageManager = {
    get: async () => {
      try {
        let val = await AsyncStorage.getItem("@my-app-color-mode");
        return val === "dark" ? "dark" : "light";
      } catch (e) {
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
   

    <>
   <NativeBaseProvider theme={Thems} colorModeManager={colorModeManager} config={Thems.config}>

 {
  isSignIn? <HomeNavigation/>:<AuthNavigation/>
 }
</NativeBaseProvider>
<FlashMessage position="top" />
</>

  )
}



export default App;
