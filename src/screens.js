//@flow
import { Navigation } from 'react-native-navigation';

import Home from './components/view/Home';
import Menu from './components/view/Menu';

export function registerScreens(){
    Navigation.registerComponent('myapp.Home', () => Home);
    Navigation.registerComponent('myapp.Menu', () => Menu);
}