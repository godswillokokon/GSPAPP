import React, { Component } from 'react';
import { View, StyleSheet, Platform, Dimensions, Text } from 'react-native';
import { Header, Left, Body, Right, Button } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import MenuRight from "./meun";

export default class Head extends Component {

  render() {
    return (
      <View>
        <Header style={styles.head}>
          <Left style={{ marginTop: 13 }}>
            <Button transparent onPress={() => {
              this.props.navigation.goBack();
            }}>
              <FontAwesome name="angle-double-left" color={"#1e2326"} size={40} />
            </Button>
          </Left>
          <Body style={styles.body}>
            <Text style={styles.title}></Text>
          </Body>
          <Right style={{ marginTop: 15 }}>
            <Button transparent >
              <MenuRight navigation={this.props.navigation} style={{ padding: 300 }} />
            </Button>
          </Right>
        </Header>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  head: {
    ...Platform.select({
      android: { paddingTop: 50 },
      ios: { paddingTop: 25 }
    }),
    backgroundColor: "#6771e4",
    paddingBottom: 40
  },
});  