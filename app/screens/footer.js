import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Button, Footer, FooterTab, Badge } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
// import console = require("console");
export default class FooterComponet extends Component {
  render() {
    const { name, props } = this.props;
    switch (name) {
      case "library": {
        return (
          <Footer style={styles.footer}>
            <FooterTab style={styles.footer}>
              <Button badge vertical style={styles.border} onPress={() => props.navigation.navigate("Dashboard")}>
                <View style={styles.row}>
                  <FontAwesome name="align-left" size={15} color={"#1e2326"} />
                  <Text style={styles.whiteText}>Overview</Text>
                </View>
              </Button>
              <Button vertical style={styles.border} onPress={() => props.navigation.navigate("Profile")}>
                <View style={styles.row}>
                  <FontAwesome name="address-card" size={15} color={"#1e2326"} />
                  <Text style={styles.whiteText}>Profile</Text>
                </View>
              </Button>
              <Button active badge vertical style={[styles.footerActive, styles.border]}>
                {/* <Badge>
                  <Text style={styles.badge}>10</Text>
                </Badge> */}
                <View style={styles.row}>
                  <FontAwesome name="leanpub" size={15} color={"#ff984d"} />
                  <Text style={styles.active}>Library</Text>
                </View>
              </Button>
            </FooterTab>
          </Footer>
        );
        break;
      }
      case "overview": {
        return (
          <Footer style={styles.footer}>
            <FooterTab style={styles.footer}>
              <Button active badge vertical style={[styles.footerActive, styles.border]}>
                <View style={styles.row}>
                  <FontAwesome name="align-left" size={15} color={"#ff984d"} />
                  <Text style={styles.active}>Overview</Text>
                </View>
              </Button>
              <Button vertical style={styles.border} onPress={() => props.navigation.navigate("Profile")}>
                <View style={styles.row}>
                  <FontAwesome name="address-card" size={15} color={"#1e2326"} />
                  <Text style={styles.whiteText}>Profile</Text>
                </View>
              </Button>
              <Button badge vertical style={styles.border} onPress={() => props.navigation.navigate("Library")}>
                <View style={styles.row}>
                  {/* <Badge>
                    <Text style={styles.badge}>10</Text>
                  </Badge> */}
                  <View style={styles.row}>
                    <FontAwesome name="leanpub" size={15} color={"#1e2326"} />
                    <Text style={styles.whiteText}>Library</Text>
                  </View>
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
              <Button badge vertical style={styles.border} onPress={() => props.navigation.navigate("Dashboard")}>
                <FontAwesome name="align-left" size={15} color={"#1e2326"} />
                <Text style={styles.whiteText}>Overview</Text>
              </Button>
              <Button active badge vertical style={[styles.footerActive, styles.border]}>
                <View style={styles.row}>
                  <FontAwesome name="address-card" size={15} color={"#ff984d"} />
                  <Text style={styles.active}>Profile</Text>
                  {/* <Badge>
                    <Text style={styles.badge}>10</Text>
                  </Badge> */}
                </View>
              </Button>
              <Button badge vertical style={styles.border} onPress={() => props.navigation.navigate("Library")}>
                {/* <Badge>
                  <Text style={styles.badge}>10</Text>
                </Badge> */}
                <View style={styles.row}>
                  <FontAwesome name="leanpub" size={15} color={"#1e2326"} />
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
  container: {
    flex: 1
  },
  footer: {
    backgroundColor: "#ff984d"
  },
  footerActive: {
    backgroundColor: "#1e2326",
    height: 100
  },
  active: {
    color: "#ff984d"
  },
  badge: {
    borderRadius: 300,
    height: 14,
    width: 15
  },
  whiteText: {
    color: "#1e2326"
  },
  border: {
    borderWidth: 1,
    borderLeftColor: "#ff9f59",
    // borderColor: "#ff9f59",
    borderRightColor: "#ff9f59",
    borderBottomColor: "#ff9f59",
    borderTopColor: "#ff984d"
  },
  row: {
    alignContent: "center",
    alignItems: "center"
    // flexDirection: "row"
  }
});
