import { StyleSheet, Platform } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logo: {
    ...Platform.select({
      android: { paddingTop: 30 },
      ios: { paddingTop: 35 }
    }),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginBottom: 0,
    width: 552 / 2,
    height: 400 / 2
  },
  logins: {
    width: 250,
    marginLeft: 20,
    borderColor: "white"
  },
  spinner: {
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
  icons: {
    marginRight: 20,
    paddingRight: 100
  },
  loginBtn: {
    left: 275,
    bottom: 140,
    padding: 15,
    backgroundColor: "#1e2326",
    borderRadius: 300,
    height: 70,
    width: 70
  },
  loginMidLine: {
    width: 250,
    marginLeft: 20
  },
  remBtn: {
    top: -7,
    width: 190,
    borderColor: "transparent"
  },
  whiteBorder: {
    borderColor: "transparent"
  },
  lowerBody: {
    // borderColor: 'transparent',
    // textDecorationLine: none
  },
  footerImage: {
    margin: 5,
    opacity: 0.61,
    alignItems: "center",
    justifyContent: "center"
  },
  showPassword: {
    // borderColor: "black",
    backgroundColor: "whitesmoke",
    // borderWidth: 3,
    borderRadius: 200,
    height: 25,
    width: 50
  }
});
export default styles