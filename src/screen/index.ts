import AuthScreen from "./auth/AuthScreen";
import SignIn from "./auth/SignIn";
import HomeScreen from "./home/HomeScreen";
import Onboarding from "./onboarding/Onboarding";

const screen = {
  Home: HomeScreen,
  OnBoarding: Onboarding,
  auth: AuthScreen,
  signIn: SignIn,
};
export default screen;
