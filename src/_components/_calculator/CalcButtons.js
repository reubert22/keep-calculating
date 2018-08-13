//@flow
import React, { PureComponent } from "react";
import {
  TouchableNativeFeedback,
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import ColumnDivision from "../ColumnDivision";

type Props = {
  value: string,
  handlePress: any
};

export default class CalcButtons extends PureComponent<Props> {
  render() {
    const { value, handlePress } = this.props;
    return (
      <TouchableOpacity
        style={styles.containerButtons}
        onPress={() => handlePress(value)}
      >
        <Text style={styles.buttons}>{value}</Text>
      </TouchableOpacity>
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
