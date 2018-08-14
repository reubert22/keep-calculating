//@flow
import React, { PureComponent } from "react";
import { Image, TouchableOpacity, StyleSheet } from "react-native";
import ClearIcon from "../../img/clearIcon.png";

type Props = {
  onPress: any
};

export default class ClearButton extends PureComponent<Props> {
  render() {
    return (
      <TouchableOpacity
        style={styles.clearButtonContainer}
        onPress={this.props.onPress}
      >
        <Image style={styles.clearIcon} source={ClearIcon} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  clearButtonContainer: {
    width: "20%",
    alignItems: "center",
    justifyContent: "center"
  },
  clearIcon: {
    width: 30,
    height: 30
  }
});
