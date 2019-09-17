import React, { Component } from 'react'
import {
  Container,
  Content,
} from "native-base";
import { Text, Image, KeyboardAvoidingView, StyleSheet, Platform, TouchableOpacity, View, } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { GiftedChat, InputToolbar, Bubble, Time } from 'react-native-gifted-chat';
import QuickReplies from 'react-native-gifted-chat/lib/QuickReplies';
import FooterComponet from "../footer";
import Head from "../header";
import Fire from "../../config/fire";
// type Props = {
//   name?: string,
// };

export default class Chat extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: (navigation.state.params || {}).name || 'Chat!',
  });

  state = {
    messages: [],
  };
  componentWillMount() {



  }
  get user() {  // Return our name and our UID for GiftedChat to parse
    return {
      name: this.props.navigation.state.params.name,
      _id: Fire.shared.uid,
    };
  }
  renderTime() {
    return (
      <Time
        textStyle={{
          right: {
            color: 'green',

            fontSize: 14
          },
          left: {
            color: 'yellow',

            fontSize: 14
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
          },
          right: {
            backgroundColor: '#6771e4',
          }
        }}
        textStyle={{
          right: {
            color: '#1e2326',

            fontSize: 18
          },
          left: {
            color: '#1e2326',

            fontSize: 18
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
    console.log(this.user);
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
                showUserAvatar={true}
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

        <FooterComponet name="profile" props={this.props} />

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
