import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/components/HomeScreen';
import AccountScreen from './src/components/AccountScreen';

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Account: {
      screen: AccountScreen
    }
  },
  {
    initialRouteName: 'Home'
  }
);

export default App;