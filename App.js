import React from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { COLORS } from './src/styles/global';
import { faHome, faDumbbell, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import HomeScreen from './src/components/HomeScreen';
import ChallengeScreen from './src/components/ChallengesScreen';
import TabBarIcon from './src/buttons/TabBarIcon';
import AccountStack from './src/utils/stacks/AccountStack';

const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      path: '/',
      navigationOptions: {
        tabBarAccessiblityLabel: 'Home',
        tabBarIcon: ({ tintColor }) => { return <TabBarIcon icon={faHome} color={tintColor} />; }
      }
    },
    Account: {
      screen: AccountStack,
      path: '/account',
      navigationOptions: {
        tabBarAccessiblityLabel: 'Account',
        tabBarIcon: ({ tintColor }) => { return <TabBarIcon icon={faUserCircle} color={tintColor} />; }
      }
    },
    Challenges: {
      screen: ChallengeScreen,
      path: '/challenge',
      navigationOptions: {
        tabBarAccessiblityLabel: 'Challenges',
        tabBarIcon: ({ tintColor }) => { return <TabBarIcon icon={faDumbbell} color={tintColor} />; }
      },
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      tabBarOptions: {
        activeTintColor: COLORS.ACTIVE_BTN_COLOR,
        inactiveTintColor: COLORS.INACTIVE_BTN_COLOR,
        showIcon: true,
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