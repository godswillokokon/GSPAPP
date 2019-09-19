import React, { Component } from "react";
import FooterComponet from "../footer";
import Head from "../header";
import { View, StyleSheet, Platform, Dimensions, Image, Text, TouchableOpacity } from "react-native";
// import { WebView } from 'react-native-webview';
import { Video } from 'expo';
import {
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Container,
  Content,
  CardItem,
  Thumbnail,
  Card,
  Footer,
  FooterTab,
  Badge,
  Form,
  Item,
  Label,
  Input,
  Textarea
} from "native-base";
import { MaterialIcons, Octicons } from "@expo/vector-icons";

export default class Single extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    mute: false,
    shouldPlay: false,
    isLooping: false,
  }

  handlePlayAndPause = () => {
    this.setState((prevState) => ({
      shouldPlay: !prevState.shouldPlay
    }));
  }

  handleVolume = () => {
    this.setState(prevState => ({
      mute: !prevState.mute,
    }));
  }
  handleLoop = () => {
    this.setState((prevState) => ({
      isLooping: !prevState.isLooping
    }));
  }
  render() {
    const device_width = Dimensions.get("window").width;
    const device_height = Dimensions.get("window").height;
    let { image } = this.state;
    return (
      <Container style={{ height: device_height, width: device_width, backgroundColor: "#1c1d27" }}>
        <Head navigation={this.props.navigation} />
        <Content>
          <Text style={styles.subtitle}>Chapter 1</Text>
          <Video
            source={{ uri: 'https://res.cloudinary.com/ogcodes/video/upload/v1568412865/egghead-get-json-data-from-an-api-using-fetch.mp4' }}
            shouldPlay={this.state.shouldPlay}
            resizeMode="contain"
            style={{ width: device_width, height: 300 }}
            isMuted={this.state.mute}
            isLooping={this.state.isLooping}
          />
          <View style={styles.controlBar}>
            <MaterialIcons
              name={this.state.isLooping ? "select-all" : "repeat"}
              size={45}
              color="white"
              onPress={this.handleLoop}
            />
            <MaterialIcons
              name={this.state.shouldPlay ? "pause" : "play-arrow"}
              size={45}
              color="white"
              onPress={this.handlePlayAndPause}
            />
            <MaterialIcons
              name={this.state.mute ? "volume-mute" : "volume-up"}
              size={45}
              color="white"
              onPress={this.handleVolume}
            />
            <TouchableOpacity>
              <Text>Take Quiz</Text>
            </TouchableOpacity>
          </View>


        </Content>
        <FooterComponet name="library" props={this.props} />
      </Container>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  controlBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  subtitle: {
    fontSize: 20,
    color: "white",
    textAlign: 'center',
    margin: 2
  },

});
