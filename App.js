//@flow
import { Navigation } from "react-native-navigation";

import { registerScreens } from "./src/screens";

registerScreens();

Navigation.startSingleScreenApp({
  screen: {
    screen: "myapp.Home",
    title: "Home",
    navigatorStyle: {
      navBarHidden: true
    }
  }
});

/* Navigation.startTabBasedApp({
  tabs: [
    {
      label: "One", // tab label as appears under the icon in iOS (optional)
      screen: "myapp.Gallery", // unique ID registered with Navigation.registerScreen
      icon: require("./src/img/clearIcon.png"), // local image asset for the tab icon unselected state (optional on iOS)
      tabBarSelectedButtonColor: require("./src/img/clearIcon.png"), // local image asset for the tab icon selected state (optional, iOS only. On Android, Use `tabBarSelectedButtonColor` instead)

      title: "Screen One", // title of the screen as appears in the nav bar (optional)
      //titleImage: require("../img/titleImage.png"), // iOS only. navigation bar title image instead of the title text of the pushed screen (optional)
      navigatorStyle: {
        navBarHidden: true
      } // override the navigator style for the tab screen, see "Styling the navigator" below (optional),
      //navigatorButtons: {} // override the nav buttons for the tab screen, see "Adding buttons to the navigator" below (optional)
    },
    {
      label: "Two",
      screen: "myapp.Menu",
      icon: require("./src/img/clearIcon.png"), // local image asset for the tab icon unselected state (optional on iOS)
      tabBarSelectedButtonColor: require("./src/img/clearIcon.png"),
      title: "Screen Two"
    }
  ],
  appStyle: {
    orientation: "portrait" // Sets a specific orientation to the entire app. Default: 'auto'. Supported values: 'auto', 'landscape', 'portrait'
  }
}); */
