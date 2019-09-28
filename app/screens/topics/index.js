import React, { Component } from "react";
import FooterComponet from "../footer";
import Head from "../header";
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, FlatList } from "react-native";
import { Container, Content } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const cards = [
  {
    key: 'Definition of terms', icon: 'ios-archive', color: '#cfd744', body:
      'Data: Data (singular datum) mean facts used in describing or discussing an item or a set of items. Information: Information is processed data that changes the state of a system that perceives it, whether a computer or a brain, hence a stream of data that does not change the state of its receiver is not information. Communication: is the activity of conveying information between two or more communicating entities. Technology: is defined as study of the technical means undertaken in all culture (a universal) which involves the systematic application of organized knowledge (synthesis) and tangibles (tools) for the extension of human facilities that are restricted as a result of the evolutionary process. Computer: is an electronic device that accepts input from a user, processes the input, stores the result if desired and /or produces output. Computer consists of a collection of hardware and software. Hardware is the physical parts of a computer that can be seen and touched. Software is the intangible part of the computer that cannot be seen but like the wind can be felt.',
    quiz: {
      question: '"________ are libraries without walls that depend on virtual reality technology for the creation of highly realistic simulations and surrogating in which users can become totally immersed Which of the following physical conditions can be translated?',
      correct: 'a',
      ans: {
        a: {
          key: 'a', name: 'Virtual libraries'
        },
        b: {
          key: 'b', name: 'Modern libraries'
        },
        c: {
          key: 'c', name: 'Conventional libraries'
        },
        d: {
          key: 'd', name: 'Closed libraries'
        },
        e: {
          key: 'e', name: 'None of the mentioned'
        },
      },

    },
    quiz2: {
      question: 'The functions of library include the following except',
      correct: 'e',
      ans: {
        a: {
          key: 'a', name: 'Information retrie'
        },
        b: {
          key: 'b', name: 'Storage'
        },
        c: {
          key: 'c', name: 'Documentation'
        },
        d: {
          key: 'd', name: 'Design'
        },
        e: {
          key: 'e', name: 'System'
        }
      }
    }
  },
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
      <TouchableOpacity style={styles.item} onPress={() => this.props.navigation.navigate("Single", { body: item.body, title: item.key, quiz1: item.quiz, quiz2: item.quiz2 })}>
        <Ionicons name={item.icon} size={50} color={item.color} />
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
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 3,
  },
  itemInvisible: {
    backgroundColor: 'transparent',
  },
  itemText: {
    color: "#fff",
    fontSize: 10,
  },
});
