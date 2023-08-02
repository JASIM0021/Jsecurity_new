/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import OneSignal from "react-native-onesignal";
import "react-native-reanimated";

// OneSignal Initialization
OneSignal.setAppId("d56cc75b-0d9c-4c90-8861-f654ac2a1549");

// promptForPushNotificationsWithUserResponse will show the native iOS or Android notification permission prompt.
// We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 8)
OneSignal.promptForPushNotificationsWithUserResponse();

//Method for handling notifications received while app in foreground
OneSignal.setNotificationWillShowInForegroundHandler(
  (notificationReceivedEvent) => {
    console.log(
      "OneSignal: notification will show in foreground:",
      notificationReceivedEvent
    );
    let notification = notificationReceivedEvent.getNotification();
    console.log("notification: ", notification);
    const data = notification.additionalData;
    console.log("additionalData: ", data);
    // Complete with null means don't show a notification.
    notificationReceivedEvent.complete(notification);
  }
);

//Method for handling notifications opened
OneSignal.setNotificationOpenedHandler((notification) => {
  console.log("OneSignal: notification opened:", notification);
});
AppRegistry.registerComponent(appName, () => App);
