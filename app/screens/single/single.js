import React, { Component } from "react";
import FooterComponet from "../footer";
import Head from "../header";
import { View, StyleSheet, Platform, Dimensions, Image, Text, TouchableOpacity, ScrollView } from "react-native";
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
    const body = this.props.navigation.state.params.body;
    const title = this.props.navigation.state.params.title;
    const quiz1 = this.props.navigation.state.params.quiz1;
    const quiz2 = this.props.navigation.state.params.quiz2;
    const device_width = Dimensions.get("window").width;
    const device_height = Dimensions.get("window").height;
    let { image } = this.state;
    return (
      <Container style={{ height: device_height, width: device_width, backgroundColor: "#1c1d27" }}>
        <Head navigation={this.props.navigation} />
        <Content>
          <Text style={styles.subtitle}>{title}</Text>
          <ScrollView style={{ backgroundColor: 'white', height: 420 }}>
            <Text style={{ color: 'black', fontSize: 25, margin: 10 }}>
              {body}
            </Text>
          </ScrollView>

          <TouchableOpacity style={styles.edit} onPress={() => this.props.navigation.navigate("Quiz", { first: quiz1, second: quiz2, title: title })}>
            <Text style={styles.editText}>Take Quiz</Text>
          </TouchableOpacity>

        </Content>
        <FooterComponet name="library" props={this.props} />
      </Container>
    );
  }

}
// <Video
//   source={{ uri: 'https://res.cloudinary.com/ogcodes/video/upload/v1568412865/egghead-get-json-data-from-an-api-using-fetch.mp4' }}
//   shouldPlay={this.state.shouldPlay}
//   resizeMode="contain"
//   style={{ width: device_width, height: 300 }}
//   isMuted={this.state.mute}
//   isLooping={this.state.isLooping}
// />
// <View style={styles.controlBar}>
//   <MaterialIcons
//     name={this.state.isLooping ? "select-all" : "repeat"}
//     size={45}
//     color="white"
//     onPress={this.handleLoop}
//   />
//   <MaterialIcons
//     name={this.state.shouldPlay ? "pause" : "play-arrow"}
//     size={45}
//     color="white"
//     onPress={this.handlePlayAndPause}
//   />
//   <MaterialIcons
//     name={this.state.mute ? "volume-mute" : "volume-up"}
//     size={45}
//     color="white"
//     onPress={this.handleVolume}
//   />

// </View>

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
    flex: 1,
    alignSelf: "center",
    backgroundColor: "#6771e4",
    padding: 20,
    margin: 50,
    width: 300,
    alignItems: "center",
    borderRadius: 39,
    // top: 40
  },

});
