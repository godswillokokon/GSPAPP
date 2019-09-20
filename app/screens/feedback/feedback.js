import React, { Component } from "react";
import FooterComponet from "../footer";
import Head from "../header";

import {
  Text,
  View,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Dimensions,
  Image,
  ImageBackground,
  FlatList
} from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  CardItem,
  Card,
  Right,
  Button,
  Icon,
  Title,
  Content,
  Input,
  Textarea,
  Form,
  Item
} from "native-base";
import { Ionicons, FontAwesome } from "@expo/vector-icons";


export default class Feedback extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      star1Color: "grey",
      star2Color: "grey",
      star3Color: "grey",
      star4Color: "grey",
      star5Color: "grey",
      username: "",
      email: "",
      password: ""
    };

  }

  star1 = () => {
    this.setState({
      star1Color: "#FF9501",
      star2Color: "grey",
      star3Color: "grey",
      star4Color: "grey",
      star5Color: "grey"

    })
  }
  star2 = () => {
    this.setState({
      star1Color: "#FF9501",
      star2Color: "#FF9501",
      star3Color: "grey",
      star4Color: "grey",
      star5Color: "grey"

    })
  }

  star3 = () => {
    this.setState({
      star1Color: "#FF9501",
      star2Color: "#FF9501",
      star3Color: "#FF9501",
      star4Color: "grey",
      star5Color: "grey",


    })
  }
  star4 = () => {
    this.setState({
      star1Color: "#FF9501",
      star2Color: "#FF9501",
      star3Color: "#FF9501",
      star4Color: "#FF9501",
      star5Color: "grey",


    })
  }
  star5 = () => {
    this.setState({
      star1Color: "#FF9501",
      star2Color: "#FF9501",
      star3Color: "#FF9501",
      star4Color: "#FF9501",
      star5Color: "#FF9501"

    })
  }

  render() {
    const device_width = Dimensions.get("window").width;
    const device_height = Dimensions.get("window").height;

    return (
      <Container style={{ height: device_height, width: device_width, backgroundColor: "#1c1d27" }}>
        <Head navigation={this.props.navigation} />
        <Content>
          <Text style={styles.RateText}>
            User Experience Rating
              </Text>
          <View style={styles.stars}>
            <TouchableOpacity onPress={this.star1}>
              <FontAwesome name="star" size={40} color={this.state.star1Color} />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.star2}>
              <FontAwesome name="star" size={40} color={this.state.star2Color} />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.star3}>
              <FontAwesome name="star" size={40} color={this.state.star3Color} />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.star4}>
              <FontAwesome name="star" size={40} color={this.state.star4Color} />
            </TouchableOpacity>
            <TouchableOpacity onPress={this.star5}>
              <FontAwesome name="star" size={40} color={this.state.star5Color} />
            </TouchableOpacity>
          </View>
          <Form>
            <Input placeholder="Your feedbacks are welcomed..." returnKeyType="next" style={styles.textArea} />
            <Input placeholder="Please enter your name " returnKeyType="send" style={styles.textEmail} />
            <Button bordered style={styles.submitBtn}>
              <Text style={{ color: 'white' }}>Submit Feedback</Text>
            </Button>
          </Form>


        </Content>

      </Container>
    );
  }
}

const styles = StyleSheet.create({
  stars: {
    alignItems: "baseline",
    justifyContent: "space-evenly",
    alignSelf: "stretch",
    flexDirection: "row",
    marginTop: 10
  },
  textArea: {
    // backgroundColor: "grey",

    color: "black",
    height: 100,
    width: 300,
    alignSelf: "center",
    margin: 20,
    borderColor: "grey",
    borderWidth: 1
  },
  RateText: {
    alignSelf: "center",
    marginTop: 5,
    fontSize: 20,
    color: 'white'
  },
  textEmail: {
    marginTop: 14,
    color: "black",
    borderColor: "grey",
    borderWidth: 1,
    width: 300,
    alignSelf: "center"
  },
  submitBtn: {
    backgroundColor: "#6771e4",
    width: 200,
    height: 50,
    alignSelf: "center",
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  footerImage: {
    margin: 30
  }
});
