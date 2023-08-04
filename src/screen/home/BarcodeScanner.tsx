
import React, { Component, memo, useState } from 'react';

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  Alert
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';
import { RNCamera } from 'react-native-camera';
import { Center, Divider, HStack, ScrollView, Spacer, View, useTheme } from 'native-base';
import CustomButton from '../components/CustomButton';
import { io } from "socket.io-client";
import HomeButton from './HomeButton';

const socket = io("https://dangerous-eel-4.telebit.io/");




const  BarcodeScanner =({user})=> {
    const Them =useTheme()
    const [showScanner,setShowScanner]=useState(false)
    const[scanComplete,setScanComplete]=useState(false) 
    const [seviceActive, setseviceActive] = useState(false)
    // redux 
    console.log('userbar', user)
  const onSuccess = (e:any) => {
    // if(e.data.includes('http')){
  //    return  Linking.openURL(e.data).catch(err =>
  //         console.error('An error occured', err)
  //       );
  // }
    Alert.alert(e.data)
    setScanComplete(true);
    setShowScanner(false)
    sendQRCodeData({
      id:e.data,
      user
    })
  
    
  };

  const sendQRCodeData = (qrCode:any) => {
    // Emit the 'qr-scanned' event to the server with the scanned QR code data
    socket.emit("qr-scanned", qrCode);
    console.log("emited socket");
  };

console.log('scanComplete', scanComplete)
  
    return (
   <>

   {
    showScanner ? (
    <QRCodeScanner
        onRead={onSuccess}
        // flashMode={}
        reactivate={true}
        showMarker={true}
        topContent={
          <Text style={styles.centerText}>
            Please{' '}
            <Text style={styles.textBold}>hold on untill</Text>your phone vibrations
          </Text>
        }
        bottomContent={
<View style={{alignItems:'center',justifyContent:'center',marginTop:20}}>
<CustomButton type={'lg'}  title="Go Back" onPress={()=>{setShowScanner(false)}} bg={Them.colors.blue[700]} textColor={Them.colors.lightWhite}/>
    

</View>
        }
      />
      ):(
        <View style={{flex:1,backgroundColor:'white'}}>
       <View style={{flex:0.5}}>
       <Center marginTop={Them.SIZES.height*0.05}>
        <CustomButton type={'lg'}  title={scanComplete?"Scan Again":"Scan for login"} onPress={()=>{setShowScanner(true)}} bg={Them.colors.blue[700]} textColor={Them.colors.lightWhite}/>

        </Center>
       </View>
        {
          scanComplete && (
            <ScrollView >

              <HomeButton/>

            </ScrollView>
          )
        }
        </View>
      )
   }
      
      
      </>
    );
  
}

const styles = StyleSheet.create({
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)'
  },
  buttonTouchable: {
    padding: 16
  }
});

export default memo(BarcodeScanner);


// /* <Box px="4" pt="4" bg='red'>
//  <Center>
{/* <Text>{seviceActive?'Active service':' DeActive Service'}</Text> */}

{/* <Switch isChecked={seviceActive} onToggle={(value)=>setseviceActive(!seviceActive)} size="lg" offTrackColor="orange.100" onTrackColor="orange.200" onThumbColor="orange.500" offThumbColor="orange.50" /> */}
//  </Center> 
// </Box> 