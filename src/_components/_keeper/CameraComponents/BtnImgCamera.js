//@flow
import React, { PureComponent } from "react";
import { View, TouchableNativeFeedback, Image, Text } from "react-native";

import CaptureBtn from "../../../img/cameraButton.png";
import ChangeCameraBtn from "../../../img/cameraFlipIcon.png";

type Props = {
  onChangeCamera: any,
  onTakePicture: any
};

export default class BtnImgCamera extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "flex-end"
        }}
      >
        <TouchableNativeFeedback onPress={this.props.onChangeCamera}>
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
        <TouchableNativeFeedback onPress={this.props.onTakePicture}>
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
    );
  }
}
