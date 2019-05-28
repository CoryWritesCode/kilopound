import React, { useState } from 'react';
import { Button, View, Text, TextInput, StyleSheet } from 'react-native';
import { getData, storeData } from '../utils/AsyncStorage';
import PropTypes from 'prop-types';
import { COLORS } from '../styles/global';
import GoTo from '../buttons/Navigate';
import InputWithLabel from './InputWithLabel';

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

export default function UserInfo() {
  // static navigationOptions = {
  //   headerTitle: 'User Info',
  //   gesturesEnabled: false,
  //   headerLeft: <View >
  //     <GoTo look={styles.button} title='X' navigate={'Account'} />
  //   </View>,
  //   headerStyle: {
  //     backgroundColor: COLORS.BGCOLOR,
  //   },
  //   headerTitleStyle: {
  //     color: COLORS.FONT_COLOR
  //   }
  // }

  // static defaultInputProps = {
  //   viewStyle: {},
  //   labelStlye: {},
  //   label: '',
  //   inputStyle: {},
  //   inputValue: '',
  //   onChange: () => { }
  // }

  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     firstName: 'firstName',
  //     lastName: 'lastName',
  //     pbDeadLift: 'pbDeadLift',
  //     pbBenchPress: 'pbBenchPress',
  //     pbCleanPress: 'pbCleanPress'
  //   }
  // }

  const [name, setName] = useState({ fisrtName: 'Cory', lastName: 'Cuningham' });

  var {
    firstName,
    lastName,
    pbDeadLift,
    pbBenchPress,
    pbCleanPress
  } = this.state;

  return (
    <View style={styles.container}>
      <InputWithLabel
        label='test'
        inputValue='value'
        onChange={(e) => { this.setState({ firstName: e.value }) }}
      />
      <TextInput style={styles.inputStyle} value={firstName} />
      <TextInput style={styles.inputStyle} value={lastName} />
      <TextInput style={styles.inputStyle} value={pbDeadLift} />
      <TextInput style={styles.inputStyle} value={pbBenchPress} />
      <TextInput style={styles.inputStyle} value={pbCleanPress} />
    </View>
  );
};