import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/components/HomeScreen';
import AccountScreen from './src/components/AccountScreen';
import ChallengeScreen from './src/components/ChallengesScreen';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Account: {
      screen: AccountScreen
    },
    Challenges: {
      screen: ChallengeScreen
    }
  },
  {
    initialRouteName: 'Home'
  }
);

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

export default App;