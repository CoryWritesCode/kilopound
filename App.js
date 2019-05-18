import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { COLORS } from './src/styles/global';
import HomeScreen from './src/components/HomeScreen';
import AccountScreen from './src/components/AccountScreen';
import ChallengeScreen from './src/components/ChallengesScreen';

const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navitionOptions: {
        tabBarAccessiblityLabel: 'Home',
      }
    },
    Account: {
      screen: AccountScreen,
      navigationOptions: {
        tabBarAccessiblityLabel: 'Account',
      }
    },
    Challenges: {
      screen: ChallengeScreen,
      navigationOptions: {
        tabBarAccessiblityLabel: 'Challenges'
      },
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      tabBarOptions: {
        activeTintColor: COLORS.BTN_COLOR,
        style: {
          backgroundColor: COLORS.BGCOLOR
        },
      },
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

export default App;