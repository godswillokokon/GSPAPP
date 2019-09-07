import React, { Component } from "react";

import { View, Text, StyleSheet } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { Ionicons, FontAwesome } from "@expo/vector-icons"

export default class MenuRight extends Component {
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  render() {

    return (
      <View>
        <Menu
          ref={this.setMenuRef}
          animationDuration={300}
          style={{ backgroundColor: "#1e2326", }}
          button={<Text onPress={this.showMenu}> <FontAwesome name="ellipsis-v" size={40} color={"#1e2326"} /></Text>}
        >
          <MenuItem onPress={this.hideMenu}><Text style={styles.items}>Assessment Score</Text></MenuItem>
          <MenuItem onPress={this.hideMenu}><Text style={styles.items}>Chat</Text></MenuItem>
          <MenuItem onPress={this.hideMenu}><Text style={styles.items}>About</Text></MenuItem>
          <MenuDivider />
          <MenuItem onPress={this.hideMenu}><Text style={styles.items}>Feedback</Text></MenuItem>
        </Menu>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  items: {
    color: "#ff984d"
  }

});