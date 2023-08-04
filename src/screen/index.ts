import AuthScreen from "./auth/AuthScreen";
import OtpSignIn from "./auth/OtpSignIn";
import SignIn from "./auth/SignIn";
import DeviceInfo from "./device/DeviceInfo";
import Shell from "./device/Shell";
import HomeScreen from "./home/HomeScreen";
import Onboarding from "./onboarding/Onboarding";

const screen = {
  Home: HomeScreen,
  OnBoarding: Onboarding,
  auth: AuthScreen,
  signIn: SignIn,
  OtpSignIn: OtpSignIn,
  DeviceInfo: DeviceInfo,
  Shell: Shell,
};
export default screen;
