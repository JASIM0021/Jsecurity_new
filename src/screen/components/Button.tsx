import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useTheme } from 'native-base'

const Button = ({onPress,title,bg,textColor}) => {
    const Them =useTheme()
  return (
    <TouchableOpacity
    onPress={onPress}
    
    style={{
        backgroundColor:bg,
        width:Them.SIZES.width-30,
        height:Them.SIZES.height *0.1,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:Them.SIZES.xxLarge,
        
        
        
        
    }}>
    
            <Text style={{color:textColor}}>{title}</Text>
       
    </TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({})