//@flow
import React, { PureComponent } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback
} from "react-native";
import { CameraKitCamera } from "react-native-camera-kit";

import BtnImgCamera from "./CameraComponents/BtnImgCamera";
import { imageStore } from "../../store/ImageStore";
import imageService from "../../services/image.service";

type Props = {
  navigator: any
};
export default class ImageCameraView extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }

  capturePicture = async () => {
    let image: Object = await this.camera.capture(false);
    this.saveImage(image);
  };

  saveImage = (image: Object) => {
    imageService.save(image);
    this.props.navigator.pop();
  };

  changeCamera = () => {
    this.camera.changeCamera();
  };

  render() {
    return (
      <View style={styles.containerPictures}>
        <CameraKitCamera
          ref={cam => (this.camera = cam)}
          style={styles.cameraKitCamera}
          cameraOptions={{
            flashMode: "auto",
            focusMode: "on",
            zoomMode: "on",
            ratioOverlay: "1:1"
          }}
        />
        <View>
          <BtnImgCamera
            onChangeCamera={this.changeCamera}
            onTakePicture={this.capturePicture}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerPictures: {
    flex: 2,
    backgroundColor: "#000"
  },
  cameraKitCamera: {
    flex: 1,
    backgroundColor: "white"
  }
});
