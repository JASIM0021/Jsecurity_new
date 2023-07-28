import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Box, Button, Center, HStack, Heading, Image, Link, useTheme } from 'native-base'
import { VStack } from 'native-base'
import { FormControl } from 'native-base'
import { Input } from 'native-base'
import {KeyboardAvoidingScrollView} from 'react-native-keyboard-avoiding-scroll-view';
const SignIn = () => {
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
            <Input />
          </FormControl>
          <FormControl>
            <FormControl.Label>Password</FormControl.Label>
            <Input type="password" />
            <Link _text={{
            fontSize: "xs",
            fontWeight: "500",
            color: "indigo.500"
          }} alignSelf="flex-end" mt="1">
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="2" colorScheme="indigo">
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