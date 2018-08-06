//@flow
import React, { Component } from "react";
import { TouchableNativeFeedback, View, Text, StyleSheet } from "react-native";

type Props = {
  value: string,
  handlePress: any
};

export default class CalcButtons extends Component<Props> {
  render() {
    const { value, handlePress } = this.props;
    return (
      <TouchableNativeFeedback onPress={() => handlePress(value)}>
        <View style={styles.containerButtons}>
          <Text style={styles.buttons}>{value}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  containerButtons: {
    width: "24.6%",
    backgroundColor: "#3b3c3d",
    alignItems: "center",
    justifyContent: "center"
  },
  buttons: {
    fontSize: 24,
    color: "#06FF06"
  }
});
