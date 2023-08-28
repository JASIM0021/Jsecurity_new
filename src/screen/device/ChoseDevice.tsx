import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View, VirtualizedList } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { Box, FlatList, HStack, Spacer, VStack } from 'native-base'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { useDispatch, useSelector } from 'react-redux'
import { useGetAllDevicesMutation } from '../../features/api/device/deviceSlice'
import { IsAny } from '@reduxjs/toolkit/dist/tsHelpers'
import { saveSelectedDevice } from '../../features/slice/device/deviceSlice'
import { useNavigation } from '@react-navigation/native'

const ChoseDevice = ({setState:any,route}) => {
  const {screen}=route?.params
  console.log('screen', screen)
const navigation =useNavigation()
const [select,setSelect]=useState(false)
const [getdevices,{data:allDevice,isLoading,isError,isSuccess}]=useGetAllDevicesMutation()
console.log('allDevice', allDevice)
const {user}=useSelector((state:any)=>state.globalReducer)
const dispatch=useDispatch()

// use callback when device selected 

// useCallback(()=>{
//   console.log('select', select)
//   dispatch(saveSelectedDevice(select))
//   if(select){
//     navigation.navigate(screen)
//   }
// },[select])
const onSelectPress =(_id:any)=>{
  setSelect(true)
  let selectedDevice =allDevice?.data?.find((device:any)=>{
    console.log('jasimu', device)
    return _id == device?.deviceId
  });
  console.log('_id selectedDevice',_id, selectedDevice)
  dispatch(saveSelectedDevice(selectedDevice))
 
      navigation.navigate(`${screen}`)
    
}

useEffect(()=>{
  console.log('user?.user?.id', user)
  if(user?.user?.id){
    getdevices(user?.user?.id)

  }
},[user?.user?.id])

const RenderdItem = ({ deviceId, name, model }) =>{
  // console.log('deviceId, name, model ', deviceId, name, model )
 return (

  <Box p="2" _text={{
    fontSize: 'md',
    fontWeight: 'medium',
    color: 'warmGray.50',
    letterSpacing: 'lg'
  }}>
   
    <VStack>
      <Box p='2' bg='white' shadow={2} borderColor={'gray.length'} borderWidth={1} borderRadius={5}>
        <HStack p='4' alignItems={'center'}>
          <AntDesign name='mobile1' size={22} color='red' />
          <VStack mx={'8'}>
            <Text>{name}</Text>
            <Spacer />
            <Text>{model}</Text>
          </VStack>
        </HStack>
      </Box>
    </VStack>
   
  </Box>
)
};

const getItem = (_data: any, index: number): any => {
  console.log('index', index)
console.log('_data[0].deviceName', _data[0].deviceName)
  return ({
    deviceId: _data?.[index]?.deviceId,
    
    name: _data?.[index]?.deviceName,
    model: _data?.[index]?.otherData?.model,
  })
};

const getItemCount = (_data: unknown) =>{
  return allDevice?.count?allDevice.count:1
} 


  return (
    
    <>{
      !allDevice ? <ActivityIndicator size={30} />:
      <VirtualizedList
      initialNumToRender={4}
      renderItem={({ item }) =>{
        console.log('item', item)
        return <TouchableOpacity onPress={()=>onSelectPress(item.deviceId)}><RenderdItem deviceId={item.deviceId} name={item.name} model={item.model} /></TouchableOpacity>
      }}
      keyExtractor={item => item?.id} // Assuming deviceId is a unique identifier
      getItemCount={getItemCount}
      getItem={getItem}
      data={allDevice?.data} // Pass your array of objects here
    />
    }
    
  </>
  )
}

export default ChoseDevice
