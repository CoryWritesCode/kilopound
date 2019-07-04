import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';
import { getData, storeData } from '../utils/AsyncStorage';
import { COLORS } from '../globals/styles/index';
import InputWithLabel from './InputWithLabel';
import GoTo from '../buttons/Navigate';
import NativeTachyons from 'react-native-style-tachyons';

const styles = StyleSheet.create({
  headerBtn: {
    marginLeft: 12,
    padding: 10
  }
});

class UserInfo extends React.Component {
  static navigationOptions({ navigation }) {
    let edit = navigation.getParam('edit', false);
    return {
      headerTitle: 'User Info',
      gesturesEnabled: false,
      headerLeft: edit ? <View>
        <GoTo look={styles.headerBtn} title='X' navigate={'Account'} />
      </View> : null,
      headerStyle: {
        backgroundColor: COLORS.BGCOLOR,
      },
      headerTitleStyle: {
        color: COLORS.FONT_COLOR
      }
    };
  }

  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
    };
  }

  saveUser = async () => {
    var {
      firstName,
      lastName
    } = this.state;
    if (firstName === '' || lastName === '') {
      return;
    } else {
      let userInfo = {
        'firstName': firstName,
        'lastName': lastName
      };
      await storeData('user', JSON.stringify(userInfo));
      this.props.navigation.goBack();
    }
  };

  async componentWillMount() {
    let userObj = await getData('user');
    let user = JSON.parse(userObj);
    if (userObj) {
      this.setState({
        firstName: user.firstName,
        lastName: user.lastName,
        edit: true
      });
    }
  }

  render() {

    var {
      firstName,
      lastName
    } = this.state;

    return (
      <View cls='flx-i bg-bgcolor pa3'>
        <StatusBar barStyle="light-content" />
        <InputWithLabel
          label='First Name'
          onChangeText={(e) => this.setState({ firstName: e })}
          inputValue={firstName}
        />
        <InputWithLabel
          label='Last Name'
          onChangeText={(e) => this.setState({ lastName: e })}
          inputValue={lastName}
        />
        <TouchableOpacity
          cls='w4 mv3 pa2 ba b--primary br2 asc aic'
          onPress={this.saveUser}>
          <Text cls='primary b'>Save</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default NativeTachyons.wrap(UserInfo);