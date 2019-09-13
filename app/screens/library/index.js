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
  { key: 'Biology', type: 'File Type: Video', icon: 'bug', color: '#cfd744' },
  { key: 'Agric Science', type: 'File Type: PDF', icon: 'pagelines', color: '#52cefc' },
  { key: 'Chemistry', type: 'File Type: Audio', icon: 'flask', color: '#cfd744' },
  { key: 'History', type: 'File Type: PDF', icon: 'globe', color: '#52cefc' },
  { key: 'English', type: 'File Type: Video', icon: 'sort-alpha-asc', color: '#cfd744' },
  { key: 'Maths', type: 'File Type: Video', icon: 'subscript', color: '#52cefc' },
  { key: 'Futher Maths', type: 'File Type: PDF', icon: 'superscript', color: '#cfd744' },
  { key: 'Physical Education', type: 'File Type: PDF', icon: 'futbol-o', color: '#cfd744' },
  { key: 'Government', type: 'File Type: PDF', icon: 'balance-scale', color: '#52cefc' },
  { key: 'Economics', type: 'File Type: PDF', icon: 'line-chart', color: '#52cefc' },
  { key: 'Statictics', type: 'File Type: PDF', icon: 'pie-chart', color: '#cfd744' },
  { key: 'Physics', type: 'File Type: PDF', icon: 'grav', color: '#52cefc' },
  { key: 'Computer Science', type: 'File Type: PDF', icon: 'desktop', color: '#cfd744' },
  { key: 'Geography', type: 'File Type: PDF', icon: 'map-o', color: '#52cefc', },
  { key: 'Technical Drawing', type: 'File Type: PDF', icon: 'connectdevelop', color: '#cfd744' }
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


export default class Library extends Component {
  static navigationOptions = {
    header: null
  };
  renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />
    }
    return (
      <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate("Topics")}>
        <FontAwesome name={item.icon} size={50} color={item.color} />
        <Text style={styles.itemText}> {item.key}</Text>
        <Text style={styles.itemText}> {item.type}</Text>

      </TouchableOpacity>
    );
  };
  render() {
    const device_width = Dimensions.get("window").width;
    const device_height = Dimensions.get("window").height;

    return (
      <Container style={{ height: device_height, width: device_width, backgroundColor: "#1c1d27" }}>
        <Head />
        <Content>
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
    color: "#fff"
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
  head: {
    ...Platform.select({
      android: { paddingTop: 60 },
      ios: { paddingTop: 25 }
    }),
    backgroundColor: "#652d90",
    paddingBottom: 40
  },
  body: {
    // marginTop: 20,
    // marginLeft: 41
    flex: 1
  },
  title: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold"
  },
  car: {
    flex: 2,
    width: "50%"
    // borderRadius: 40
  },
  details: {
    flex: 3,
    margin: 10
    // marginTop: 10,
    // marginBottom: 20,
  },
  carName: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: 25,
    marginTop: -10,
    color: "#383838"
  },
  carModel: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 15,
    color: "#383838",
    marginTop: 25
  },
  footer: {
    backgroundColor: "#652d90"
  },
  footerActive: {
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
  whiteText: {
    color: "white"
  },
  viewCar: {
    margin: 0,
    paddingTop: 30,
    left: 150
    // top: -30,
  }
});
