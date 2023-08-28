import { Linking, StyleSheet,  TouchableOpacity
} from 'react-native'
import React, { useState } from 'react'
import { Box, Input, VStack, useTheme } from 'native-base'
import { Text } from 'native-base'
import { iosCall, andCall, getSimInfo } from "rn-direct-phone-call";


const PhoneCallScreen = () => {
  const Theme=useTheme()
const [phoneCall,setphoneCall] = useState({
to:"",
sim:"",
body:""
})

const handleInput = (name:string,text:string) =>{
setphoneCall({...phoneCall,[name]:text})
}
  const sendMail =async()=>{
  

    // DirectSms.sendDirectSms(phoneCall.to, phoneCall.body);

  }
return (
<Box  flex={1} padding={4} alignItems={'center'} justifyContent={'center'}>
  <Input value={phoneCall.to} marginY={2} placeholder='Phone Number you want to send'  textAlign={'center'} 
  onChangeText={(text)=>setphoneCall({...phoneCall,to:text})}
  />

  <Input value={phoneCall.sim} marginY={2} placeholder='Enter sim no 0/1 '  textAlign={'center'} 
     onChangeText={(text)=>setphoneCall({...phoneCall,sim:text})}

  />

<Input value={phoneCall.body}  flex={0.5} placeholder='SMS body' textAlign={'center'}
  onChangeText={(text)=>setphoneCall({...phoneCall,body:text})}

/>
<TouchableOpacity style={{
  width: '100%',
  height: 50,
  backgroundColor:Theme.colors.primary,
  marginVertical:10,
  borderWidth:1,
  borderRadius:8,
  alignItems:'center',
  justifyContent: 'center'
}} 
onPress={()=>sendMail()}
>
  <Text color={Theme.colors.lightWhite} >Send</Text>
</TouchableOpacity>
 

</Box>
)
}

export default PhoneCallScreen

const styles = StyleSheet.create({})