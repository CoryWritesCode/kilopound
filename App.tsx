import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from './src/components/HomeScreen';
import AccountScreen from './src/components/AccountScreen';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Account: AccountScreen
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(AppNavigator);
