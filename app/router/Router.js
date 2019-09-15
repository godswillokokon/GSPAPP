import React from "react";
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createDrawerNavigator } from "react-navigation";
import Home from "../screens/home/home";
import Login from "../screens/signUp/signUp";
import Library from "../screens/library";
import Profile from "../screens/profile";
import Single from "../screens/single/single";
import Topics from "../screens/topics/index";
import Register from "../screens/register/register";
import Feedback from "../screens/feedback/feedback";
import AboutUs from "../screens/feedback/feedback";


// import MainScreen from 'app/screens/home/home.js'
// const homeNavigator = createStackNavigator ({
//   Home: {
//     screen: Home,
//     navigationOptions: ({navigation}) => ({
//       title: `Tranzact`,
//       headerTintColor: 'white',
//       headerStyle: {backgroundColor: theme.colors.darkFusion},
//       headerTitleStyle: {
//         fontSize: 18,
//       },
//       headerLeft: <Menu navigation={navigation} />,
//     }),
//   },
// });
const MainNavigator = createStackNavigator({
  // Main: {
  //   screen: Home,
  //   navigationOptions: { header: null }
  // },
  // Login: {
  //   screen: Login,
  //   navigationOptions: { header: null }
  // },
  Profile: {
    screen: Profile,
    navigationOptions: { header: null }
  },
  Library: {
    screen: Library,
    navigationOptions: { header: null }
  },
  Single: {
    screen: Single,
    navigationOptions: { header: null }
  },
  Register: {
    screen: Register,
    navigationOptions: { header: null }
  },
  Topics: {
    screen: Topics,
    navigationOptions: { header: null }
  },
  Feedback: {
    screen: Feedback,
    navigationOptions: { header: null }
  },
  AboutUs: {
    screen: AboutUs,
    navigationOptions: { header: null }
  },

});

const AppContainer = createAppContainer(MainNavigator);
export default AppContainer;
// export default createDrawerNavigator(
//   {
//     // TabNavigator: { screen: tabNavigator },
//     // TransactionHistory: {
//     //     screen: transactionHistoryNavigator
//     // },
//     Main: {
//       screen: MainNavigator
//     }
//   },
//   {
//     // contentComponent: SideMenu,
//     initialRouteName: "Main"
//   }
// );
