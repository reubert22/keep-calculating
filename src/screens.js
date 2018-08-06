//@flow
import { Navigation } from "react-native-navigation";

import Home from "./components/view/Home";
import Menu from "./components/view/Menu";

import Gallery from "./components/view/Gallery";

export function registerScreens() {
  Navigation.registerComponent("myapp.Home", () => Home);
  Navigation.registerComponent("myapp.Menu", () => Menu);
  Navigation.registerComponent("myapp.Gallery", () => Gallery);
}
