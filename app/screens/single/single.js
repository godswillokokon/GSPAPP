import React, { Component } from "react";
import FooterComponet from "../footer";
import Head from "../header";
import { View, StyleSheet, Platform, Dimensions, Image, Text, TouchableOpacity } from "react-native";
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
import { Ionicons, FontAwesome } from "@expo/vector-icons";

export default class Single extends Component {
  static navigationOptions = {
    header: null
  };
  state = {
    image: 'https://res.cloudinary.com/ogcodes/image/upload/v1565462608/tdghephwnr5z5jl0d2ul.jpg',

  };
  render() {
    const device_width = Dimensions.get("window").width;
    const device_height = Dimensions.get("window").height;
    let { image } = this.state;
    return (
      <Container style={{ height: device_height, width: device_width }}>
        <Head />
        <Content>
          <Card>
            <CardItem cardBody style={styles.conatiner}>
              <Image source={{ uri: image }} />
            </CardItem>
          </Card>
          <View style={styles.space}>
            <TouchableOpacity style={styles.edit} >
              <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.report} >
              <Text style={styles.whiteText}>Report</Text>
            </TouchableOpacity>
          </View>
        </Content>
        <FooterComponet name="library" props={this.props} />
      </Container>
    );
  }

}

const styles = StyleSheet.create({
  conatiner: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  card: {},
  space: {
    marginBottom: 300,
  },
  whiteText: {
    color: "white"
  },
  editText: {
    color: "white",
  },
  edit: {
    flex: 1,
    alignSelf: "center",
    backgroundColor: "#652d90",
    padding: 20,
    margin: 10,
    width: 100,
    alignItems: "center",
    borderRadius: 39

  },
  report: {
    alignSelf: "center",
    backgroundColor: "red",
    padding: 20,
    margin: 10,
    width: 200,
    alignItems: "center",
    borderRadius: 39,
  },


});
