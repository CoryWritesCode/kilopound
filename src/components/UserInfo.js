import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { getData, storeData } from '../utils/AsyncStorage';
import { COLORS } from '../styles/global';
import InputWithLabel from './InputWithLabel';
import GoTo from '../buttons/Navigate';

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
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    color: COLORS.PRIMARY,
  }
});

let user = async () => await getData('user');

const UserInfo = ({ navigation }) => {

  const [firstName, setFirstName] = useState(user.firstName || '');
  const [lastName, setLastName] = useState(user.lastName || '');

  const saveUser = async () => {
    if (firstName === '' || lastName === '') {
      return;
    } else {
      let user = {
        'firstName': firstName,
        'lastName': lastName
      };
      await storeData('user', JSON.stringify(user));
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
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
  headerLeft: user.firstName === '' || null ? <View>
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