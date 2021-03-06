import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Button, Footer, FooterTab } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
export default class FooterComponet extends Component {
  render() {
    const { name, props } = this.props;
    switch (name) {
      case "library": {
        return (
          <Footer style={styles.footer}>
            <FooterTab style={styles.footer}>
              <Button vertical onPress={() => props.navigation.navigate("Profile")}>
                <View style={styles.row}>
                  <FontAwesome name="address-card" size={15} color={"#fff"} />
                  <Text style={styles.whiteText}>Profile</Text>
                </View>
              </Button>
              <Button active badge vertical style={styles.footerActive}>
                <View style={styles.row}>
                  <FontAwesome name="leanpub" size={15} color={"#6771e4"} />
                  <Text style={styles.active}>Library</Text>
                </View>
              </Button>
            </FooterTab>
          </Footer>
        );
        break;
      }
      case "profile": {
        return (
          <Footer style={styles.footer}>
            <FooterTab style={styles.footer}>
              <Button active badge vertical style={styles.footerActive}>
                <View style={styles.row}>
                  <FontAwesome name="address-card" size={15} color={"#6771e4"} />
                  <Text style={styles.active}>Profile</Text>
                </View>
              </Button>
              <Button badge vertical onPress={() => props.navigation.navigate("Library")}>
                <View style={styles.row}>
                  <FontAwesome name="leanpub" size={15} color={"#fff"} />
                  <Text style={styles.whiteText}>Library</Text>
                </View>
              </Button>
            </FooterTab>
          </Footer>
        );
        break;
      }
    }
  }
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#6771e4",
  },
  footerActive: {
    backgroundColor: "#1e2326",
  },
  active: {
    color: "#6771e4",
  },
  whiteText: {
    color: "#1e2326",
  },
  row: {
    alignContent: "center",
    alignItems: "center",
  }
});
