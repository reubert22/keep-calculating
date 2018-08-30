//@flow
import { Navigation } from "react-native-navigation";

import { registerScreens } from "./src/screens";

registerScreens();

if (__DEV__) {
  Navigation.startSingleScreenApp({
    screen: {
      screen: "myapp.ImageCameraView",
      title: "",
      navigatorStyle: {
        navBarHidden: true
      }
      /* screen: "myapp.Gallery",
      title: "Keep calculating",
      navigatorStyle: {
        navBarBackgroundColor: "#062D52",
        navBarTextFontFamily: "Montserrat-bold",
        navBarTextFontSize: 20,
        navBarTextColor: "#fff",
        navBarButtonColor: "black",
        navBarTitleTextCentered: true,

        topBarElevationShadowEnabled: false,
        topBarBorderColor: "#062D52",
        topBarBorderWidth: 3.5,
        statusBarTextColorScheme: "light",
        orientation: "portrait"
      } */
    }
  });
} else {
  Navigation.startSingleScreenApp({
    screen: {
      screen: "myapp.Home",
      title: "Home",
      navigatorStyle: {
        navBarHidden: true
      }
    }
  });
}
