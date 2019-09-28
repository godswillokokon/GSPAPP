import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { FontAwesome } from '@expo/vector-icons'
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
          style={{ backgroundColor: '#1e2326', width: 150, marginRight: 25 }}
          button={<Text onPress={this.showMenu}> <FontAwesome name='ellipsis-v' size={45} color={'#1e2326'} /></Text>}
        >
          <MenuItem onPress={this.hideMenu} onPress={() => this.props.navigation.navigate('MainChat')}><Text style={styles.items}>Chat</Text></MenuItem>

          <MenuItem onPress={this.hideMenu} onPress={() => this.props.navigation.navigate('AboutUs')}><Text style={styles.items}>About</Text></MenuItem>
        </Menu>
      </View>
    );
  }
}
const styles = StyleSheet.create({ items: { color: '#6771e4' } });
