//@flow
import React, { PureComponent } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
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
        onPress={this.props.handlePress}
      >
        <Text style={styles.buttons}>{value}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  containerButtons: {
    width: "25%",
    backgroundColor: "#3b3c3d",
    alignItems: "center",
    justifyContent: "center",
    margin: 1
  },
  buttons: {
    fontSize: 24,
    color: "#06FF06"
  }
});
