import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Swiper from 'react-native-swiper';
import { FontAwesome } from '@expo/vector-icons';

export default class Swipe extends Component {
  constructor() {
    super();
    this.state = {
      but: false
    }
  }
  render() {
    return <Swiper style={styles.wrapper}
      showsButtons={false}
      autoplay autoplayTimeout={10.0}
      loop={false}
      activeDotColor={'#6771e4'}
      onIndexChanged={index => {
        if (index == 1) {
          this.props.onChange(true);
        }
      }}>
      <View style={styles.slide}>
        <View style={styles.circle}>
          <Text style={styles.text}>
            <FontAwesome name="graduation-cap" size={40} color={"#6771e4"} />
          </Text>
        </View>
        <Text style={styles.text}> Welcome!</Text>
        <Text style={styles.textP}>
          This Mobile App called General Studies Programme Application (GSPAPP) is designed for use in the learning of Use of
                  Library and Study Skills for  students in the first year of General Studies  Programme.
          </Text>
      </View>
      <View style={styles.slide}>
        <View style={styles.circle}>
          <Text style={styles.text}>
            <FontAwesome name="slideshare" size={40} color={"#6771e4"} />
          </Text>
        </View>
        <Text style={styles.text}> GSPAPP </Text>
        <Text style={styles.textP}>
          This is expected to encourage students carry out self- study while improving the quality of
                teaching and learning activities in the 21st century learning.
          </Text>
      </View>
    </Swiper>;
  }
}
AppRegistry.registerComponent('swiper', () => Swiper);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#1e2326',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 5
  },
  circle: {
    borderRadius: 500,
    backgroundColor: '#1e2326',
    height: 130,
    width: 130,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 50,
    alignItems: 'center'
  },
  textP: {
    color: '#1e2326',
    fontSize: 17,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    margin: 50,
    width: 300,
    marginLeft: 75,
  }
});