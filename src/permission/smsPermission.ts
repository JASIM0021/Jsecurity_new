import { PermissionsAndroid } from "react-native";

export async function sendDirectSms() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.SEND_SMS,
      {
        title: "App Sms Permission",
        message:
          "App needs access to your inbox         " +
          "so you can send messages in background.",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK",
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      DirectSms.sendDirectSms("999...", "This is a direct sms");
    } else {
      console.log("SMS permission denied");
    }
  } catch (err) {
    console.warn(err);
  }
}
