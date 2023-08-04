import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import { Box, Center } from 'native-base'
import { Heading } from 'native-base'
import { ScrollView } from 'native-base'
import DeviceInfoList from './DeviceInfoList'

const DeviceInfo = () => {
  return (

 <Box   _dark={{
        bg: 'coolGray.800'
      }} _light={{
        bg: 'white'
      }} flex="1" safeAreaTop maxW="400px" w="100%">
          <Heading p="4" pb="3" size="lg">
           Device Information
          </Heading>
          <ScrollView showsVerticalScrollIndicator={false}>
            <DeviceInfoList/>
          </ScrollView>
        </Box>

   
  )
}

export default memo(DeviceInfo)
