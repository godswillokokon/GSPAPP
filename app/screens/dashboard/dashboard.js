import React, { Component } from "react";
import FooterComponet from "../footer";
import Head from "../header";
// import styled from "styled-components";
import { View, StyleSheet, Platform, Dimensions, ImageBackground, Image, Text, TouchableOpacity } from "react-native";
import {
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

export default class Dashboard extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    const device_width = Dimensions.get("window").width;
    const device_height = Dimensions.get("window").height;

    return (
      <Container style={styles.container}>
        <Head />
        <Content>

        </Content>
        <FooterComponet name="overview" props={this.props} />
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  card: {},
  container: {
    backgroundColor: "#1c1d27"
  },
});
