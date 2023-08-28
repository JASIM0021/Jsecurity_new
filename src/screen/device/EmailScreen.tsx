import { Linking, StyleSheet,  TouchableOpacity
  } from 'react-native'
import React, { useState } from 'react'
import { Box, Input, VStack, useTheme } from 'native-base'
import { Text } from 'native-base'



const EmailScreen = () => {
    const Theme=useTheme()
const [emailInput,setEmailInput] = useState({
  to:"",
  subject:"",
  body:""
})

const handleInput = (name:string,text:string) =>{
  setEmailInput({...emailInput,[name]:text})
}
    const sendMail =async()=>{
      //   console.log("Email send")
      //  await  SendIntentAndroid.sendMail("skjasimuddin9064@gmail.com", "Subject test", "Test body")
      //  SendIntentAndroid.sendSms("+917679349780", "SMS body text here");
      //  SendIntentAndroid.sendPhoneCall("+55 48 9999-9999", true);
      //  SendIntentAndroid.sendPhoneDial("+55 48 9999-9999", false);
      //  SendIntentAndroid.openApp("com.whatsapp", {
      //   "com.mycorp.myapp.reason": "just because",
      //   "com.mycorp.myapp.data": "must be a string",
      // }).then(wasOpened => {
      //   console.log("whatsapp opened")
      // });

      
//   await  sendEmail({
//   subject:"subject",
//   to:"skjasimuddin9064@gmail.com",
//   body:"body",
//   options:{
//     cc:"skjasimuddin9064@gmail.com",
//     bcc:"skjasimuddin9153@gmail.com"
//   }
// })

return Linking.openURL(`mailto:${emailInput?.to}.com?subject=${emailInput.subject}&body=${emailInput.body}`);


    }
  return (
  <Box  flex={1} padding={4} alignItems={'center'} justifyContent={'center'}>
    <Input value={emailInput.to} marginY={2} placeholder='Enter email adress you want to send'  textAlign={'center'} 
    onChangeText={(text)=>setEmailInput({...emailInput,to:text})}
    />
  
    <Input value={emailInput.subject} marginY={2} placeholder='Email subject'  textAlign={'center'} 
       onChangeText={(text)=>setEmailInput({...emailInput,subject:text})}

    />

<Input value={emailInput.body}  flex={0.5} placeholder='Email body' textAlign={'center'}
    onChangeText={(text)=>setEmailInput({...emailInput,body:text})}

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

export default EmailScreen

const styles = StyleSheet.create({})