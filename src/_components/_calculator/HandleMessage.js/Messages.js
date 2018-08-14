import { Alert } from "react-native";

export const messageHandler = {
  info,
  success
};

function info() {
  Alert.alert(
    "Information and commands: ",
    "22++ : Information \n\n22-- : New password \n\n\n**REMEMBER**\nAlways before type your password press '=' ",
    [{ text: "OK", onPress: () => {} }],
    { cancelable: false }
  );
}

function success() {
  Alert.alert(
    "Password successfully changed! ",
    "",
    [{ text: "OK", onPress: () => {} }],
    { cancelable: false }
  );
}
