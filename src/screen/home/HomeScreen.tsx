import React, { useEffect, useMemo } from 'react';
import { ActivityIndicator, Button, StatusBar, StyleSheet, View } from 'react-native';
import { Drawer } from 'react-native-drawer-layout';
import { SafeAreaView } from 'react-native-safe-area-context';
import Sidebar from '../components/SideBar';
import AppBar from '../components/AppBar/Appbar';
import { Center } from 'native-base';
import { AlertDialog } from 'native-base';
import CustomAlertDialog from '../components/Alert/AlertDilog';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import NavigationString from '../../constant/NavigationString';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { requestLocationPermission } from '../../permission/locationPermission';
// import Geolocation from '@react-native-community/geolocation';
import RNAndroidLocationEnabler from 'react-native-android-location-enabler';
import Geolocation from '@react-native-community/geolocation';
import BarcodeScanner from './BarcodeScanner';
import { useDispatch, useSelector } from 'react-redux';
import { saveUser } from '../../features/slice/GlobalSlice';
import getDeviceInfo from '../../logic/DeviceInfo';
import { saveDeviceInfo, saveDeviceLocation } from '../../features/slice/device/deviceSlice';
import { useSaveDeviceToDbMutation } from '../../features/api/device/deviceSlice';
 


const HomeScreen = (): JSX.Element => {

  // hooks
  const [user, setUser] = React.useState({
    user:{}
  });
  const [showMenu, setShowMenu] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [isDilogOPen,setIsDilogOpen]=React.useState(false);
  const navigation =useNavigation()

  // redux state 
const {deviceInfo,deviceLocation}=useSelector((state:any)=>state.deviceSlice)
const dispatch=useDispatch()

const [saveedviseInformation,{data,isLoading}]=useSaveDeviceToDbMutation()
  


  // function
  const handleLogout=async()=>{
    AsyncStorage.clear()
    GoogleSignin.signOut();
    navigation.navigate(NavigationString.auth)
    setIsDilogOpen(false)
  }

  const getLocation =async()=>{
    RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
      interval: 1000,
      fastInterval: 500,
    })

      .then((data) => {
        console.log('data', data)
      })
      .catch((err) => {
       console.log('err', err)
      });

      Geolocation.getCurrentPosition((position)=>{
        dispatch(saveDeviceLocation(position))
        
       })


  }
  const getUser =async()=>{
    const result=  await AsyncStorage.getItem('user')
    const parseValue = await JSON.parse(result as string)
    console.log('parseValue', parseValue)
    setUser(parseValue);
    dispatch(saveUser(parseValue));
 
    }
    useEffect(()=>{
      getUser();
    
   
    },[])
    useEffect(()=>{
      if(deviceInfo?.deviceName){
        saveedviseInformation({
          deviceId:deviceInfo?.androidId,
          deviceName:deviceInfo?.deviceInfo,

          location:deviceLocation,
          userId:user?.user?.id,
          otherData:deviceInfo
        
        })
      }
    },[deviceInfo])

  // useEffect(()=>{
  //   requestLocationPermission()
  //   const Intraval =setInterval(()=>{
  //     (async()=>{
  //       const devicedata=await getDeviceInfo()
  //       if(devicedata){
  
  //          dispatch(saveDeviceInfo(devicedata))
  //       }
  
  //      }
  //       )()
  //     getLocation()
  //   },5000)
  //   getLocation()

  //   return ()=>{
  //     clearInterval(Intraval)
  //   }
  // },[])
  // if (device == null) return <ActivityIndicator color={'blue'} />
  return (
    < >
       <Drawer
      open={open}
      drawerType='front'
      statusBarAnimation='slide'
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderDrawerContent={() => {
        return <Sidebar profileImage={user?.user?.photo} name={user?.user?.name} email={user?.user?.email} onProfileSettings={()=>{}} onAccount={()=>{}} onDevices={()=>{}} onLogout={()=>{setIsDilogOpen(true)}}/>
      }}
    >
    

 

      <AppBar onHambunger={()=>setOpen((prevOpen) => !prevOpen)} title='Home'/>
 
 
       
<BarcodeScanner user={user} />

   
    </Drawer>
   
    <CustomAlertDialog isOpen={isDilogOPen} setIsOpen={setIsDilogOpen} header="logout" body="are you sure to logout , if you sure then press okey " onOkey={()=>{

    handleLogout()
    }}/>





    </>


     
  )
};

export default HomeScreen;
