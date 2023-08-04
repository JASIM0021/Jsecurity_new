import { ActivityIndicator, Alert, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Box, Button, Center, HStack, Heading, Image, Link, useTheme } from 'native-base'
import { VStack } from 'native-base'
import { FormControl } from 'native-base'
import { Input } from 'native-base'
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import auth from '@react-native-firebase/auth';
import CustomButton from '../components/CustomButton'
import NavigationString from '../../constant/NavigationString'
import ImagePath from '../../constant/ImagePath'
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin'
import sizes from 'native-base/lib/typescript/theme/base/sizes'
import Navigation from '../../navigation/Navigation'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { saveUser } from '../../features/slice/GlobalSlice'
import { ShowAlertMsg } from '../../helper/ShowAlert'
import RnFetchApi from 'rnfetchapi';
import { useSaveUserMutation } from '../../features/api/user/userApiSlice'


  
  
  const SignIn = () => {
    // states
  const Them =useTheme()
  const navigation =useNavigation();

  const [loader,setLoader]=useState(false)

  // redux
  const [saveUsertoDb,{data,isLoading}]=useSaveUserMutation()

  // console.log('data111111111', data)
  const dispatch =useDispatch();


// function/login

const withGoogleSignin =async()=>{
  GoogleSignin.configure({
    webClientId: '882361661384-2gq90h66tdebrdpbeajfgrnl7ht50d04.apps.googleusercontent.com'
})
try {
  const isSignedIn = await GoogleSignin.isSignedIn();
  if (isSignedIn) {
    console.log("Alrady loged in ")  
    await GoogleSignin.signOut();
    return
  }
  await GoogleSignin.hasPlayServices();
  const userInfo = await GoogleSignin.signIn();
//   await axios.post('https://dangerous-eel-4.telebit.io/api/v1/users', {
//     "id":"scmnkcnkds",
//     "name":"sk jasimuddin",
//     "profile":"sdff",
//     "email":"sk@gmail.com",
    
//     "token":"zcbcmns"


// })

  if (userInfo){
    await saveUsertoDb( {
      "id":userInfo.user.id,
      "name":userInfo.user.name,
      "profile":userInfo.user.photo,
      "email":userInfo.user.email,
      
       "token":userInfo.idToken
    
    
    }).unwrap().then((res)=>{
      console.warn('res', res)
      dispatch(saveUser(userInfo));
navigation.navigate(NavigationString.Home);

    })
   
 


  }
} catch (error) {
  if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    // ShowAlertMsg.showError("user cancelled the login flow")
    // user cancelled the login flow
  } else if (error.code === statusCodes.IN_PROGRESS) {
    // ShowAlertMsg.showError("operation is in progress already")

    // operation (e.g. sign in) is in progress already
  } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    // play services not available or outdated
    // ShowAlertMsg.showError("play services not available or outdated")
    
  } else {
    // some other error happened
    // ShowAlertMsg.showError(error)


    console.log('error', error,error.code)
  }
}
  
}



  

  return (

     <View style={{flex:1} }>

{/* {

  loader && <ActivityIndicator size="large" color="#00ff00"/>
} */}
   <ImageBackground source={{uri:'https://media.istockphoto.com/id/1271787791/photo/login-and-password-cyber-security-concept-data-protection-and-secured-internet-access.jpg?s=612x612&w=0&k=20&c=y3P5heHjYJfItFFN-DJmnJUVCVA7QjrGE3YRGh9Ua08='
        
    }} height={Them.SIZES.height} width={Them.SIZES.width}  style={{
       flex:1,alignItems:'center',justifyContent:'center'
    }}
    alt='image'>

 


   <Box safeArea p="2" py="8" w="90%" maxW="290">

  <Heading size="lg" fontWeight="600" color={Them.colors.white} _dark={{
     color:'white'
   }}>
       Welcome Back
     </Heading>
     <Heading mt="1" _dark={{
     color: "warmGray.200"
   }} color={Them.colors.white} fontWeight="medium" size="xs">
       Sign in to continue!
     </Heading>


  
   </Box>
   <GoogleSigninButton
size={GoogleSigninButton.Size.Wide}
color={GoogleSigninButton.Color.Dark}
onPress={withGoogleSignin}
/>


      </ImageBackground>

 
   
     </View>
  )
}

export default SignIn

const styles = StyleSheet.create({})