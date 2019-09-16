import React, { Component } from 'react';
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
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import FooterComponet from "../footer";
import Head from "../header";


export default class Main extends Component {
  state = { name: '' }
  onPress = () => {
    this.props.navigation.navigate('Chat', { name: this.state.name });
  }
  onChangeText = name => this.setState({ name });
  render() {
    return (
      <Container style={styles.container}>
        <Head navigation={this.props.navigation} />
        <Content>
          <Text style={styles.title}>Enter your name:</Text>
          <TextInput
            onChangeText={this.onChangeText}
            style={styles.nameInput}
            placeHolder="John Cena"
            value={this.state.name}
          />
          <TouchableOpacity onPress={this.onPress}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </Content>
        <FooterComponet name="profile" props={this.props} />
      </Container >
    );
  }
}
const offset = 24;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1c1d27',
  },
  nameInput: {
    height: offset * 2,
    margin: offset,
    paddingHorizontal: offset,
    borderColor: '#111111',
    borderWidth: 1,
  },
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  buttonText: {
    marginLeft: offset,
    fontSize: offset,
  },
});
