import React, { Component } from "react";
import { View, StyleSheet, Platform, Image, Dimensions, ActivityIndicator, TouchableOpacity, ImageBackground } from "react-native";
import { Container, Content, Form, Item, Input, Left, Button, Text, CheckBox, Body, ListItem } from "native-base";
import { connect } from "react-redux";
import { createAccount, resetFailureAction, refreshAuthentication, GetUserData, logout } from "../../redux/actions/UserActions";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

class Register extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      checked: true,
      name: "",
      faculty: "",
      phoneNumber: "",
      password: "",
      isLoggedIn: false,
      isLoading: false,
      isAppReady: false,
      authError: null,
      authReady: false,
      tokenValidity: null
    };
  }
  UnCheckBox() {
    this.setState({
      checked: false
    });
  }
  CheckBox() {
    this.setState({
      checked: true
    });
  }
  Clicked() {
    this.state.checked ? this.UnCheckBox() : this.CheckBox();
    // if (this.state.checked) return console.log("checked");
    // if (!this.state.checked) return console.log("unchecked");
  }
  _simulateSignup = (name, faculty, phoneNumber, password) => {
    this.setState({ isLoading: true });
    this.props.onSignUp({ name, phoneNumber, faculty, password });
  };

  render() {
    const device_width = Dimensions.get("window").width;
    const device_height = Dimensions.get("window").height;
    // console.log("your phoneNumber height is ",device_height);
    // console.log("your phoneNumber width is ",device_width);

    return (
      <Container style={styles.container} >
        <ImageBackground source={require("../../../assets/back.jpg")} style={{ height: device_height + 48, width: device_width }}>
          <Text style={styles.logo}>
            <Image source={require("../../../assets/trans.png")} style={{ width: 552 / 2, height: 400 / 2 }} />
          </Text>
          <Content style={{ top: 10 }}>
            <Form>
              <Item style={[styles.loginMidLine]}>
                <FontAwesome name="user" size={25} color={"black"} style={styles.icons} />
                <Input
                  placeholder="Full Name"
                  type="text"
                  placeholderTextColor="black"
                  onChangeText={value => this.setState({ name: value })}
                  returnKeyType="next"
                  maxLength={40}
                />
              </Item>
              <Item style={[styles.loginMidLine]}>
                <FontAwesome name="user" size={25} color={"black"} style={styles.icons} />
                <Input
                  placeholder="Faculty"
                  type="text"
                  placeholderTextColor="black"
                  onChangeText={value => this.setState({ faculty: value })}
                  returnKeyType="next"
                  maxLength={40}
                />
              </Item>
              <Item style={[styles.loginMidLine]}>
                <Ionicons name="ios-mail" size={25} color={"black"} style={styles.icons} />
                <Input
                  placeholder="Phone Number"
                  type="number"
                  placeholderTextColor="black"
                  onChangeText={value => this.setState({ phoneNumber: value })}
                  returnKeyType="next"
                  maxLength={14}
                />
              </Item>

              <Item style={[styles.loginMidLine]}>
                <FontAwesome name="lock" size={25} color={"black"} style={styles.icons} />
                <Input
                  secureTextEntry={true}
                  returnKeyType="done"
                  onChangeText={value => this.setState({ password: value })}
                  placeholder="Password"
                  placeholderTextColor="black"
                  underline={true}
                />
              </Item>

              <ListItem style={styles.remBtn}>
                <CheckBox checked={this.state.checked} color={"#ffa500"} onPress={this.Clicked.bind(this)} />
                <Body>
                  <Text style={{ color: "black", fontSize: 15 }} onPress={this.Clicked.bind(this)}>
                    I Agree to Terms & Conditions
                  </Text>
                </Body>
              </ListItem>
              <Button
                rounded
                style={styles.loginBtn}
                onPress={() =>
                  this._simulateSignup(
                    this.state.name,
                    this.state.faculty,
                    this.state.phoneNumber,
                    this.state.password,

                  )
                }
              >
                {this.state.isLoading ? (
                  <ActivityIndicator style={styles.spinner} size="large" color={"white"} />
                ) : (
                    <FontAwesome name="sign-in" size={45} color={"white"} />
                  )}
              </Button>
            </Form>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")} style={[styles.login]}>
              <Text style={{ color: "black" }}>Already Have An Account? Sign In</Text>
            </TouchableOpacity>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  auth: user
});

const mapDispatchToProps = dispatch => ({
  // onLogin: data => dispatch(login(data)),
  onLogout: () => dispatch(logout()),
  onSignUp: data => dispatch(createAccount(data)),
  resetFailureAction: () => dispatch(resetFailureAction()),
  getUser: token => dispatch(GetUserData(token)),
  refreshAuthentication: token => dispatch(refreshAuthentication(token))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);
// AppRegistry.registerComponent("CARTA-SignUp", () => SignUp);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logo: {
    ...Platform.select({
      android: { paddingTop: 30 },
      ios: { paddingTop: 35 }
    }),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 0
  },
  logins: {
    width: 250,
    marginLeft: 20,
    borderColor: "white"
  },
  icons: {
    marginRight: 20
  },
  loginBtn: {
    left: 260,
    bottom: 200,
    padding: 15,
    backgroundColor: "#ffa500",
    borderRadius: 300,
    height: 80,
    width: 80
  },
  loginMidLine: {
    width: 250,
    marginLeft: 20
  },
  remBtn: {
    top: -7,
    width: 300,
    borderColor: "transparent"
  },
  whiteBorder: {
    borderColor: "transparent"
  },
  login: {
    bottom: 60,
    alignSelf: "center"
  },
  footerImage: {
    margin: 5,
    opacity: 0.61,
    alignItems: "center",
    justifyContent: "center"
  },
  spinner: {
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  showPassword: {
    // borderColor: "black",
    backgroundColor: "whitesmoke",
    // borderWidth: 3,
    borderRadius: 200,
    height: 25,
    width: 50
  }
});
