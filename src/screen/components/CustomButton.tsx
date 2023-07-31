import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useTheme } from 'native-base'
type Iprops ={
  onPress?:any,title?:any,bg?:string,textColor?:string,type:string,icon?:any
}
const CustomButton = (data:Iprops) => {
  const {onPress,title,bg,textColor,type,icon}=data;
    const Them =useTheme()
  return (
    <TouchableOpacity
    onPress={onPress?onPress:null}
    
    style={{
        backgroundColor:bg,
        width: type=="sm"?Them.SIZES.width-300:Them.SIZES.width-30,
        height:type=="sm"?Them.SIZES.height *0.09:Them.SIZES.height *0.06,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:Them.SIZES.xxLarge,
        
        
        
        
    }}>
    
    {
   
     icon?icon: <Text style={{color:textColor}}>{title}</Text>
    }
       
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({})