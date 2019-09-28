import React, { Component } from 'react'
import { Container } from "native-base";
import { KeyboardAvoidingView, StyleSheet, Platform } from "react-native";
import { GiftedChat, InputToolbar, Bubble, Time } from 'react-native-gifted-chat';
import QuickReplies from 'react-native-gifted-chat/lib/QuickReplies';
import Head from "../header";
import Fire from "../../config/fire";

export default class Chat extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || 'Chat!',
  });

  state = {
    messages: [],
  };

  get user() {  // Return our name and our UID for GiftedChat to parse
    return {
      name: this.props.navigation.state.params.name,
      _id: Fire.shared.uid,
      createdAt: new Date().toDateString(),
    };

  }

  renderTime() {
    return (
      <Time
        {...new Date().toDateString()
        }
        textStyle={{
          right: {
            color: 'green',
            fontSize: 12
          },
          left: {
            color: 'yellow',
            fontSize: 12
          }
        }}
      />
    );
  }
  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: '#6771e4',
            margin: 5,
          },
          right: {
            backgroundColor: '#6771e4',
            margin: 5
          }
        }}
        textStyle={{
          right: {
            color: '#1e2326',
            fontSize: 13,
            margin: 5
          },
          left: {
            color: '#1e2326',
            fontSize: 13,
            margin: 5
          }
        }}
      />
    );
  }
  renderInputToolbar(props) {
    //Add the extra styles via containerStyle
    return <InputToolbar {...props} containerStyle={{ borderTopWidth: 1.5, borderTopColor: '#333', backgroundColor: '#fff' }} />
  }

  render() {
    console.log(this.user)
    return (
      <Container style={styles.container} >
        <Head navigation={this.props.navigation} />
        {
          Platform.OS === 'android' ?
            <KeyboardAvoidingView behavior={'padding'} style={{ flex: 1 }} keyboardVerticalOffset={30}>
              <GiftedChat
                messages={this.state.messages}
                onSend={Fire.shared.send}
                user={this.user}
                isAnimated={true}
                loadEarlier={true}
                renderBubble={this.renderBubble.bind(this)}
                showUserAvatar={false}
                showAvatarForEveryMessage={true}
                bottomOffset={20}
                renderAvatarOnTop={true}
                scrollToBottom={true}
                isLoadingEarlier={false}
                alignTop={true}
                renderInputToolbar={this.renderInputToolbar}
                isCustomViewBottom={true}
                renderTime={this.renderTime.bind(this)}
                renderUsernameOnMessage={true}
                renderQuickReplies={(props) => <QuickReplies color='green' {...props} />}
                forceGetKeyboardHeight
                textInputStyle={{ color: "#6771e4" }}
              />
            </KeyboardAvoidingView > :
            <GiftedChat />
        }
      </Container >
    );
  }
  componentDidMount() {
    Fire.shared.on(message =>
      this.setState(previousState => ({
        messages: GiftedChat.append(previousState.messages, message),
      }))
    );
  }
  componentWillUnmount() {
    Fire.shared.off();
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1c1d27',
    flex: 1
  },
});
