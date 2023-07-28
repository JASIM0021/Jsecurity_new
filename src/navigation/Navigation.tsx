
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Box, NativeBaseProvider, Text } from 'native-base';
import screen from '../screen';
import NavigationString from '../constant/NavigationString';


export default function Navigation (): JSX.Element {
const Stack = createNativeStackNavigator ();
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName={NavigationString.OnBoarding} screenOptions={{
        headerShown:false
      }}>
      <Stack.Screen name={NavigationString.OnBoarding} component={screen.OnBoarding} />

        <Stack.Screen name="Home" component={screen.Home} />
        <Stack.Screen name={NavigationString.auth} component={screen.auth} />
        <Stack.Screen name={NavigationString.signIn} component={screen.signIn} />


      </Stack.Navigator>

      </NavigationContainer>
  )
}
