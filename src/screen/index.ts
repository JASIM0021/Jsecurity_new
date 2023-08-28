import AuthScreen from "./auth/AuthScreen";
import OtpSignIn from "./auth/OtpSignIn";
import SignIn from "./auth/SignIn";
import ChoseDevice from "./device/ChoseDevice";
import DeviceInfo from "./device/DeviceInfo";
import EmailScreen from "./device/EmailScreen";
import PhoneCallScreen from "./device/PhoneCallScreen";
import SendDeviceMsg from "./device/Shell";
import HomeScreen from "./home/HomeScreen";
import Onboarding from "./onboarding/Onboarding";

const screen = {
  Home: HomeScreen,
  OnBoarding: Onboarding,
  auth: AuthScreen,
  signIn: SignIn,
  OtpSignIn: OtpSignIn,
  DeviceInfo: DeviceInfo,
  SendDeviceMsg: SendDeviceMsg,
  ChoseDevice: ChoseDevice,
  Email: EmailScreen,
  SendSms: PhoneCallScreen,
};
export default screen;
