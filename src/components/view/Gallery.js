//@flow
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {};
export default class Gallery extends Component<Props> {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>I'm your gallery</Text>
      </View>
    );
  }
}
