import React, { Component } from "react";
import FooterComponet from "../footer";
import Head from "../header";
import { StyleSheet, Dimensions, Text, TouchableOpacity, ScrollView } from "react-native";
import { Container, Content } from "native-base";

export default class Single extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const body = this.props.navigation.state.params.body;
    const title = this.props.navigation.state.params.title;
    const quiz1 = this.props.navigation.state.params.quiz1;
    const quiz2 = this.props.navigation.state.params.quiz2;
    const device_width = Dimensions.get("window").width;
    const device_height = Dimensions.get("window").height;

    return (
      <Container style={{ height: device_height, width: device_width, backgroundColor: "#1c1d27" }}>
        <Head navigation={this.props.navigation} />
        <Content>
          <Text style={styles.subtitle}>{title}</Text>
          <ScrollView style={{ backgroundColor: 'white', height: 420 }}>
            <Text style={{ color: 'black', fontSize: 25, margin: 10 }}>
              {body}
            </Text>
          </ScrollView>
          <TouchableOpacity style={styles.edit} onPress={() => this.props.navigation.navigate("Quiz", { first: quiz1, second: quiz2, title: title })}>
            <Text style={styles.editText}>Take Quiz</Text>
          </TouchableOpacity>
        </Content>
        <FooterComponet name="library" props={this.props} />
      </Container>
    );
  }

}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 20,
    color: "white",
    textAlign: 'center',
    margin: 2
  },
  editText: {
    color: "#1e2326"
  },
  edit: {
    flex: 1,
    alignSelf: "center",
    backgroundColor: "#6771e4",
    padding: 20,
    margin: 50,
    width: 300,
    alignItems: "center",
    borderRadius: 39,
  },
});
