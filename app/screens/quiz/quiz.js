import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import { Container, Content } from "native-base";
import { GetUserData, } from "../../redux/actions/UserActions";
import Session from "../../utils/Session";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import FooterComponet from "../footer";
import Head from "../header";
class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      onEdit: false,
      name: "",
      faculty: "",
      phoneNumber: "",
      score: 0,
    };
  }

  render() {
    const first = this.props.navigation.state.params.first;
    const second = this.props.navigation.state.params.second;
    const title = this.props.navigation.state.params.title;
    const firstCorrect = first.correct;
    const secondCorrect = second.correct;

    let markFirst = (key) => {
      if (firstCorrect == key) {
        let temp = this.state.score;
        let tempAdd = temp + 50
        this.setState({
          score: tempAdd
        })
        console.log("correct answer")
      } else {
        console.log("wrong answer")
      }
    }

    let markSecond = (key) => {
      if (secondCorrect == key) {
        let temp = this.state.score;
        let tempAdd = temp + 50
        this.setState({
          score: tempAdd
        })
        console.log("correct answer")
      } else {
        console.log("wrong answer")
      }
    }

    console.log("score :", this.state.score)
    if (!this.state.onEdit) {
      return (
        <Container style={styles.container}>
          <Head navigation={this.props.navigation} />

          <Content>
            <Text style={styles.subtitle}>{title}</Text>
            <View style={styles.question}>
              <Text style={{ flex: 1, margin: 10 }}> {first.question} </Text>
            </View>
            <View style={styles.display}>

              <TouchableOpacity style={styles.answers} onPress={() => markFirst(first.ans.a.key)}>
                <Text>{first.ans.a.key})  {first.ans.a.name} </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.answers} onPress={() => markFirst(first.ans.b.key)}>
                <Text>{first.ans.b.key})  {first.ans.b.name} </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.answers} onPress={() => markFirst(first.ans.c.key)}>
                <Text>{first.ans.c.key})  {first.ans.c.name} </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.answers} onPress={() => markFirst(first.ans.d.key)}>
                <Text>{first.ans.d.key})  {first.ans.d.name}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.answers} onPress={() => markFirst(first.ans.e.key)}>
                <Text>{first.ans.e.key})  {first.ans.e.name} </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.next}
                onPress={() => this.setState({ onEdit: true })}
              >
                <Text style={styles.nextText} >
                  Next
              </Text>

              </TouchableOpacity>

            </View>
          </Content>
          <FooterComponet name="library" props={this.props} />
        </Container>
      );

    } else {
      return (
        <Container style={styles.container}>
          <Head navigation={this.props.navigation} />

          <Content>
            <Text style={styles.subtitle}>{title}</Text>
            <View style={styles.question}>
              <Text style={{ flex: 1, margin: 10 }}> {second.question} </Text>
            </View>
            <View style={styles.display}>

              <TouchableOpacity style={styles.answers} onPress={() => markSecond(second.ans.a.key)}>
                <Text>{second.ans.a.key}) {second.ans.a.name} </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.answers} onPress={() => markSecond(second.ans.b.key)}>
                <Text>{second.ans.b.key}) {second.ans.b.name} </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.answers} onPress={() => markSecond(second.ans.c.key)}>
                <Text>{second.ans.c.key}) {second.ans.c.name} </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.answers} onPress={() => markSecond(second.ans.d.key)}>
                <Text>{second.ans.d.key}) {second.ans.d.name}</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.answers} onPress={() => markSecond(second.ans.e.key)}>
                <Text>{second.ans.e.key}) {second.ans.e.name} </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.next}
                onPress={() => this.props.navigation.navigate("Library")}
              >
                <Text style={styles.nextText} >
                  Done
              </Text>

              </TouchableOpacity>

            </View>
          </Content>
          <FooterComponet name="library" props={this.props} />
        </Container>
      );
    }
  }
}
const mapStateToProps = state => {
  const { user } = state;
  return { user: user };
};

const mapDispatchToProps = dispatch => ({
  getUser: token => dispatch(GetUserData(token)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Quiz);
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1d27"
  },
  question: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    marginTop: 40,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 39,
    padding: 10,
    height: 200,
    borderColor: '#6771e4',
    borderWidth: 1
  },
  nextText: {
    color: "#6771e4"
  },
  next: {
    flex: 1,
    alignSelf: "center",
    backgroundColor: "#1e2326",
    padding: 20,
    margin: 10,
    width: 100,
    alignItems: "center",
    borderRadius: 39,
    borderColor: '#6771e4',
    borderWidth: 2
  },
  answers: {
    flex: 1,
    alignSelf: "center",
    backgroundColor: "#6771e4",
    padding: 5,
    margin: 10,
    width: 300,
    alignItems: "center",
    borderRadius: 39,
  },
  display: {
    alignContent: 'center',
  },
  subtitle: {
    fontSize: 20,
    color: "white",
    textAlign: 'center',
    margin: 5
  },
});
