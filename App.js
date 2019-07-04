import React from 'react';
import { createAppContainer, createBottomTabNavigator } from 'react-navigation';
import { COLORS, DIMENSIONS } from './src/globals/styles/index';
import { faHome, faDumbbell, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import HomeScreen from './src/components/HomeScreen';
import ChallengeScreen from './src/components/ChallengesScreen';
import TabBarIcon from './src/buttons/TabBarIcon';
import AccountStack from './src/utils/stacks/AccountStack';
import NativeTachyons from 'react-native-style-tachyons';
import { StyleSheet } from 'react-native';

NativeTachyons.build({
  rem: 20,
  fontRem: 20,
  colors: {
    palette: {
      bgcolor: COLORS.BGCOLOR,
      secbg: COLORS.SEC_BGCOLOR,
      font: COLORS.FONT_COLOR,
      primary: COLORS.PRIMARY,
      secondary: COLORS.SECONDARY,
      inactbtn: COLORS.INACTIVE_BTN_COLOR
    }
  }
}, StyleSheet);

const AppNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      path: '/',
      navigationOptions: {
        tabBarAccessiblityLabel: 'Home',
        tabBarIcon: ({ tintColor }) => <TabBarIcon icon={faHome} color={tintColor} />
      }
    },
    Account: {
      screen: AccountStack,
      path: '/account',
      navigationOptions: {
        tabBarAccessiblityLabel: 'Account',
        tabBarIcon: ({ tintColor }) => <TabBarIcon icon={faUserCircle} color={tintColor} />
      }
    },
    Challenges: {
      screen: ChallengeScreen,
      path: '/challenge',
      navigationOptions: {
        tabBarAccessiblityLabel: 'Challenges',
        tabBarIcon: ({ tintColor }) => <TabBarIcon icon={faDumbbell} color={tintColor} />
      },
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      tabBarOptions: {
        activeTintColor: COLORS.PRIMARY,
        inactiveTintColor: COLORS.INACTIVE_BTN_COLOR,
        showIcon: true,
        style: {
          backgroundColor: COLORS.BGCOLOR,
          paddingTop: 15,
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