import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { getData, storeData } from '../utils/AsyncStorage';
import { COLORS } from '../styles/global';
import InputWithLabel from './InputWithLabel';
import GoTo from '../buttons/Navigate';
import { NavigationEvents } from 'react-navigation';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
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
  }
});

const UserInfo = ({ navigation }) => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  let willFocus = async () => {
    try {
      let userObj = await getData('user');
      let user = JSON.parse(userObj);
      setFirstName(user.firstName);
      setLastName(user.lastName);
    } catch (e) {
      throw e;
    }
  };

  const saveUser = async () => {
    if (firstName === '' || lastName === '') {
      return;
    } else {
      let userInfo = {
        'firstName': firstName,
        'lastName': lastName
      };
      await storeData('user', JSON.stringify(userInfo));
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={willFocus} />
      <Text></Text>
      <InputWithLabel
        label='First Name'
        onChangeText={(e) => setFirstName(e)}
        inputValue={firstName === '' ? '' : firstName}
      />
      <InputWithLabel
        label='Last Name'
        onChangeText={(e) => setLastName(e)}
        inputValue={lastName === '' ? '' : lastName}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={saveUser}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};

UserInfo.navigationOptions = {
  headerTitle: 'User Info',
  gesturesEnabled: false,
  headerLeft: undefined ? <View>
    <GoTo look={styles.button} title='X' navigate={'Account'} />
  </View> : null,
  headerStyle: {
    backgroundColor: COLORS.BGCOLOR,
  },
  headerTitleStyle: {
    color: COLORS.FONT_COLOR
  }
};

export default UserInfo;