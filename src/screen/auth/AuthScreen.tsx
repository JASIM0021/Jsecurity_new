
import {  Center, FormControl, Heading, Icon, Image, Input, Pressable, Text, VStack, theme, useTheme } from 'native-base'
import { Box } from 'native-base'
import { View } from 'native-base'
import React from 'react'
import CustomButton from '../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import NavigationString from '../../constant/NavigationString'
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin'
import { saveUser } from '../../features/slice/GlobalSlice'
import { useDispatch } from 'react-redux'
import { ShowAlertMsg } from '../../helper/ShowAlert'
import { useSaveUserMutation } from '../../features/api/user/userApiSlice'

const AuthScreen = () => {
    const navigation =useNavigation();
    const Them =useTheme()
    // redux
  const [saveUsertoDb,{data,isLoading}]=useSaveUserMutation()

    const dispatch=useDispatch()

    // function /logic 
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
    <View style={{marginTop:20,marginHorizontal:20}}>
       <Center>

        <Box>
            <Image source={{uri:'https://media.istockphoto.com/id/1210117007/vector/people-register-online-set-registration-or-sign-up-user-interface-users-use-secure-login-and.jpg?s=612x612&w=0&k=20&c=-HHIm3w-0WyW-OUAkGEErL5Qz8cKN9YH1TpDJVn4Bw4='
        
        }} height={Them.SIZES.height-400} width={Them.SIZES.width} borderRadius={Them.SIZES.large} style={{
            borderColor:'grey',
            borderWidth:1,
            shadowRadius:1,
            shadowColor:'grey'
        }}
        alt='image'/>
        </Box>
    
      
       </Center>
<Center w="100%">
<Heading size="lg" color={Them.colors.primary} marginTop={Them.SIZES.small} _dark={{
        color: "warmGray.50"
      }} fontWeight="bold" fontSize={30}>
          Welcome to Jsecurity
        </Heading>
        <Heading mt="1" color="coolGray.600" _dark={{
        color: "warmGray.200"
      }} fontWeight="medium" size="xs">
          Feel better security with jsecurity
        </Heading>
        <VStack space={10} mt="5">
        <CustomButton type={'lg'}  title="Sign In" onPress={()=>{navigation.navigate(NavigationString.signIn)}} bg={Them.colors.primary} textColor={Them.colors.lightWhite}/>
        <CustomButton type={'lg'} title="Sign Up" onPress={()=>{withGoogleSignin()}} bg={Them.colors.secondary} textColor={Them.colors.primary}/>

      
            </VStack>

    </Center>
    </View>
  )
}

export default AuthScreen
