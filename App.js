//@flow
import { Navigation } from 'react-native-navigation';

import { registerScreens } from './src/screens';

registerScreens();

Navigation.startSingleScreenApp({
  screen: {
      screen: 'myapp.Home',
      title: "Home",
      //navigatorStyle
  },
  drawer: {
    left: {
      screen: 'myapp.Menu'
    }
  }
});