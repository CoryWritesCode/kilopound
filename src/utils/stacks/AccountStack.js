import { createStackNavigator } from 'react-navigation';
import AccountScreen from '../../components/AccountScreen';
import UserInfo from '../../components/UserInfo';

const AccountStack = createStackNavigator(
  {
    Account: {
      screen: AccountScreen
    },
    UserInfo: {
      screen: UserInfo,
      path: '/user'
    }
  },
  {
    headerMode: 'screen',
    mode: 'modal'
  }
);

AccountStack.navigationOptions = ({ navigation }) => ({
  tabBarVisible: navigation.state.index === 0
});

export default AccountStack;