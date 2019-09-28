import React, { Component } from "react";
import FooterComponet from "../footer";
import Head from "../header";
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, FlatList } from "react-native";
import { Container, Content } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { login, GetLibrary } from "../../redux/actions/UserActions";
import { connect } from "react-redux";

const cards = [
  { key: 'Introduction to the use of Library', icon: 'book', color: '#cfd744', nav: 'Topics2' },
  { key: 'Modern Technologies in Library', icon: 'gears', color: '#52cefc', nav: 'Topics' },
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
const numColumns = 2;

class Library extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      data: "",
    };
  }
  renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />
    }
    return (
      <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate(item.nav)}>
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
            <Text style={styles.title}>Topics</Text>
            <Text style={styles.subtitle}>Select a topic to continue</Text>
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
const mapStateToProps = ({ user }) => ({
  auth: user,
});

const mapDispatchToProps = dispatch => ({
  onLogin: data => dispatch(login(data)),
  getData: data => dispatch(GetLibrary(data)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Library);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
    margin: 5,
  },
  subtitle: {
    fontSize: 14,
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
    margin: 3,
    height: Dimensions.get('window').width / numColumns,
    elevation: 3,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    shadowColor: "#000",
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: "#fff",
    fontSize: 10,
  },
});
