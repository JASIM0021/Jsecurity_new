import {  ActivityIndicator, Dimensions, TouchableOpacity, View } from 'react-native';
import { NativeBaseProvider, Box, Text, Pressable, Heading, IconButton, Icon, HStack, Avatar, VStack, Spacer, Center, useTheme } from 'native-base';
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { memo, useState } from 'react';
import { SwipeListView } from 'react-native-swipe-list-view';
import { useSelector } from 'react-redux';




const DeviceInfoList = () => {

  const Theme=useTheme()

  // redux selector 
const {deviceInfo}=useSelector((state:any)=>state.deviceSlice)
// arry data for list 
const data = [{
  fullName: 'Device Name',
  recentText: deviceInfo.deviceName,
  icon:"mobile1"
}, 
{
  fullName: 'Model No',
  recentText: deviceInfo.model,
  icon:"infocirlce"
},

{
  fullName: 'Brand Name',
  recentText: deviceInfo.brand,
  icon:"info"
},
{
  fullName: 'Android Id',
  recentText: deviceInfo.androidId,
  icon:"android1"
},
{
  fullName: 'IP Address',
  recentText: deviceInfo.ipAddress,
  icon:"ellipsis1"
},
{
  fullName: 'Total Memory(Ram)',
  recentText: `${deviceInfo.totalMemory/1073741824} GB`,
  icon:"folder1"
},
{
  fullName: 'Battery Level',
  recentText: `${parseInt(Math.round(Number(deviceInfo?.powerState?.batteryLevel) * 100))}% ${deviceInfo?.powerState?.batteryState}`,
  icon:"swap"
},

];


  const onRowDidOpen = rowKey => {
  };


    const [listData, setListData] = useState(data);
    const renderItem = ({
        item,
        index
      }) => <Box>
          <Pressable onPress={() => console.log('You touched me')} _dark={{
          bg: 'coolGray.800'
        }} _light={{
          bg: 'white'
        }}>
            <Box pl="4" pr="5" py="2">
              <HStack alignItems="center" space={3}>
                <AntDesign name={item.icon} size={22} color={Theme.colors.blueGray[500]}/>
                <VStack>
                  <Text color="coolGray.800" _dark={{
                  color: 'warmGray.50'
                }} bold>
                    {item.fullName}
                  </Text>
                  <Text color="coolGray.600" _dark={{
                  color: 'warmGray.200'
                }}>
                    {item.recentText}
                  </Text>
                </VStack>
                <Spacer />
                <Text fontSize="xs" color="coolGray.800" _dark={{
                color: 'warmGray.50'
              }} alignSelf="flex-start">
                  {item.timeStamp}
                </Text>
              </HStack>
            </Box>
          </Pressable>
        </Box>;

  const renderHiddenItem = (data, rowMap) => <HStack flex="1" pl="2">
  {/* <Pressable w="70" ml="auto" cursor="pointer" bg="coolGray.200" justifyContent="center" onPress={() => closeRow(rowMap, data.item.key)} _pressed={{
  opacity: 0.5
}}>
    <VStack alignItems="center" space={2}>
      <Icon as={<Entypo name="dots-three-horizontal" />} size="xs" color="coolGray.800" />
      <Text fontSize="xs" fontWeight="medium" color="coolGray.800">
        More
      </Text>
    </VStack>
  </Pressable> */}
  {/* <Pressable w="70" cursor="pointer" bg="red" justifyContent="center" onPress={() => deleteRow(rowMap, data.item.key)} _pressed={{
  opacity: 0.5
}}>
    <VStack alignItems="center" space={2}>
      <Icon as={<AntDesign name="delete" />} color="white" size="xs" />
      <Text color="white" fontSize="xs" fontWeight="medium">
        Delete
      </Text>
    </VStack>
  </Pressable> */}
</HStack>;

if (!deviceInfo?.deviceName){
  return  <ActivityIndicator size={'large'} color={Theme.colors.blue[500]}/> 
}
  return (

   
      <Box bg="white" safeArea flex="1">
      <SwipeListView data={listData} renderItem={renderItem} renderHiddenItem={renderHiddenItem} rightOpenValue={-130} previewRowKey={'0'} previewOpenValue={-40} previewOpenDelay={3000} onRowDidOpen={onRowDidOpen} />
    </Box>
 
  )
}

export default memo(DeviceInfoList)
