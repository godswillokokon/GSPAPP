import React, { Component } from "react";
import { connect } from "react-redux";
import { View, Image, Dimensions, ActivityIndicator, ImageBackground } from "react-native";
import { AppLoading } from "expo";
import { Container, Content, Form, Item, Input, Left, Button, Text, CheckBox, Body, ListItem, Label } from "native-base";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { login, resetFailureAction, refreshAuthentication, GetUserData, logout } from "../../redux/actions/UserActions";
import styles from "./sigupStyle";

class SignUp extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      checked: true,
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
  _simulateLogin = (phoneNumber, password) => {
    this.setState({ isLoading: true });
    this.props.onLogin({ phoneNumber, password });
  };

  render() {
    const { phoneNumber, password } = this.state;
    const device_width = Dimensions.get("window").width;
    const device_height = Dimensions.get("window").height;
    // console.log("your phoneNumber height is ",device_height);
    // console.log("your phoneNumber width is ",device_width);



    return (
      <Container style={styles.container}>
        <ImageBackground source={require("../../../assets/back.jpg")} style={{ height: device_height + 78, width: device_width }}>
          <Text style={styles.logo}>

          </Text>
          <Content style={{ top: 30 }}>
            <Form>
              <Item style={[styles.loginMidLine]} floatingLabel >
                <Label>Mobile</Label>
                <Input
                  ref={ref => (this.textInputRef = ref)}
                  // placeholder="Mobile"
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
                  // placeholder="Password"
                  onChangeText={value => this.setState({ password: value })}
                  isEnabled={!this.state.isLoading}
                />
              </Item>
              <ListItem style={styles.remBtn}>
                <CheckBox checked={this.state.checked} color={"#1e2326"} onPress={this.Clicked.bind(this)} />
                <Body>
                  <Text style={{ color: "black" }} onPress={this.Clicked.bind(this)}>
                    Remember
                  </Text>
                </Body>
              </ListItem>
              <Button
                rounded
                style={styles.loginBtn}
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
              <ListItem icon style={styles.lowerBody} onPress={() => this.props.navigation.navigate("Feedback")}>
                <Left>
                  <Button disabled style={{ backgroundColor: "#007AFF" }}>
                    <FontAwesome active name="comments" />
                  </Button>
                </Left>
                <Body style={styles.whiteBorder}>
                  <Text>Feedback</Text>
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
  // onSignUp: data => dispatch(createAccount(data)),
  resetFailureAction: () => dispatch(resetFailureAction()),
  getUser: token => dispatch(GetUserData(token)),
  refreshAuthentication: token => dispatch(refreshAuthentication(token))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
// AppRegistry.registerComponent("CARTA-SignUp", () => SignUp);
