import React, { Component } from 'react'
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Content,
  Input,
  Footer,
  Form,
  Item,
  Card,
  CardItem
} from "native-base";
import { Text, Image, AppRegistry, StyleSheet, Platform, TouchableOpacity, View } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import FooterComponet from "../footer";
import Head from "../header";

export default class AboutUs extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <Container style={styles.container}>
        <Head navigation={this.props.navigation} />
        <Content>
          <Text style={styles.photo}>
            <Image source={{ uri: 'https://res.cloudinary.com/ogcodes/image/upload/v1565462608/tdghephwnr5z5jl0d2ul.jpg' }} style={{ width: 452, height: 250 }} />
          </Text>
          <Card>
            <Text>
                  This Mobile App called General Studies Programme Application (GSPAPP) is designed for use in the learning of Use of 
                  Library and Study Skills for  students in the first year of General Studies  Programme. The app is designed and developed as 
                  an effort to make the teaching and learning of General Studies more interesting and enjoyable for teachers and students.
                  This course is to help the students to develop appropriate skills and competences which they need to function effectively
                  in their various disciplines. It is expected to encourage students carry out self- study while improving the quality of
                teaching and learning activities in the 21st century learning.
              
              </Text>
          </Card>
        </Content>
        <FooterComponet name="profile" props={this.props} />
      </Container >
    );
  }
}
const styles = StyleSheet.create({
  photo: {
    alignSelf: 'center',
    margin: 10,
  },
  container: {
    backgroundColor: '#1c1d27',
  },
});