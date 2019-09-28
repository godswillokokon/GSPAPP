import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/home/home';
import Login from '../screens/signUp/signUp';
import Library from '../screens/library';
import Profile from '../screens/profile';
import Single from '../screens/single/single';
import Topics from '../screens/topics/index';
import Topics2 from '../screens/topics/index2';
import Register from '../screens/register/register';
import AboutUs from '../screens/aboutUs/aboutUs';
import Chat from '../screens/chat/chat';
import MainChat from '../screens/chat/main';
import Quiz from '../screens/quiz/quiz';

const MainNavigator = createStackNavigator({
  Main: {
    screen: Home,
    navigationOptions: { header: null }
  },
  Login: {
    screen: Login,
    navigationOptions: { header: null }
  },
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
  AboutUs: {
    screen: AboutUs,
    navigationOptions: { header: null }
  },
  Chat: {
    screen: Chat,
    navigationOptions: { header: null }
  },
  MainChat: {
    screen: MainChat,
    navigationOptions: { header: null }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: { header: null }
  },
  Topics2: {
    screen: Topics2,
    navigationOptions: { header: null }
  },
});
const AppContainer = createAppContainer(MainNavigator);
export default AppContainer;
