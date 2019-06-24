import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView
} from 'react-native';
import { getData, storeData } from '../utils/AsyncStorage';
import { COLORS } from '../styles/global';
import InputWithLabel from './InputWithLabel';
import GoTo from '../buttons/Navigate';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BGCOLOR,
  },
  button: {
    marginHorizontal: 100,
    marginVertical: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: COLORS.PRIMARY,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: COLORS.PRIMARY,
  },
  headerBtn: {
    marginLeft: 12,
    padding: 10
  }
});

export default class UserInfo extends React.Component {
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
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
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
            style={styles.button}
            onPress={this.saveUser}>
            <Text style={styles.buttonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}