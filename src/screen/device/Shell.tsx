import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { NativeModules } from 'react-native';
import ChoseDevice from './ChoseDevice';

const ShellModule = NativeModules.ShellModule;
const Shell = () => {
  const [choseDevice,setChoseDevice]=useState(true)
  return (
    <View>
      {
        choseDevice && (<ChoseDevice setState={setChoseDevice}/>)
      }
    </View>
  )
}

export default Shell

const styles = StyleSheet.create({})