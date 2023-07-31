import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Box, Button, Center, FormControl, HStack, Image, Input, Link, VStack, useTheme } from 'native-base'
import { Heading } from 'native-base'
import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
    webClientId: '882361661384-2gq90h66tdebrdpbeajfgrnl7ht50d04.apps.googleusercontent.com'
})
const OtpSignIn = () => {
    const [user, setuser] = useState({
        email:'',
        password:''
      })
      console.log('user', user)
    const Them =useTheme()
    const signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          setuser({ userInfo });
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
          } else {
            // some other error happened
            console.log('error', error,error.code)
          }
        }
      };

//     const [number, setNumber] = useState('')
//     const [confirm, setConfirm] = useState(null);
//     const [code, setCode] = useState('');
//     function onAuthStateChanged(user) {
//         if (user) {
//           // Some Android devices can automatically process the verification code (OTP) message, and the user would NOT need to enter the code.
//           // Actually, if he/she tries to enter it, he/she will get an error message because the code was already used in the background.
//           // In this function, make sure you hide the component(s) for entering the code and/or navigate away from this screen.
//           // It is also recommended to display a message to the user informing him/her that he/she has successfully logged in.
//         }
//       }
//     useEffect(() => {
//         const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
//         return subscriber; // unsubscribe on unmount
//       }, []);
//       async function verifyPhoneNumber(phoneNumber) {
//         const confirmation = await auth().verifyPhoneNumber(phoneNumber);
//         setConfirm(confirmation);
//       }
//       async function confirmCode() {
//         try {
//           await confirm.confirm(code);
//         } catch (error) {
//           console.log('Invalid code.');
//         }
//       }
//     useEffect(()=>{
//         GoogleSignin.configure(
//           {
//             //webClientId is required if you need offline access
//             webClientId:'882361661384-2gq90h66tdebrdpbeajfgrnl7ht50d04.apps.googleusercontent.com',
            
//           });
//   (async()=>{
//          const userValue = await GoogleSignin.getCurrentUser();
//          console.log('userValue', userValue)
  
//   })();
    
//       },[])
  return (
    <View style={{marginTop:20,marginHorizontal:20,flex:1} }>
    <Center>
    <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW75GetpYPu7rNyoueQaLOwxKBZUxyKfpY-w&usqp=CAU'
         
     }} height={Them.SIZES.height-500} width={Them.SIZES.width-50} borderRadius={Them.SIZES.xxLarge} style={{
         borderColor:'grey',
         borderWidth:1,
         shadowRadius:1,
         shadowColor:'grey'
     }}
     alt='image'/>
    </Center>
    {/* {
         !confirm ?(<Center w="100%">
         <Box safeArea p="2" py="8" w="90%" maxW="290">
           <Heading size="lg" fontWeight="600" color="coolGray.800" _dark={{
           color: "warmGray.50"
         }}>
            Sign up with
           </Heading>
           <Heading mt="1" _dark={{
           color: "warmGray.200"
         }} color="coolGray.600" fontWeight="medium" size="xs">
            Phone
           </Heading>
   
           <VStack space={3} mt="5">
             <FormControl>
               <FormControl.Label>Enter your mobile number </FormControl.Label>
               <Input  placeholder='phone number' onChangeText={(text)=>setNumber(text)}/>
             </FormControl>
         
             <Button mt="2" colorScheme="indigo" onPress={()=>{
                verifyPhoneNumber(number)
             }}>
              Send Otp
             </Button>
         
           </VStack>
         </Box>
       </Center>):( <>
      <input value={code} onChangeText={text => setCode(text)} />
      <Button title="Confirm Code" onPress={() => confirmCode()} />
    </>)
    } */}
    <GoogleSigninButton
  size={GoogleSigninButton.Size.Wide}
  color={GoogleSigninButton.Color.Dark}
  onPress={signIn}
/>

      </View>
  )
}

export default OtpSignIn

const styles = StyleSheet.create({})