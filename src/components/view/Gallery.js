//@flow
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  FlatList,
  ScrollView
} from "react-native";
import PictureView from "../../_components/_keeper/PictureView";
import VideoView from "../../_components/_keeper/VideoView";
import TipsView from "../../_components/_keeper/TipsView";
import { Navigation } from "react-native-navigation";

type Props = { navigator: any };
export default class Gallery extends Component<Props> {
  constructor(props: Props) {
    super(props);

    this.state = {
      menuSelected: 1
    };
  }

  handleBorder = (selected: number) => {
    if (this.state.menuSelected === selected) {
      return {
        borderBottomWidth: 3,
        borderBottomColor: "red"
      };
    }
  };

  changingContent = (id: number) => {
    this.setState({
      menuSelected: id
    });
  };

  componentDidMount() {
    this.setState({
      menuSelected: 1
    });
  }

  render() {
    const { menuSelected } = this.state;
    let content;
    if (menuSelected === 1) {
      content = <PictureView />;
    } else if (menuSelected === 2) {
      content = <VideoView />;
    } else {
      content = <TipsView />;
    }

    return (
      <View style={{ flex: 1, backgroundColor: "#062D52" }}>
        <View
          style={{
            height: "12.5%",
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
        <ScrollView style={{ height: "87%", backgroundColor: "#fff" }}>
          {content}
        </ScrollView>
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
