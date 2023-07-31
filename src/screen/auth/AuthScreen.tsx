
import {  Center, FormControl, Heading, Icon, Image, Input, Pressable, Text, VStack, theme, useTheme } from 'native-base'
import { Box } from 'native-base'
import { View } from 'native-base'
import React from 'react'
import CustomButton from '../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import NavigationString from '../../constant/NavigationString'

const AuthScreen = () => {
    const navigation =useNavigation();
    const Them =useTheme()
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
        <CustomButton type={'lg'} title="Sign Up" onPress={()=>{}} bg={Them.colors.secondary} textColor={Them.colors.primary}/>

      
            </VStack>

    </Center>
    </View>
  )
}

export default AuthScreen
