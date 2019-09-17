import React, { Component } from "react";
import FooterComponet from "../footer";
import Head from "../header";
// import styled from "styled-components";
import {
  Text,
  View,
  AppRegistry,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Dimensions,
  Image,
  ImageBackground,
  FlatList
} from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  CardItem,
  Card,
  Right,
  Button,
  Icon,
  Title,
  Content,
  Input,
  Textarea,
  Form,
  Item
} from "native-base";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

const cards = [
  { key: 'Biology', icon: 'bug', color: '#cfd744' },
  { key: 'Agric Science', icon: 'pagelines', color: '#52cefc' },
  { key: 'Chemistry', icon: 'flask', color: '#cfd744' },
  { key: 'History', icon: 'globe', color: '#52cefc' },
  { key: 'English Language', icon: 'sort-alpha-asc', color: '#cfd744' },
  { key: 'Mathematics', icon: 'subscript', color: '#52cefc' },
  { key: 'Futher Maths', icon: 'superscript', color: '#cfd744' },
  { key: 'Physical Education', icon: 'futbol-o', color: '#cfd744' },
  { key: 'Government', icon: 'balance-scale', color: '#52cefc' },
  { key: 'Economics', icon: 'line-chart', color: '#52cefc' },
  { key: 'Statictics', icon: 'pie-chart', color: '#cfd744' },
  { key: 'Physics', icon: 'grav', color: '#52cefc' },
  { key: 'Computer Science', icon: 'desktop', color: '#cfd744' },
  { key: 'Geography', icon: 'map-o', color: '#52cefc' },
  { key: 'Technical Drawing', icon: 'connectdevelop', color: '#cfd744' }
];
const formatData = (data, numColumns) => {
  const numberOfFullRows = Math.floor(data.length / numColumns);
  let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
  while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
    cards.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
    numberOfElementsLastRow = numberOfElementsLastRow + 1;
  };
  return data;
};
const numColumns = 3;


export default class Topics extends Component {
  static navigationOptions = {
    header: null
  };
  renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />
    }
    return (
      <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate("Single")}>
        <FontAwesome name={item.icon} size={50} color={item.color} />
        <Text style={styles.itemText}> {item.key}</Text>


      </TouchableOpacity>
    );
  };
  render() {
    const device_width = Dimensions.get("window").width;
    const device_height = Dimensions.get("window").height;

    return (
      <Container style={{ height: device_height, width: device_width, backgroundColor: "#1c1d27" }}>
        <Head navigation={this.props.navigation} />
        <Content>
          <View style={styles.text}>
            <Text style={styles.title}>Sub-Topics</Text>
            <Text style={styles.subtitle}>Select a sub-topic to continue</Text>
          </View>
          <FlatList
            data={formatData(cards, numColumns)}
            renderItem={this.renderItem}
            style={styles.container}
            numColumns={numColumns}
          />
        </Content>
        <FooterComponet name="library" props={this.props} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
    margin: 3
  },
  subtitle: {
    fontSize: 15,
    color: "white"
  },
  text: {
    margin: 20
  },
  title: {
    fontWeight: "800",
    fontSize: 50,
    color: "white"
  },
  item: {
    backgroundColor: '#565876',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 2,
    height: Dimensions.get('window').width / numColumns,
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: "#fff",
    fontSize: 10,
  },
  card: {
    // width: "98%",
    // height: "18%",
    flex: 1,
    backgroundColor: "#E5E5E5",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 3,
    margin: 5,
    flexDirection: "row"
  },

  whiteText: {
    color: "white"
  },

});
