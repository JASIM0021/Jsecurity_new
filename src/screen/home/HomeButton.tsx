import React from 'react'
import { useSelector } from 'react-redux';
import { Box } from 'native-base';
import { VStack,Divider, HStack, Spacer, View, useTheme } from 'native-base';
import { Switch } from 'native-base';
import AntDesign from 'react-native-vector-icons/AntDesign'
import { TouchableOpacity } from 'react-native';
import { Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import NavigationString from '../../constant/NavigationString';





const HomeButton = () => {
    const navigation =useNavigation()

    const HomeButtonArray =[
        {
          btn1:{
            name:'settings',
            icon: 'setting',
            onPress: ()=>{}
          },
          btn2:{
            name:'deviceinfo',
            icon: 'mobile1',
            onPress: ()=>{navigation.navigate(NavigationString.DeviceInfo)}
    
          }
        },
        {
            btn1:{
              name:'Shell',
              icon: 'codesquareo',
              onPress: ()=>{navigation.navigate(NavigationString.Shell)}
            },
            btn2:{
              name:'deviceinfo',
              icon: 'mobile1',
              onPress: ()=>{navigation.navigate(NavigationString.DeviceInfo)}
      
            }
          },
        
    ]
    const Them =useTheme()

  return (
    <Box style={{flex:3,backgroundColor:'white'}}>
        
  {
    HomeButtonArray.map((item,index)=>{
        return (
            <Box  borderRadius="md"  marginY={5} marginX={4} height={Them.SIZES.height*0.2} key={index}>
            <VStack space="4" divider={<Divider />}   >
            <HStack height={'100%'}  >
              <Box    width={'48%'} borderColor={Them.colors.primary} borderWidth={1} borderRadius={20} alignItems={'center'} justifyContent={'center'}>
         
      <TouchableOpacity 
      onPress={()=>item.btn1.onPress()}
      >
      <AntDesign name={item.btn1.icon} size={Them.SIZES.xxLarge+40} color={Them.colors.blue[700]}/>
      <Text textAlign={'center'}>{item.btn1.name}</Text>
      </TouchableOpacity>
              </Box>
              <Spacer/>
              <Box    width={'48%'} borderColor={Them.colors.primary} borderWidth={1} borderRadius={20} alignItems={'center'} justifyContent={'center'}>
         <TouchableOpacity
      onPress={()=>item.btn2.onPress()}
         
         >


      <AntDesign name={item.btn2.icon} size={Them.SIZES.xxLarge+40} color={Them.colors.blue[700]}/>
      <Text textAlign={'center'}>{item.btn2.name}</Text>
         </TouchableOpacity>
      
              </Box>
            </HStack>
              
             
            </VStack>
          </Box>
        )
    })
  }
   


            </Box>
  )
}

export default HomeButton
