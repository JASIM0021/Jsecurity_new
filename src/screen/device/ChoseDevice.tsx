import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Box, HStack, Spacer, VStack } from 'native-base'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useSelector } from 'react-redux'
import { useGetAllDevicesMutation } from '../../features/api/device/deviceSlice'

const ChoseDevice = ({setState:any}) => {
const {user}=useSelector((state:any)=>state.globalReducer)
const [getdevices,{data,isLoading,isError,isSuccess}]=useGetAllDevicesMutation()

useEffect(()=>{
    getdevices(user?.id)
},[])

  return (
    
    <>
    <Box p="2"    _text={{
    fontSize: 'md',
    fontWeight: 'medium',
    color: 'warmGray.50',
    letterSpacing: 'lg'
    
  }}>
      <VStack>
        <Box p='2' bg='white'  shadow={2} borderColor={'gray.length'} borderWidth={1} borderRadius={5} >
<HStack  p='4' alignItems={'center'}>
    <AntDesign name='mobile1' size={22} color='red' />
 
<VStack mx={'8'} >
    <Text>Device Name</Text>
    <Spacer/>
    <Text>Device model no</Text>
</VStack>
    
</HStack>
        </Box>

      </VStack>
    </Box>
  </>
  )
}

export default ChoseDevice
