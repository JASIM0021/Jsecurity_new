import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Box, Button, Center, HStack, Heading, Image, Link, useTheme } from 'native-base'
import { VStack } from 'native-base'
import { FormControl } from 'native-base'
import { Input } from 'native-base'
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';


const credentials = {
  clientId: '882361661384-ac8tfgu98jkeasrsa9ha9vrvbss31vv4.apps.googleusercontent.com',
  appId: '1:882361661384:android:62236213ede31c373172fd',
  apiKey: 'AIzaSyBYxlhKQ0Hbf_m-yN61a5UspnshruhF3Y8',
  databaseURL: 'https://jscurity-bfdc5-default-rtdb.firebaseio.com',
  storageBucket: 'jscurity-bfdc5.appspot.com',
  messagingSenderId: '882361661384',
  projectId: 'jscurity-bfdc5',
};


const SignIn = () => {
  const [user, setuser] = useState({
    email:'',
    password:''
  })
const singIn =async ()=>{
  await firebase.initializeApp(credentials)
   await  auth()
  .createUserWithEmailAndPassword(user?.email, user?.password)
  .then(() => {
    console.log('User account created & signed in!');
    Alert('User account created & signed in!')
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });


}
const handleInput =(name:string,text:string)=>{
  setuser({...user,[name]:text});
}
    const Them =useTheme()

  return (

     <View style={{marginTop:20,marginHorizontal:20,flex:1} }>
   <Center>
   <Image source={{uri:'https://media.istockphoto.com/id/1271787791/photo/login-and-password-cyber-security-concept-data-protection-and-secured-internet-access.jpg?s=612x612&w=0&k=20&c=y3P5heHjYJfItFFN-DJmnJUVCVA7QjrGE3YRGh9Ua08='
        
    }} height={Them.SIZES.height-500} width={Them.SIZES.width-50} borderRadius={Them.SIZES.xxLarge} style={{
        borderColor:'grey',
        borderWidth:1,
        shadowRadius:1,
        shadowColor:'grey'
    }}
    alt='image'/>
   </Center>
   <KeyboardAvoidingScrollView keyboardDismissMode='interactive' stickyFooter={<Button />}>

 

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