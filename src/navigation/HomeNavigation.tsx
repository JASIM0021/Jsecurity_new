
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Box, NativeBaseProvider, Text } from 'native-base';
import screen from '../screen';
import NavigationString from '../constant/NavigationString';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function HomeNavigation (): JSX.Element {


const Stack = createNativeStackNavigator ();
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName={NavigationString.Home} screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="Home" component={screen.Home} />

        <Stack.Screen name={NavigationString.auth} component={screen.auth} />
        <Stack.Screen name={NavigationString.signIn} component={screen.signIn} />
        <Stack.Screen name={NavigationString.otpSignin} component={screen.OtpSignIn} />
       



      </Stack.Navigator>

      </NavigationContainer>
  )
}
