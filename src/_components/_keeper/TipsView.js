//@flow
import React, { PureComponent } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class TipsView extends PureComponent<> {
  render() {
    return (
      <View style={styles.containerTips}>
        <View style={styles.containerRow}>
          <View style={styles.tipsView}>
            <Text>Your title here</Text>
          </View>
        </View>
        <View style={styles.containerRow}>
          <View style={styles.tipsView}>
            <Text>Your title here</Text>
          </View>
        </View>
        <View style={styles.containerRow}>
          <View style={styles.tipsView}>
            <Text>Your title here</Text>
          </View>
        </View>
        <View style={styles.containerRow}>
          <View style={styles.tipsView}>
            <Text>Your title here</Text>
          </View>
        </View>
        <View style={styles.containerRow}>
          <View style={styles.tipsView}>
            <Text>Your title here</Text>
          </View>
        </View>
        <View style={styles.containerRow}>
          <View style={styles.tipsView}>
            <Text>Your title here</Text>
          </View>
        </View>
        <View style={styles.containerRow}>
          <View style={styles.tipsView}>
            <Text>Your title here</Text>
          </View>
        </View>
        <View style={styles.containerRow}>
          <View style={styles.tipsView}>
            <Text>Your title here</Text>
          </View>
        </View>
        <View style={styles.containerRow}>
          <View style={styles.tipsView}>
            <Text>Your title here</Text>
          </View>
        </View>
        <View style={styles.containerRow}>
          <View style={styles.tipsView}>
            <Text>Your title here</Text>
          </View>
        </View>
        <View style={styles.containerRow}>
          <View style={styles.tipsView}>
            <Text>Your title here</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerTips: { flex: 1, flexDirection: "column", backgroundColor: "white" },
  containerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 5,
    marginRight: 5,
    marginTop: 5
  },
  tipsView: {
    width: "100%",
    height: 70,
    backgroundColor: "powderblue",
    alignItems: "center",
    justifyContent: "center"
  }
});
