//@flow
import { AppRegistry } from 'react-native';
import App from './App';

if(__DEV__){
    console.ignoredYellowBox = ['Remote debugger'];
}

AppRegistry.registerComponent('MyApp', () => App);
