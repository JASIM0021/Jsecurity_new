import {  StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { Image } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import NavigationString from '../../constant/NavigationString';
const Onboarding1 = () => {
  const onboardingRef = useRef<Onboarding>(null);
  const navigation = useNavigation()

  return (
     <Onboarding
     onSkip={()=>navigation.navigate(NavigationString.auth)}
     onDone={()=>navigation.navigate(NavigationString.auth)}
  pages={[
    {
      backgroundColor: '#fff',
      image: <Image source={{uri:"https://media.istockphoto.com/id/1408387701/photo/social-media-marketing-digitally-generated-image-engagement.webp?b=1&s=612x612&w=0&k=20&c=GZCD21X5437zQJjw40Qnda-pMWLY_x0zzeQSv-rEe_I="}}  height={200} width={200} borderRadius={100} alt='image'/>,
      title: 'Feel Secure With Us',
      subtitle: 'We provide high-quality security features for your android smartphone ',
    },
    {
        backgroundColor: '#fff',
        image: <Image source={{uri:"https://cdn.pixabay.com/photo/2018/08/18/13/26/interface-3614766_640.png"}}  height={200} width={200} borderRadius={100} alt='image'/>,
        title: 'Web Based Admin Panel',
        subtitle: 'We based admin panel for control and track your device ',
      },
  
    {
        backgroundColor: '#fff',
        image: <Image source={{uri:"https://media.istockphoto.com/id/1174418677/photo/mobile-phone-personal-data-and-cyber-security-threat-concept-cellphone-fraud-smartphone.webp?b=1&s=612x612&w=0&k=20&c=dCSYOo-zSePSUVLhAtSvG13ql2MIbf0JIf0X_cNaQgo="}}  height={200} width={200} borderRadius={100} alt='image'/>,
        title: 'Solten Device can be tack ',
        subtitle: 'if you loss your device , we can help you to find your device and track your device with realtime location update of your device ',
      },
      {
        backgroundColor: '#fff',
        image: <Image source={{uri:"https://cdn.pixabay.com/photo/2015/10/09/16/43/fingerprint-979598_640.jpg"}}  height={200} width={200} borderRadius={100} alt='image'/>,
        title: 'Data Protection ',
        subtitle: 'We are never  used or   share   your data for advistment purposes',
      },
      {
        backgroundColor: '#fff',
        image: <Image source={{uri:"https://media.istockphoto.com/id/1364971537/photo/privacy-policy-notice-and-legal-agreement.webp?b=1&s=612x612&w=0&k=20&c=m5rJsGAtbH4ViEIDhx8TMADLq9w56SmQPZjuXfmDlAA="}}  height={200} width={200} borderRadius={100} alt='image'/>,
        title: 'Privecy Policy',
        subtitle: 'We need some permissions like location , internet connectivity and other for realtime access',
      },
     
  
  ]
  
  }
/>

  )

}

export default Onboarding1

const styles = StyleSheet.create({})