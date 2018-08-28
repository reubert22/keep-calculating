//@flow
import React, { PureComponent } from "react";
import { CameraKitCameraScreen } from "react-native-camera-kit";

export class PicCamView extends PureComponent<> {
  onBottomButtonPressed(event) {
    const captureImages = JSON.stringify(event.captureImages);
    Alert.alert(
      `${event.type} button pressed`,
      `${captureImages}`,
      [{ text: "OK", onPress: () => console.log("OK Pressed") }],
      { cancelable: false }
    );
  }

  render() {
    return (
      <CameraKitCameraScreen
        style={{
          flex: 1
        }}
        actions={{ rightButtonText: "Done", leftButtonText: "Cancel" }}
        onBottomButtonPressed={() => {
          console.log("hey");
        }}
        flashImages={{
          on: require("../../img/flashOn.png"),
          off: require("../../img/flashOff.png"),
          auto: require("../../img/flashAuto.png")
        }}
        cameraFlipImage={require("../../img/cameraFlipIcon.png")}
        captureButtonImage={require("../../img/cameraButton.png")}
      />
    );
  }
}
