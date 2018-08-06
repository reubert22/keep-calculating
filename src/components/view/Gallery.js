//@flow
import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

type Props = {};
export default class Gallery extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>I'm your gallery</Text>
      </View>
    );
  }
}
