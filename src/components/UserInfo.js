import React, { useState } from 'react';
import { Button, View, Text, TextInput, StyleSheet } from 'react-native';
import { getData, storeData } from '../utils/AsyncStorage';
import PropTypes from 'prop-types';
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
    marginLeft: 15,
    fontWeight: 'bold',
    color: COLORS.ACTIVE_BUTTON_COLOR
  },
  userInfo: {
    justifyContent: 'space-around',
    flex: 3
  },
  inputStyle: {
    color: COLORS.FONT_COLOR
  }
});

const UserInfo = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  // Will do this later most likely.
  // const [pbDeadLift, setPbDeadLift] = useState('');
  // const [pbBenchPress, setPbBenchPress] = useState('');
  // const [pbCleanPress, setPbCleanPress] = useState('');

  return (
    <View style={styles.container}>
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
      {/* <Text>Personal Best:</Text>
      <InputWithLabel
        label='Dead Lift'
        onChangeText={(e) => setPbDeadLift(e)}
        inputValue={pbDeadLift === '' ? '' : pbDeadLift}
      />
      <InputWithLabel
        label='Bench Press'
        onChangeText={(e) => setPbBenchPress(e)}
        inputValue={pbBenchPress === '' ? '' : pbBenchPress}
      />
      <InputWithLabel
        label='Clean Press'
        onChangeText={(e) => setPbCleanPress(e)}
        inputValue={pbCleanPress === '' ? '' : pbCleanPress}
      /> */}
    </View>
  );
};

UserInfo.navigationOptions = {
  headerTitle: 'User Info',
  gesturesEnabled: false,
  headerLeft: <View >
    <GoTo look={styles.button} title='X' navigate={'Account'} />
  </View>,
  headerStyle: {
    backgroundColor: COLORS.BGCOLOR,
  },
  headerTitleStyle: {
    color: COLORS.FONT_COLOR
  }
};

export default UserInfo;