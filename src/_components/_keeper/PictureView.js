//@flow
import React, { PureComponent } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import ActionButton from "react-native-action-button";
import { Navigation } from "react-native-navigation";
import { imageStore } from "../../store/ImageStore";
import imageService from "../../services/image.service";

type Props = {
  navigator: any
};

type State = {
  imgsFromDb: Array<any>
};

export default class PictureView extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);

    this.state = {
      imgsFromDb: []
    };
  }

  handleCamView = () => {
    this.props.navigator.push({
      screen: "myapp.ImageCameraView",
      title: "",
      navigatorStyle: {
        navBarHidden: true
      }
    });
  };

  componentDidMount() {
    imageService.get().then(images => {
      this.setState({
        imgsFromDb: images
      });
    });
  }

  render() {
    const { imgsFromDb } = this.state;
    return (
      <View style={styles.containerPictures}>
        {imgsFromDb.length > 0 &&
          imgsFromDb.map((item, index) => {
            return (
              <View style={styles.imgs} key={index}>
                <Image
                  style={{
                    height: "100%",
                    width: "100%"
                  }}
                  source={{
                    uri: item.uri
                  }}
                />
              </View>
            );
          })}

        <ActionButton
          buttonColor="rgba(231,76,60,1)"
          onPress={() => this.handleCamView()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerPictures: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 2
  },
  imgs: {
    width: "50%",
    height: 150,
    padding: 1
  }
});
