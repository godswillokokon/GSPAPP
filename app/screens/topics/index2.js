import React, { Component } from "react";
import FooterComponet from "../footer";
import Head from "../header";
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, FlatList } from "react-native";
import { Container, Content } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const cards = [
  {
    key: 'Definition', icon: 'ios-bonfire', color: '#52cefc', body:
      '1. The word library is derived from the Latin word “liber” which means book.    2. The library is a storehouse of knowledge.    3. That view derives from the fact that libraries were originally places were books as media of documentation of knowledge were kept and visited in order to use the stored knowledge.',
    quiz: {
      question: 'Imagine you have an assignment to write a paper based on scholarly information. Which of the following places is most appropriate place to source for information ?',
      correct: 'd',
      ans: {
        a: {
          key: 'a', name: 'Village'
        },
        b: {
          key: 'b', name: 'Police Station'
        },
        c: {
          key: 'c', name: 'Building'
        },
        d: {
          key: 'd', name: 'Library'
        },
        e: {
          key: 'e', name: 'None'
        },
      },

    },
    quiz2: {
      question: 'Which of the following would you not include among the types of library ?',
      correct: 'e',
      ans: {
        a: {
          key: 'a', name: 'National library'
        },
        b: {
          key: 'b', name: 'Public library'
        },
        c: {
          key: 'c', name: 'Special library'
        },
        d: {
          key: 'd', name: 'Academic libraries'
        },
        e: {
          key: 'e', name: 'Automatic library'
        }
      }
    }
  },
  {
    key: 'Types of library', icon: 'ios-apps', color: '#cfd744', body:
      'National Library 1.    This is the apex library of any nation.     2. It is usually established and funded by the executive arm of government at the national level with branches spread across the nation.         Functions      1. Serves as the depository for copyrighted publication in a country.     2. Prepares the national bibliography     3. Encourages reading habits/study skill and research.',
    quiz: {
      question: 'There are two organizational systems practiced in the University library. What are they ?',
      correct: 'a',
      ans: {
        a: {
          key: 'a', name: 'Centralized and decentralized'
        },
        b: {
          key: 'b', name: 'Localized and foreign'
        },
        c: {
          key: 'c', name: 'Higher and lower'
        },
        d: {
          key: 'd', name: 'Specific and general'
        },
        e: {
          key: 'e', name: 'Public and private'
        },
      },

    },
    quiz2: {
      question: 'Which approaches in organizing university library encourages decentralization and activities such as acquisition; cataloguing, circulation and references are carried out together in various subject areas and this requires subject specialist library ?',
      correct: 'a',
      ans: {
        a: {
          key: 'a', name: 'Subject approach'
        },
        b: {
          key: 'b', name: 'Function approach'
        },
        c: {
          key: 'c', name: 'Hybrid approach'
        },
        d: {
          key: 'd', name: 'System approach'
        },
        e: {
          key: 'e', name: 'None of the mentioned'
        }
      }
    }
  },
  {
    key: 'Public library', icon: 'ios-flower', color: '#52cefc', body:
      '1. This is a government owned and funded at state level with its presence in state capital and branches in local government headquarters.     Functions    1.Encouragement of reading habits;    2. Promotion of enlighten and leisure;    3. Preservation and promotion of cultural heritage; and     4. Promotion and use of public libraries as education agencies for the individual.',
    quiz: {
      question: 'In the administration and management of the university library, which of the following is not a function of the administration ?',
      correct: 'e',
      ans: {
        a: {
          key: 'a', name: 'Budget planning and implementation'
        },
        b: {
          key: 'b', name: 'ICT administration'
        },
        c: {
          key: 'c', name: 'Maintainance of building'
        },
        d: {
          key: 'd', name: 'Maintainance of ground/equipment'
        },
        e: {
          key: 'e', name: 'Ordering and acquisition of materials'
        },
      },

    },
    quiz2: {
      question: 'What division is responsible for ordering and acquisition of materials such as books, journals and all non-book materials? i. Collection Development Division  ii. Technical services division ?',
      correct: 'a',
      ans: {
        a: {
          key: 'a', name: 'i'
        },
        b: {
          key: 'b', name: 'ii'
        },
        c: {
          key: 'c', name: 'i & ii'
        },
        d: {
          key: 'd', name: 'ii only'
        },
        e: {
          key: 'e', name: 'All of the mentioned'
        }
      }
    }
  },
  {
    key: 'Special library', icon: 'ios-pulse', color: '#cfd744', body:
      '1. They are libraries meant specially for research on a particular field of study and often for a limited group of users.     2. Everything about the library is special – collections, subjects, users and parent body.      3. The collection is made up of mainly of periodicals, books report, executive summaries and abstract. Functions 1. Encouragement of reading habits; 2. Promotion of enlighten and leisure; 3. Preservation and promotion of cultural heritage; and 4. Promotion and use of public libraries as education agencies for the individual.',
    quiz: {
      question: 'Technical services division include all the following except ?',
      correct: 'e',
      ans: {
        a: {
          key: 'a', name: 'Cataloguing section'
        },
        b: {
          key: 'b', name: 'Bindery section'
        },
        c: {
          key: 'c', name: 'Audio visual section'
        },
        d: {
          key: 'd', name: 'Reprographic section'
        },
        e: {
          key: 'e', name: 'All of the mentioned'
        },
      },

    },
    quiz2: {
      question: 'The term library is made of the word ?',
      correct: 'a',
      ans: {
        a: {
          key: 'a', name: 'Liber'
        },
        b: {
          key: 'b', name: 'Libra'
        },
        c: {
          key: 'c', name: 'Liberes'
        },
        d: {
          key: 'd', name: 'Libre'
        },
        e: {
          key: 'e', name: 'Lebra'
        }
      }
    }
  },
  {
    key: 'Private library', icon: 'ios-finger-print', color: '#cfd744', body:
      '1. These are collections of individuals. 2. The purpose of the personal collection is to foster personal development, research and consultancy services. 2. Examples are Nwafor Orizu Library Nwewi, Njoku Memorial Library donated to the University of Nigeria Nsukka and many more.',
    quiz: {
      question: 'Computer consists of a collection of hardware and software.  What is the physical parts of a computer that can be seen and touched ?',
      correct: 'b',
      ans: {
        a: {
          key: 'a', name: 'Software'
        },
        b: {
          key: 'b', name: 'Hardware'
        },
        c: {
          key: 'c', name: 'Hardware and Software'
        },
        d: {
          key: 'd', name: 'Microsoft Software'
        },
        e: {
          key: 'e', name: 'Operating systems'
        },
      },

    },
    quiz2: {
      question: '"What section involves describing each of these materials bibliographical and assigning subjects and class mark and their number on them ?',
      correct: 'a',
      ans: {
        a: {
          key: 'a', name: 'Cataloguing'
        },
        b: {
          key: 'b', name: 'Bindery'
        },
        c: {
          key: 'c', name: 'Audio Visual'
        },
        d: {
          key: 'd', name: 'Reprographic'
        },
        e: {
          key: 'e', name: 'Acquisition'
        }
      }
    }
  },
  {
    key: 'Children Library', icon: 'ios-ice-cream', color: '#52cefc', body:
      'The organization of a University Library 1. There are two organizational systems practiced in the University library, these are:  2. Centralized; and 3. decentralized systems Centralized: 1. collections, services and activities of the library are carried out in a central library. 2. This facilitate decision making and ensure easy administration of the university library. Decentralized: 1. this is racticed in a multi-campus university with one main library and other branches or autonomous one serving the campuses.',
    quiz: {
      question: 'What computers solve problems by operating on continuous variables such as lengths, voltages or current ?',
      correct: 'b',
      ans: {
        a: {
          key: 'a', name: 'Digital'
        },
        b: {
          key: 'b', name: 'Analogue'
        },
        c: {
          key: 'c', name: 'Automatic'
        },
        d: {
          key: 'd', name: 'Analog and digital'
        },
        e: {
          key: 'e', name: 'None of the mentioned'
        },
      },

    },
    quiz2: {
      question: 'Computer networks are simply defined as a number of groups or systems whose numbers are connected in some way. What do you call the devices that tie these numbers of LANs together are called ?',
      correct: 'b',
      ans: {
        a: {
          key: 'a', name: 'Router'
        },
        b: {
          key: 'b', name: 'Switch'
        },
        c: {
          key: 'c', name: 'key'
        },
        d: {
          key: 'd', name: 'spot'
        },
        e: {
          key: 'e', name: 'points'
        }
      }
    }
  },
  {
    key: 'Organization of a Library', icon: 'ios-stats', color: '#52cefc', body:
      'There are two organizational systems practiced in the University library, these are: 1. Centralized; and 2. decentralized systems Centralized: 1. collections, services and activities of the library are carried out in a central library. 2. This facilitate decision making and ensure easy administration of the university library. Decentralized: 1. this is practiced in a multi-campus university with one main library and other branches or autonomous one serving the campuses.',
    quiz: {
      question: 'What computers solve problems by operating on continuous variables such as lengths, voltages or current?',
      correct: 'b',
      ans: {
        a: {
          key: 'a', name: 'Digital'
        },
        b: {
          key: 'b', name: 'Analogue'
        },
        c: {
          key: 'c', name: 'Automatic'
        },
        d: {
          key: 'd', name: 'Analog and digital'
        },
        e: {
          key: 'e', name: 'None of the mentioned'
        },
      },

    },
    quiz2: {
      question: 'Computer networks are simply defined as a number of groups or systems whose numbers are connected in some way. What do you call the devices that tie these numbers of LANs together are called?',
      correct: 'b',
      ans: {
        a: {
          key: 'a', name: 'Router'
        },
        b: {
          key: 'b', name: 'Switch'
        },
        c: {
          key: 'c', name: 'key'
        },
        d: {
          key: 'd', name: 'spot'
        },
        e: {
          key: 'e', name: 'points'
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


export default class Topics2 extends Component {
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
  }
});
