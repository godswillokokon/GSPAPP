import React, { Component } from 'react'
import {
  Container,
  Content,
  Footer,
  Card,
} from "native-base";
import { Text, Image, StyleSheet } from "react-native";

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
            <Image source={require("../../../assets/about.jpg")} style={{ width: 452, height: 250 }} />
          </Text>
          <Card>
            <Text>
                  This Mobile App called General Studies Programme Application (GSPAPP) is designed for use in the learning of Use of 
              Library and Study Skills for  students in the first year of General Studies  Programme. 
              </Text>
              <Text>
               The app is designed and developed as 
                  an effort to make the teaching and learning of General Studies more interesting and enjoyable for teachers and students.
              </Text>
              <Text>
                 
                  This course is to help the students to develop appropriate skills and competences which they need to function effectively
                  in their various disciplines. It is expected to encourage students carry out self- study while improving the quality of
                teaching and learning activities in the 21st century learning.
              
              </Text>
          </Card>
          
        </Content>
        <Footer style={{ backgroundColor: '#6771e4' }}>
          <Text style={{ marginTop: 20 }}>designed by Stella Ogechi Udom. </Text>
          <Text style={{ marginTop: 20, color: '#fff' }}>15/PG/ED/ET/PhD/006</Text></Footer>
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