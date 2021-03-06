import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Dimensions, ActivityIndicator, ImageBackground, StyleSheet, Platform } from "react-native";
import { Container, Content, Form, Item, Input, Left, Button, Text, Body, ListItem, Label } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { login, resetFailureAction, refreshAuthentication, GetUserData, logout } from "../../redux/actions/UserActions";

class SignUp extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      username: "",
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
  _simulateLogin = (phoneNumber, password) => {
    this.setState({ isLoading: true });
    this.props.onLogin({ phoneNumber, password });
  };

  render() {
    const device_width = Dimensions.get("window").width;
    const device_height = Dimensions.get("window").height;

    return (
      <Container style={styles.container}>
        <ImageBackground source={require("../../../assets/back.jpg")} style={{ height: device_height + 78, width: device_width }}>
          <Content style={styles.content}>
            <Form>
              <Item style={[styles.loginMidLine]} floatingLabel >
                <Label>Mobile</Label>
                <Input
                  ref={ref => (this.textInputRef = ref)}
                  name={"phone"}
                  type="number"
                  returnKeyType="next"
                  onChangeText={value => this.setState({ phoneNumber: value })}
                  isEnabled={!this.state.isLoading}
                />
              </Item>
              <Item style={[styles.loginMidLine]} floatingLabel >

                <Label>Password</Label>
                <Input
                  ref={ref => (this.passwordInputRef = ref)}
                  name={"password"}
                  type="password"
                  secureTextEntry={true}
                  returnKeyType="done"
                  onChangeText={value => this.setState({ password: value })}
                  isEnabled={!this.state.isLoading}
                />
              </Item>
              <Button
                rounded
                style={[styles.loginBtn, styles.content]}
                onPress={() => this._simulateLogin(this.state.phoneNumber, this.state.password)}
              >
                {this.state.isLoading ? (
                  <ActivityIndicator style={styles.spinner} size="large" color={"#6771e4"} />
                ) : (

                    <FontAwesome name="sign-in" size={45} color={"#6771e4"} />
                  )}
              </Button>
            </Form>
            <View>
              <ListItem icon style={styles.lowerBody} onPress={() => this.props.navigation.navigate("Register")}>
                <Left>
                  <Button disabled style={{ backgroundColor: "#FF9501" }}>
                    <FontAwesome active name="unlock" />
                  </Button>
                </Left>
                <Body style={styles.whiteBorder}>
                  <Text>Sign Up</Text>
                </Body>
              </ListItem>
              <ListItem icon style={styles.lowerBody} onPress={() => this.props.navigation.navigate("AboutUs")}>
                <Left>
                  <Button disabled style={{ backgroundColor: "#7151e4" }}>
                    <FontAwesome active name="question" />
                  </Button>
                </Left>
                <Body style={styles.whiteBorder}>
                  <Text>About</Text>
                </Body>
              </ListItem>
            </View>
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
  onLogin: data => dispatch(login(data)),
  onLogout: () => dispatch(logout()),
  resetFailureAction: () => dispatch(resetFailureAction()),
  getUser: token => dispatch(GetUserData(token)),
  refreshAuthentication: token => dispatch(refreshAuthentication(token))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    marginTop: 70
  },
  logins: {
    width: 250,
    marginLeft: 20,
    borderColor: "white"
  },
  spinner: {
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  icons: {
    marginRight: 20,
    paddingRight: 100
  },
  loginBtn: {
    left: 275,
    bottom: 140,
    padding: 15,
    backgroundColor: "#1e2326",
    borderRadius: 300,
    height: 70,
    width: 70
  },
  loginMidLine: {
    width: 250,
    marginLeft: 20
  },
  whiteBorder: {
    borderColor: "transparent"
  }
});