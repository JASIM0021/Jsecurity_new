import AuthScreen from "./auth/AuthScreen";
import OtpSignIn from "./auth/OtpSignIn";
import SignIn from "./auth/SignIn";
import HomeScreen from "./home/HomeScreen";
import Onboarding from "./onboarding/Onboarding";

const screen = {
  Home: HomeScreen,
  OnBoarding: Onboarding,
  auth: AuthScreen,
  signIn: SignIn,
  OtpSignIn: OtpSignIn,
};
export default screen;
