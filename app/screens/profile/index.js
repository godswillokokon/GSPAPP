import React, { Component } from "react";
import { View, StyleSheet, Platform, Dimensions, ImageBackground, Image, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

import { Header, Left, Body, Right, Button, Icon, Container, Content, Thumbnail, Form, Item, Label, Input } from "native-base";
import { login, resetFailureAction, refreshAuthentication, GetUserData, logout } from "../../redux/actions/UserActions";
import Session from "../../utils/Session";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import FooterComponet from "../footer";
import Head from "../header";
// import console = require("console");
// import console = require("console");
// import console = require("console");

class Profile extends Component {
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
    const name = `${user.user.name}`;
    return (
      <Container style={styles.container}>
        <Head />

        <Content>
          <View style={styles.image}>
            <Thumbnail
              large
              source={{ uri: "https://res.cloudinary.com/ogcodes/image/upload/v1567648495/s6qha1jd092ayj28k2bv.png" }}
            />
          </View>
          <View>
            <Form>
              <Item floatingLabel>
                <Label>Name</Label>
                <Input disabled value={name} style={styles.info} />
              </Item>
              <Item floatingLabel >
                <Label> Faculty</Label>
                <Input disabled value={user.user.faculty} style={styles.info} />
              </Item>
              <Item floatingLabel>
                <Label>Mobile</Label>
                <Input disabled value={user.user.phoneNumber} style={styles.info} />
              </Item>
              <Item floatingLabel >
                <Label>Age</Label>
                <Input disabled value={user.user.age} style={styles.info} />
              </Item>
              <Item floatingLabel >
                <Label>Sex</Label>
                <Input disabled value={user.user.sex} style={styles.info} />
              </Item>

            </Form>
            <TouchableOpacity
              style={styles.edit}

            >
              <Text style={styles.editText}>Assessment Score</Text>
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
)(Profile);
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1d27"
  },
  image: {
    alignContent: "center",
    alignItems: "center",
    marginTop: 40
  },
  editText: {
    color: "#1e2326"
  },
  edit: {
    flex: 1,
    alignSelf: "center",
    backgroundColor: "#6771e4",
    padding: 20,
    margin: 10,
    width: 'auto',
    alignItems: "center",
    borderRadius: 39
  },
  info: {
    color: 'whitesmoke'
  }
});
