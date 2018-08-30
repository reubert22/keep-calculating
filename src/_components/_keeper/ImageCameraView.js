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
import CaptureBtn from "../../img/cameraButton.png";
import ChangeCameraBtn from "../../img/cameraFlipIcon.png";

export default class ImageCameraView extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }

  capturePicture = async () => {
    let x: any = await this.camera.capture(true);
    //console.log("salvar em AsyncStorage: ", x);
  };

  changeCamera = () => {
    this.camera.changeCamera();
  };

  render() {
    return (
      <View style={styles.containerPictures}>
        <CameraKitCamera
          ref={cam => (this.camera = cam)}
          style={{
            flex: 1,
            backgroundColor: "white"
          }}
          cameraOptions={{
            flashMode: "auto",
            focusMode: "on",
            zoomMode: "on",
            ratioOverlay: "1:1"
          }}
          onReadQRCode={event =>
            console.log(event.nativeEvent.qrcodeStringValue)
          }
        />
        {/* Put below on BtnImgCamera */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end"
          }}
        >
          <TouchableNativeFeedback onPress={this.changeCamera}>
            <View
              style={{
                width: 60,
                height: 60,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Image source={ChangeCameraBtn} />
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={this.capturePicture}>
            <View
              style={{
                paddingTop: 10
              }}
            >
              <Image
                style={{
                  width: 60,
                  height: 60,
                  paddingTop: 5,
                  paddingBottom: 5
                }}
                source={CaptureBtn}
              />
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback>
            <View
              style={{
                width: 60,
                height: 60,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text style={{ color: "#fff", fontSize: 20 }}>OK</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerPictures: {
    flex: 2,
    backgroundColor: "#000"
  }
});
