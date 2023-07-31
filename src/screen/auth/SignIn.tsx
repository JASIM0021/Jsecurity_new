import { ActivityIndicator, Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
import { saveUser } from '../../features/slice/GlobalSlice'
import { ShowAlertMsg } from '../../helper/ShowAlert'


  
  
  const SignIn = () => {
  const Them =useTheme()
  const navigation =useNavigation();
  const [user, setuser] = useState({
    email:'',
    password:''
  })
  const [loader,setLoader]=useState(false)
  const {user:user1}=useSelector((state:any)=>state.globalReducer)
console.log('user1', user1)
const dispatch =useDispatch();
const singIn =async ()=>{

  // await firebase.initializeApp(credentials)
  if(!user?.email || !user.password){
    ShowAlertMsg.showError("value cannot be empty")
    return

  }
   await  auth()
  .createUserWithEmailAndPassword(user.email, user?.password)
  .then((res) => {
    console.log('User account created & signed in!',res);
    Alert.alert('User account created & signed in!')
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
      Alert.alert('That email address is already in use!')
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
      Alert.alert('That email address is invalid!');
    }

    console.error(error);
  });


}
const handleInput =(name:string,text:string)=>{
  setuser({...user,[name]:text});
}

const googleSignin =async()=>{
  GoogleSignin.configure({
    webClientId: '882361661384-2gq90h66tdebrdpbeajfgrnl7ht50d04.apps.googleusercontent.com'
})
try {
  const isSignedIn = await GoogleSignin.isSignedIn();
  if (isSignedIn) {
    console.log("Alrady loged in ")  
    // await GoogleSignin.signOut();
    return
  }
  await GoogleSignin.hasPlayServices();
  const userInfo = await GoogleSignin.signIn();
  if (userInfo){
    dispatch(saveUser(userInfo));
navigation.navigate(NavigationString.Home);
  }
} catch (error) {
  if (error.code === statusCodes.SIGN_IN_CANCELLED) {
    ShowAlertMsg.showError("user cancelled the login flow")
    // user cancelled the login flow
  } else if (error.code === statusCodes.IN_PROGRESS) {
    ShowAlertMsg.showError("operation is in progress already")

    // operation (e.g. sign in) is in progress already
  } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
    // play services not available or outdated
    ShowAlertMsg.showError("play services not available or outdated")
    
  } else {
    // some other error happened
    ShowAlertMsg.showError(error)


    console.log('error', error,error.code)
  }
}
  
}



  

  return (

     <View style={{marginTop:20,marginHorizontal:20,flex:1} }>
   <Center>
{/* {

  loader && <ActivityIndicator size="large" color="#00ff00"/>
} */}
   <Image source={{uri:'https://media.istockphoto.com/id/1271787791/photo/login-and-password-cyber-security-concept-data-protection-and-secured-internet-access.jpg?s=612x612&w=0&k=20&c=y3P5heHjYJfItFFN-DJmnJUVCVA7QjrGE3YRGh9Ua08='
        
    }} height={Them.SIZES.height-500} width={Them.SIZES.width-50} borderRadius={Them.SIZES.xxLarge} style={{
        borderColor:'grey',
        borderWidth:1,
        shadowRadius:1,
        shadowColor:'grey'
    }}
    alt='image'/>
   </Center>
   <KeyboardAvoidingScrollView keyboardDismissMode='interactive' stickyFooter={<Button /> } contentContainerStyle={{marginTop:20}}>

 

   <Center w="100%">
      <Box safeArea p="2" py="8" w="90%" maxW="290">
     <Center>
     <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
        color: "warmGray.50"
      }}>
          Welcome Back
        </Heading>
        <Heading mt="1" _dark={{
        color: "warmGray.200"
      }} color="coolGray.600" fontWeight="medium" size="xs">
          Sign in to continue!
        </Heading>
     </Center>

        <VStack space={3} mt="5">
          <FormControl>
            <FormControl.Label>Email ID</FormControl.Label>
            <Input 
            onChangeText={(text)=>handleInput('email',text)}
            />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password"  
            onChangeText={(text)=>handleInput('password',text)}
            
            />
            <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "indigo.500"
          }} alignSelf="flex-end" mt="1">
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo" onPress={singIn}>
            Sign in
          </Button>
      
          <Center width={Them.SIZES.width-100}>

          <GoogleSigninButton
  size={GoogleSigninButton.Size.Wide}
  color={GoogleSigninButton.Color.Dark}
  onPress={googleSignin}
/>
          </Center>
          <HStack mt="6" justifyContent="center">
            <Text fontSize="sm" color="coolGray.600" _dark={{
            color: "warmGray.200"
          }}>
              I'm a new user.{" "}
            </Text>
            <Link _text={{
            color: "indigo.500",
            fontWeight: "medium",
            fontSize: "sm"
          }} href="#">
              Sign Up
            </Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
    </KeyboardAvoidingScrollView>
   
     </View>
  )
}

export default SignIn

const styles = StyleSheet.create({})