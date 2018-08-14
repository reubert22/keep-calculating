//@flow
import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableNativeFeedback } from "react-native";

type Props = {};
export default class Gallery extends Component<Props> {
  constructor(props: Props) {
    super(props);

    this.state = { actualContent: "hey", menuSelected: 0 };
  }
  handleBorder = (selected: number) => {
    if (this.state.menuSelected === selected) {
      return {
        borderTopWidth: 3,
        borderTopColor: "red"
      };
    }
  };

  changingContent = (id: number) => {
    let content;
    if (id === 1) {
      content = <Text>Foto</Text>;
    } else if (id === 2) {
      content = <Text>Video</Text>;
    } else {
      content = <Text>Anotações</Text>;
    }
    this.setState({
      actualContent: content,
      menuSelected: id
    });
  };
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#062D52" }}>
        <View
          style={{
            height: "12%",
            flexDirection: "row",
            backgroundColor: "red"
          }}
        >
          <TouchableNativeFeedback onPress={() => this.changingContent(1)}>
            <View style={[styles.menus, this.handleBorder(1)]}>
              <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff" }}>
                Fotos
              </Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => this.changingContent(2)}>
            <View style={[styles.menus, this.handleBorder(2)]}>
              <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff" }}>
                Videos
              </Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback onPress={() => this.changingContent(3)}>
            <View style={[styles.menus, this.handleBorder(3)]}>
              <Text style={{ fontSize: 15, fontWeight: "bold", color: "#fff" }}>
                Anotações
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        <View style={{ height: "88%", backgroundColor: "#fff" }}>
          <Text>{this.state.actualContent}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menus: {
    width: "33.33%",
    height: 65,
    backgroundColor: "#063e72",
    alignItems: "center",
    justifyContent: "center"
  }
});
