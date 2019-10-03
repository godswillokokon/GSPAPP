import React, { Component } from "react";
import { View, StyleSheet, Dimensions, Text, TouchableOpacity, AsyncStorage } from "react-native";
import { connect } from "react-redux";
import { Container, Content, Thumbnail, Form, Item, Label, Input } from "native-base";
import { GetUserData } from "../../redux/actions/UserActions";
import { FontAwesome } from "@expo/vector-icons";
import FooterComponet from "../footer";
import Head from "../header";
import { ProgressChart } from 'react-native-chart-kit';
// import AsyncStorage from '@react-native-community/async-storage';

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
  render() {
    const device_width = Dimensions.get("window").width;
    const { user, library } = this.props;
    // console.log("display libraryyyyy", this.props.user.user.userDetails.name)
    console.log("propsssy", user.library.title)
    let ass = 0.4;
    const data = {
      labels: ['Score', 'Quiz', 'IQ'],
      data: [ass, ass, ass]
    }
    const chartConfig = {
      backgroundGradientTo: '#1e2326',
      color: (opacity = 2) => `rgba(103, 113, 228, ${opacity})`,
      strokeWidth: 3,
    }

    return (
      <Container style={styles.container}>
        <Head navigation={this.props.navigation} />
        <Content>
          <View style={styles.image}>
            <Thumbnail
              large
              source={{ uri: "https://res.cloudinary.com/ogcodes/image/upload/v1567648495/s6qha1jd092ayj28k2bv.png" }}
            />
          </View>
          <View>
            <Form style={{ margin: 15 }}>
              <Item>
                <Label>Name:</Label>
                <Input disabled value={user.user.name} style={styles.info} />
              </Item>
              <Item>
                <Label>Faculty:</Label>
                <Input disabled value={user.user.faculty} style={styles.info} />
              </Item>
              <Item>
                <Label>Mobile:</Label>
                <Input disabled value={user.user.phoneNumber} style={styles.info} />
              </Item>
              <Item>
                <Label>Age:</Label>
                <Input disabled value={user.user.age} style={styles.info} />
              </Item>
              <Item>
                <Label>Sex:</Label>
                <Input disabled value={user.user.sex} style={styles.info} />
              </Item>
            </Form>
            <TouchableOpacity
              style={styles.edit}
            >
              <Text style={styles.editText} onPress={() => this.props.navigation.navigate("Assessment")}>Reload Assessment  <FontAwesome name="history" color={"#1e2326"} size={20} /></Text>
            </TouchableOpacity>
            <ProgressChart
              data={data}
              width={device_width}
              height={220}
              chartConfig={chartConfig}
            />
          </View>
        </Content>
        <FooterComponet name="profile" props={this.props} />
      </Container>
    );
  }
}
const mapStateToProps = state => {
  const { user, library } = state;
  return { user: user, library: library };
};

const mapDispatchToProps = dispatch => ({
  getUser: token => dispatch(GetUserData(token)),
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
    width: 300,
    alignItems: "center",
    borderRadius: 39
  },
  info: {
    color: 'whitesmoke'
  }
});
