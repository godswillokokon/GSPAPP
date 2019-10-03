import React, { Component } from "react";
import FooterComponet from "../footer";
import Head from "../header";
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, FlatList } from "react-native";
import { Container, Content, Thumbnail } from "native-base";
import { FontAwesome } from "@expo/vector-icons";
import { getLibrary, login } from "../../redux/actions/UserActions";
import { connect } from "react-redux";
import Session from "../../utils/Session";

// const cards = [
//   { key: 'Introduction to the use of Library', icon: 'book', color: '#cfd744', nav: 'Topics2' },
//   { key: 'Modern Technologies in Library', icon: 'gears', color: '#52cefc', nav: 'Topics' },
// ];

const cards = [];
const numColumns = 2;

class Library extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      uri: "https://res.cloudinary.com/ogcodes/image/upload/v1569943569/GSPAPP/splash.png"
    };
  }

  renderItem = ({ item, index }) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />
    }
    console.log(item, "itemmmm")
    return (
      <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate(Topic)}>
        <Thumbnail large source={{ uri: this.state.uri }} />
        <Text style={styles.itemText}> {item.topic}</Text>
      </TouchableOpacity>
    );
  };


  render() {
    const device_width = Dimensions.get("window").width;
    const device_height = Dimensions.get("window").height;

    const { user } = this.props;
    // console.log("propsssy", user.library.topics)
    const topics = user.library.topics;
    const TopicList = topics.map((item) => {
      item
      cards.push(item)
      console.log(item, "inside")
    })
    console.log(cards, "outside")
    // const cards = [
    //   TopicList
    // ];

    // let cards = [];
    // cards = this.renderItem;
    const formatData = (data, numColumns) => {
      const numberOfFullRows = Math.floor(data.length / numColumns);
      let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
      while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
        cards.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
        numberOfElementsLastRow = numberOfElementsLastRow + 1;
      };
      return data;
    };

    // cards = user.library.topics;
    // console.log("bob", cards);




    // renderItem = ({ item, index }) => {
    //   // topics.map((item) => {
    //   if (item.empty === true) {
    //     return <View style={[styles.item, styles.itemInvisible]} />
    //   }
    //   return (
    //     <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate(Topic)}>
    //       <Thumbnail large source={{ uri: this.state.uri }} />
    //       <Text style={styles.itemText}> {item.key}</Text>
    //     </TouchableOpacity>
    //   )
    //   // });

    // }
    // const getCourses = Session.getData("courses");
    // console.log("coureses", getCourses)
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
// const mapStateToProps = ({ library }) => ({
//   library: library
// });
const mapStateToProps = state => {
  const { user } = state;
  return { user: user };
};

const mapDispatchToProps = dispatch => ({
  onLogin: data => dispatch(login(data)),
  getLibrary: token => dispatch(getLibrary(token)),
  getUser: token => dispatch(GetUserData(token)),
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
    fontSize: 15,
    margin: 4,
  },
});
