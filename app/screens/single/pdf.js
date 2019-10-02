import React, { Component } from "react";
import FooterComponet from "../footer";
import Head from "../header";
import { StyleSheet, Dimensions, Text, TouchableOpacity, ScrollView, View } from "react-native";
import { Container, Content } from "native-base";
import PDFReader from 'rn-pdf-reader-js'
import { Constants } from 'expo'

export default class Pdf extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
  }


  render() {
    const device_width = Dimensions.get("window").width;
    const device_height = Dimensions.get("window").height;

    return (
      <View style={styles.container}>
        <Head navigation={this.props.navigation} />
        <TouchableOpacity style={styles.edit} onPress={() => this.props.navigation.navigate("Quiz", { first: quiz1, second: quiz2, title: title })}>
          <Text style={styles.editText}>Take Quiz</Text>
        </TouchableOpacity>
        <PDFReader
          source={{
            uri: 'https://res.cloudinary.com/ogcodes/image/upload/v1569954902/VLF_Technical_Assessment_JavaScript.pdf',
          }}
        />
        <FooterComponet name="library" props={this.props} />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
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
    alignSelf: "center",
    backgroundColor: "#6771e4",
    marginTop: 8,
    width: 300,
    height: 20,
    alignItems: "center",
    borderRadius: 39,
  },
});
