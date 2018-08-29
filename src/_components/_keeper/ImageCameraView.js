//@flow
import React, { PureComponent } from "react";
import { View, Text, StyleSheet } from "react-native";
import { CameraKitCameraScreen } from "react-native-camera-kit";

export default class ImageCameraView extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }

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
      <View style={styles.containerPictures}>
        <CameraKitCameraScreen
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerPictures: {
    flex: 1,
    backgroundColor: "white"
  }
});
