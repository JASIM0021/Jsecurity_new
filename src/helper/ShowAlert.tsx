import { showMessage, hideMessage } from "react-native-flash-message";

const showError = (message:string) => {
  showMessage({
    message,
    type: "danger",
    icon: "danger",
  });
};
const showSuccess = (message:string) => {
  showMessage({
    message,
    type: "success",
    icon: "success",
  });
};

export const ShowAlertMsg = { showError, showSuccess };