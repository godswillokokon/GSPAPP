import React, { Component } from "react";
import { View, StyleSheet, Platform, Dimensions, ImageBackground, Image, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { Header, Left, Body, Right, Button, Icon, Container, Content, Thumbnail, Form, Item, Label, Input } from "native-base";
import { login, resetFailureAction, refreshAuthentication, GetUserData, logout } from "../../redux/actions/UserActions";
import Session from "../../utils/Session";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import FooterComponet from "../footer";
import Head from "../header";
import {
  ProgressChart,
} from 'react-native-chart-kit'

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      onEdit: false,
      name: "",
      faculty: "",
      phoneNumber: "",
    };

  }

  componentWillMount() {

  }
  componentDidMount() {
    // const data = this.props.getUser();
    // this.setState({
    //   data
    // });

  }

  // loadAsync = async () => {
  //   //load all required info
  //   //user info, auth state..etc
  //   const getToken = await Session.getData("token");
  //   if (getToken) {
  //    this.props.getUser();

  //     console.log(this.props.user)
  //     // this.setState({
  //     //   data
  //     // })
  //     // console.log("cyyyyyyyyyyyyyyyy");
  //     // return console.log(data);
  //   }
  // };
  render() {
    const device_width = Dimensions.get("window").width;
    const device_height = Dimensions.get("window").height;
    const { user } = this.props;
    // console.log("user pro", user);
    // console.log("user pro", user.user);
    const data = {
      labels: ['Score', 'Quiz', 'IQ'], // optional
      data: [0.6, 0.6, 0.6]
    }
    const chartConfig = {
      // backgroundGradientFrom: '#1e2326',
      backgroundGradientTo: '#1e2326',
      color: (opacity = 2) => `rgba(103, 113, 228, ${opacity})`,
      // color: '#6771e4',
      strokeWidth: 3, // optional, default 3

    }
    const name = `${user.user.name}`;
    return (
      <Container style={styles.container}>
        <Head navigation={this.props.navigation} />

        <Content>
          <View style={styles.question}>
            <Text> There are two organizational systems practiced in the University library. What are they? </Text>
          </View>
          <View>

            <TouchableOpacity style={styles.answers}>
              <Text>a) Centralized and decentralized</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.answers}>
              <Text>b) Centralized and decentralized</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.answers}>
              <Text>c) Centralized and decentralized</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.answers}>
              <Text>d) Centralized and decentralized</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.answers}>
              <Text>e) Centralized and decentralized</Text>
            </TouchableOpacity>


            <TouchableOpacity
              style={styles.next}
            >
              <TouchableOpacity style={styles.nextText} onPress={() => this.props.navigation.navigate("Assessment")}>
                Next
              </TouchableOpacity>

            </TouchableOpacity>

          </View>
        </Content>
        <FooterComponet name="profile" props={this.props} />
      </Container>
    );


  }
}
const mapStateToProps = state => {
  const { user } = state;
  return { user: user };
};

const mapDispatchToProps = dispatch => ({
  // onLogin: data => dispatch(login(data)),
  // onLogout: () => dispatch(logout()),
  // onSignUp: data => dispatch(createAccount(data)),
  // resetFailureAction: () => dispatch(resetFailureAction()),
  getUser: token => dispatch(GetUserData(token)),
  // refreshAuthentication: token => dispatch(refreshAuthentication(token))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1d27"
  },
  question: {
    alignContent: "center",
    alignItems: "center",
    marginTop: 40
  },
  nextText: {
    color: "#1e2326"
  },
  next: {
    flex: 1,
    alignSelf: "center",
    backgroundColor: "#6771e4",
    padding: 20,
    margin: 10,
    width: 300,
    alignItems: "center",
    borderRadius: 39
  },
  answers: {
    color: 'whitesmoke'
  }
});
