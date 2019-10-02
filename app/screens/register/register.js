import React, { Component } from "react";
import { StyleSheet, Platform, Dimensions, ActivityIndicator, TouchableOpacity, ImageBackground } from "react-native";
import { Container, Content, Form, Item, Input, Button, Text } from "native-base";
import { connect } from "react-redux";
import { createAccount, refreshAuthentication, GetUserData } from "../../redux/actions/UserActions";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

class Register extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      faculty: "",
      phoneNumber: "",
      password: "",
      sex: "",
      age: "",
      isLoggedIn: false,
      isLoading: false,
      isAppReady: false,
      authError: null,
      authReady: false,
      tokenValidity: null
    };
  }
  _simulateSignup = (name, faculty, phoneNumber, age, sex, password) => {
    this.setState({ isLoading: true });
    this.props.onSignUp({ name, faculty, phoneNumber, age, sex, password });

  };

  render() {
    const device_width = Dimensions.get("window").width;
    const device_height = Dimensions.get("window").height;

    return (
      <Container style={styles.container} >
        <ImageBackground source={require("../../../assets/back.jpg")} style={{ height: device_height + 78, width: device_width }}>
          <Text style={styles.logo}></Text>
          <Content>
            <Form>
              <Item style={[styles.loginMidLine]}>
                <FontAwesome name="user" size={25} color={"black"} style={styles.icons} />
                <Input
                  ref={ref => (this.textInputRef = ref)}
                  placeholder="Full Name"
                  type="text"
                  placeholderTextColor="black"
                  onChangeText={value => this.setState({ name: value })}
                  returnKeyType="next"
                  maxLength={40}
                />
              </Item>
              <Item style={[styles.loginMidLine]}>
                <Ionicons name="md-medal" size={25} color={"black"} style={styles.icons} />
                <Input
                  ref={ref => (this.textInputRef = ref)}
                  placeholder="Faculty"
                  type="text"
                  placeholderTextColor="black"
                  onChangeText={value => this.setState({ faculty: value })}
                  returnKeyType="next"
                  maxLength={40}
                />
              </Item>
              <Item style={[styles.loginMidLine]}>
                <Ionicons name="ios-contact" size={25} color={"black"} style={styles.icons} />
                <Input
                  ref={ref => (this.textInputRef = ref)}
                  placeholder="Phone Number"
                  type="number"
                  placeholderTextColor="black"
                  onChangeText={value => this.setState({ phoneNumber: value })}
                  returnKeyType="next"
                  maxLength={14}
                />
              </Item>
              <Item style={[styles.loginMidLine]}>
                <Ionicons name="md-ribbon" size={25} color={"black"} style={styles.icons} />
                <Input
                  ref={ref => (this.textInputRef = ref)}
                  placeholder="Age"
                  type="number"
                  placeholderTextColor="black"
                  onChangeText={value => this.setState({ age: value })}
                  returnKeyType="next"
                  maxLength={14}
                />
              </Item>
              <Item style={[styles.loginMidLine]}>
                <Ionicons name="ios-contacts" size={25} color={"black"} style={styles.icons} />
                <Input
                  ref={ref => (this.textInputRef = ref)}
                  placeholder="Sex"
                  type="text"
                  placeholderTextColor="black"
                  onChangeText={value => this.setState({ sex: value })}
                  returnKeyType="next"
                  maxLength={14}
                />
              </Item>
              <Item style={[styles.loginMidLine]}>
                <FontAwesome name="lock" size={25} color={"black"} style={styles.icons} />
                <Input
                  ref={ref => (this.passwordInputRef = ref)}
                  secureTextEntry={true}
                  returnKeyType="done"
                  onChangeText={value => this.setState({ password: value })}
                  placeholder="Password must be more than 7 charaters"
                  placeholderTextColor="black"
                  underline={true}
                />
              </Item>
              <Button
                rounded
                style={styles.loginBtn}
                onPress={() => this._simulateSignup(this.state.name, this.state.faculty, this.state.phoneNumber, this.state.age, this.state.sex, this.state.password)}
              >
                {this.state.isLoading ? (
                  <ActivityIndicator style={styles.spinner} size="large" color={"#6771e4"} />
                ) : (
                    <FontAwesome name="sign-in" size={45} color={"#6771e4"} />
                  )}
              </Button>
            </Form>
            <TouchableOpacity onPress={() => this.props.navigation.navigate("Login")} style={[styles.signin]}>
              <Text style={{ color: "white" }}>Already Have An Account? Sign In</Text>
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
  onSignUp: data => dispatch(createAccount(data)),
  getUser: token => dispatch(GetUserData(token)),
  refreshAuthentication: token => dispatch(refreshAuthentication(token))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Register);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logo: {
    ...Platform.select({
      android: { paddingTop: 1 }
    }),
    marginBottom: 0,
    height: 80
  },
  icons: {
    marginRight: 20
  },
  loginBtn: {
    left: 260,
    bottom: 200,
    padding: 15,
    backgroundColor: "#1e2326",
    borderRadius: 300,
    height: 80,
    width: 80
  },
  loginMidLine: {
    width: 250,
    marginLeft: 20
  },
  signin: {
    bottom: 60,
    flex: 1,
    alignSelf: "center",
    backgroundColor: "#1e2326",
    padding: 20,
    margin: 10,
    width: 300,
    alignItems: "center",
    borderRadius: 39
  },
  spinner: {
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
});
