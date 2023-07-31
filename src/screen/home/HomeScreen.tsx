import 'react-native-gesture-handler';
import React from 'react';
import { Button, StatusBar, Text } from 'react-native';
import { Drawer } from 'react-native-drawer-layout';
import { SafeAreaView } from 'react-native-safe-area-context';
import Sidebar from '../components/SideBar';
import AppBar from '../components/AppBar/Appbar';
import { Center } from 'native-base';
import { AlertDialog } from 'native-base';
import CustomAlertDialog from '../components/Alert/AlertDilog';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import NavigationString from '../../constant/NavigationString';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const HomeScreen = (): JSX.Element => {
  const [currentTab, setCurrentTab] = React.useState('Home');
  const [showMenu, setShowMenu] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [isDilogOPen,setIsDilogOpen]=React.useState(false);
  const navigation =useNavigation()

  const handleLogout=async()=>{
    AsyncStorage.clear()
    GoogleSignin.signOut();
    navigation.navigate(NavigationString.auth)
  }

  return (
    <>
       <Drawer
      open={open}
      drawerType='front'
      statusBarAnimation='slide'
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderDrawerContent={() => {
        return <Sidebar profileImage={'data:image/jpeg;base64,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'} name='hello' email='example@gmail.com' onProfileSettings={()=>{}} onAccount={()=>{}} onDevices={()=>{}} onLogout={()=>{setIsDilogOpen(true)}}/>
      }}
    >
      {/* <Button
        onPress={() => setOpen((prevOpen) => !prevOpen)}
        title={`${open ? 'Close' : 'Open'} drawer`}
      /> */}

      <Center>

      <AppBar onHambunger={()=>setOpen((prevOpen) => !prevOpen)} title='Home'/>

      </Center>
    </Drawer>
    <CustomAlertDialog isOpen={isDilogOPen} setIsOpen={setIsDilogOpen} header="logout" body="are you sure to logout , if you sure then press okey " onOkey={()=>{

    handleLogout()
    }}/>

    </>
     
  )
};

export default HomeScreen;
