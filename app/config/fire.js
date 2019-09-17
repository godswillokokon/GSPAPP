import firebase from 'firebase';
import { Alert } from "react-native";

class Fire {

  constructor() {
    this.init();
    this.observeAuth();
  }
  init = () =>
    firebase.initializeApp({
      apiKey: "AIzaSyBymD2ubbRhLbC_9s70O6cu9qwNLKdbwtQ",
      authDomain: "chat-og.firebaseapp.com",
      databaseURL: "https://chat-og.firebaseio.com",
      projectId: "chat-og",
      storageBucket: "",
      messagingSenderId: "499154326256",
      appId: "1:499154326256:web:8bf9dee51f39b05efb6835"

    });
  observeAuth = () => firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
  onAuthStateChanged = user => {
    if (!user) {
      try {
        firebase.auth().signInAnonymously();
      } catch ({ message }) {
        Alert.alert(message);
      }
    }

  };
  get ref() {
    return firebase.database().ref('messages');
  }
  on = callback =>
    this.ref
      .limitToLast(20)
      .on('child_added', snapshot => callback(this.parse(snapshot)));
  parse = snapshot => {
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: _id } = snapshot;
    const timestamp = new Date(numberStamp);
    const message = {
      _id,
      timestamp,
      text,
      user,
    }
    return message;
  }

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }
  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }


  send = messages => {
    console.log("firebase settt uppp")

    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
      const message = {
        text,
        user,
        timestamp: this.timestamp,
      };
      this.append(message);
    }
  };
  append = message => this.ref.push(message);
  off() {
    this.ref.off();
  }

}
Fire.shared = new Fire();
console.log("firebase settt uppp");

export default Fire;