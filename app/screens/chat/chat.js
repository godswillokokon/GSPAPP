import React, { Component } from 'react'
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Content,
  Input,
  Footer,
  Form,
  Item,
  Card,
  CardItem
} from "native-base";
import { Text, Image, AppRegistry, StyleSheet, Platform, TouchableOpacity, View } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import FooterComponet from "../footer";
import Head from "../header";

export default class Chat extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <Container style={styles.container}>
        <Head navigation={this.props.navigation} />
        <Content>

        </Content>
        <FooterComponet name="profile" props={this.props} />
      </Container >
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1c1d27',
  },
});