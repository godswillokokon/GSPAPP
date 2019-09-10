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
      onEdit: false
    };
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
    console.log("user pro",user.user);
    const name = `${user.user.name}`;
    if (!this.state.onEdit) {
      return (
        <Container>
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
                  <Input disabled value={name} />
                </Item>
                <Item floatingLabel last>
                  <Label> Faculty</Label>
                  <Input disabled value={user.user.faculty} />
                </Item>
                <Item floatingLabel>
                  <Label>Mobile</Label>
                  <Input disabled value={user.user.phoneNumber} />
                </Item>
                <Item floatingLabel last>
                  <Label>Age</Label>
                  <Input disabled value={user.user.age} />
                </Item>
                <Item floatingLabel last>
                  <Label>Sex</Label>
                  <Input value={user.user.sex} />
                </Item>
                {/* <Item floatingLabel last>
                <Label>Password</Label>
                <Input disabled value="**********" />
              </Item> */}
              </Form>
              <TouchableOpacity
                style={styles.edit}
                onPress={() => {
                  this.setState({ onEdit: true });
                }}
              >
                <Text style={styles.editText}>Edit</Text>
              </TouchableOpacity>
            </View>
          </Content>
          <FooterComponet name="profile" props={this.props} />
        </Container>
      );
    } else {
      return (
        <Container>
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
                  <Input value={name} />
                </Item>
                <Item floatingLabel last>
                  <Label> Faculty</Label>
                  <Input disabled value={user.user.faculty} />
                </Item>
                <Item floatingLabel>
                  <Label>Mobile</Label>
                  <Input value={user.user.phoneNumber} />
                </Item>
                <Item floatingLabel last>
                  <Label>Age</Label>
                  <Input value={user.user.age} />
                </Item>
                <Item floatingLabel last>
                  <Label>Sex</Label>
                  <Input value={user.user.sex} />
                </Item>
                {/* <Item floatingLabel last>
                <Label>Password</Label>
                <Input disabled value="**********" />
              </Item> */}
              </Form>
              <TouchableOpacity style={styles.edit} onPress={() => { }}>
                <Text style={styles.editText}>Done</Text>
              </TouchableOpacity>
            </View>
          </Content>
          <FooterComponet name="profile" props={this.props} />
        </Container>
      );
    }
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
  // getUser: token => dispatch(GetUserData(token)),
  // refreshAuthentication: token => dispatch(refreshAuthentication(token))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
const styles = StyleSheet.create({
  card: {},
  head: {
    ...Platform.select({
      android: { paddingTop: 50 },
      ios: { paddingTop: 25 }
    }),
    backgroundColor: "#ff984d",
    paddingBottom: 40
  },
  body: {
    marginTop: 20,
    marginLeft: 41
  },
  title: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold"
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
    backgroundColor: "#ff984d",
    padding: 20,
    margin: 10,
    width: 100,
    alignItems: "center",
    borderRadius: 39
  },
  detail: {
    flex: 2
  },
  footer: {
    backgroundColor: "#ff984d"
  },
  footerActive: {
    paddingTop: 100,
    backgroundColor: "white"
  },
  badge: {
    borderRadius: 300,
    height: 14,
    width: 15
  },
  border: {
    borderWidth: 1,
    borderLeftColor: "#652d90",
    // borderColor: "#652d90",
    borderRightColor: "#7438a2",
    borderBottomColor: "#652d90",
    borderTopColor: "#652d90"
  },
  space: {
    marginBottom: 300
  },
  whiteText: {
    color: "white"
  }
});
