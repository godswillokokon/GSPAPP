import React, { Component } from 'react';
import {
  Container,
  Content,
} from "native-base";
import { StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';
import Head from "../header";

export default class MainChat extends Component {
  static navigationOptions = {
    header: null
  };
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
            placeHolder="OG codes"
            value={this.state.name}
          />
          <TouchableOpacity onPress={this.onPress}>
            <Text style={styles.buttonText}>Next</Text>
          </TouchableOpacity>
        </Content>
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
    borderColor: '#fff',
    borderWidth: 1,
    color: 'white'
  },
  title: {
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
    color: '#fff'
  },
  buttonText: {
    marginLeft: offset,
    fontSize: offset,
    color: '#fff'
  },
});
