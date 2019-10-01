import React, { Component } from "react";
import { View, StyleSheet, Platform, Dimensions, Image, Text, TouchableOpacity } from "react-native";
import { Video } from 'expo-av';

import {
  Container,
  Content,
} from "native-base";
import FooterComponet from "../footer";
import Head from "../header";
import { MaterialIcons } from "@expo/vector-icons";

export default class Videoss extends Component {
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
      <Container style={{ backgroundColor: "#1c1d27" }}>
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
              name={this.state.mute ? "volume-mute" : "volume-up"}
              size={45}
              color="white"
              onPress={this.handleVolume}
            />
            <MaterialIcons
              name={this.state.shouldPlay ? "pause" : "play-arrow"}
              size={45}
              color="white"
              onPress={this.handlePlayAndPause}
            />
          </View>
          <TouchableOpacity style={styles.edit} onPress={() => this.props.navigation.navigate("Quiz", { first: quiz1, second: quiz2, title: title })}>
            <Text style={styles.editText}>Take Quiz</Text>
          </TouchableOpacity>

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
  editText: {
    color: "#1e2326"
  },
  edit: {
    alignSelf: "center",
    backgroundColor: "#6771e4",
    marginTop: 8,
    width: 300,
    height: 20,
    alignItems: "center",
    borderRadius: 39,
  },
});