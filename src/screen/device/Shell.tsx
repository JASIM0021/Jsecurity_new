import { StyleSheet,  TouchableOpacity,  View } from 'react-native'
import React, { memo, useEffect, useState } from 'react'
import { NativeModules } from 'react-native';
import ChoseDevice from './ChoseDevice';
import { useSelector } from 'react-redux';
import { Box, HStack, Input, ScrollView, Text, VStack, useTheme } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { socket } from '../../socket/socket';
const ShellModule = NativeModules.ShellModule;
const SendDeviceMsg = () => {
  const Theme=useTheme()
  const [choseDevice,setChoseDevice]=useState(true)
  const [cmdOut,setCmdOut]=useState(["hello"])
  const [textIn,setText]=useState('')
  const [cmdIn,setCmdIn]=useState(['hi'])
const {selectedDevice,deviceInfo}=useSelector((state:any)=>state.deviceSlice)
const {user}=useSelector((state:any)=>state.globalReducer)
console.log('deviceInfo', deviceInfo)


// const androidShell=async(command:string)=>{
//  try {
//   // await ShellModule.executeShellCommand("ls", (result:any) => {
//   //   let output=[...cmdOut]
//   //   output.push(result);
//   //   console.log('datasss', result)
//   //   setCmdOut(output);
//   //   // console.log(result);
//   // });
//   const result = await ShellModule.executeShellCommand("ls");
//   console.warn('result', result)
//  } catch (error) {
//   console.log('error', error)
//  }
// }
console.log('ddddd===playerId', deviceInfo?.playerId===selectedDevice?.otherData?.playerId)

console.log('selectedDevice', selectedDevice)

const sendCommand =async()=>{
  const temparray:string[]=[...cmdIn]
  temparray.push(textIn)
  setCmdIn(temparray)
  setText('')
  socket.emit("message",{
    from:deviceInfo?.model,
    id:selectedDevice?.deviceId,
    playerId:selectedDevice?.otherData?.playerId,
    message:textIn
  })
  
}
useEffect(()=>{
  socket.on(`${deviceInfo?.playerId}message`,(data:string)=>{
   
    let output=[...cmdOut]
    output.push(data);
    console.log('output', output)
    setCmdOut(output);
  })
},[])
  return (
    <View style={{flex:1}}>
      <Box flex={0.9} bg={Theme.colors.black}>


<ScrollView>
<HStack  padding={2} space={2} marginX={2}>
<Box width={'50%'}  borderWidth={1} borderColor={Theme.colors.gray} shadow={2} borderRadius={5} >
{
  cmdIn.map((item)=>(<VStack p={4}>
    <Text color={Theme.colors.primary} >{item}</Text></VStack>))
}
</Box>
<Box width={'50%'} borderWidth={1} borderColor={Theme.colors.gray}   shadow={2} borderRadius={5}>
  

{
  cmdOut.map((item)=>(<VStack p={4}><Text color={'red'} >{item}</Text></VStack>))
}
</Box>
</HStack>
</ScrollView>




  

      </Box>
      <Box flex={0.1} justifyContent={'center'} alignItems={'center'}>


      {/* {
        choseDevice && (<ChoseDevice setState={setChoseDevice}/>)
      } */}
     <HStack justifyContent={'space-between'} alignItems={'center'} paddingX={5}>
     <Input mx="3" value={textIn} placeholder="Input" flex={1} backgroundColor={'white'}  onChangeText={(text)=>{
     setText(text)
     }}/>
    
    <TouchableOpacity
    onPress={()=>sendCommand()}
    >
    <Ionicons name="send" size={22} color='red'/>
    </TouchableOpacity>
     </HStack>
     </Box>
    </View>
  )
}

export default memo(SendDeviceMsg)

// const styles = StyleSheet.create({})