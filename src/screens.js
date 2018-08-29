//@flow
import { Navigation } from "react-native-navigation";

import Home from "./components/view/Home";
import Menu from "./components/view/Menu";

import Gallery from "./components/view/Gallery";

import PictureView from "./_components/_keeper/PictureView";
import VideoView from "./_components/_keeper/VideoView";

import ImageCameraView from "./_components/_keeper/ImageCameraView";

export function registerScreens() {
  Navigation.registerComponent("myapp.Home", () => Home);
  Navigation.registerComponent("myapp.Menu", () => Menu);
  Navigation.registerComponent("myapp.Gallery", () => Gallery);
  Navigation.registerComponent("myapp.PictureView", () => PictureView);
  Navigation.registerComponent("myapp.VideoView", () => VideoView);

  Navigation.registerComponent("myapp.ImageCameraView", () => ImageCameraView);
}
