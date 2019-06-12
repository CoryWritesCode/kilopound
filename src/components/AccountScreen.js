import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import GoTo from '../buttons/Navigate';
import { COLORS } from '../styles/global';
import { getData, removeData } from '../utils/AsyncStorage';
import { NavigationEvents } from 'react-navigation';

const styles = StyleSheet.create({
  account: {
    flex: 1,
    backgroundColor: COLORS.BGCOLOR,
    paddingTop: 50
  },
  title: {
    flex: 1,
    color: COLORS.FONT_COLOR,
    paddingHorizontal: 20,
    textDecorationLine: 'underline'
  },
  info: {
    flex: 12,
  },
  content: {
    color: COLORS.FONT_COLOR,
    paddingHorizontal: 20,
  }
});

const AccountScreen = ({ navigation }) => {

  const [user, setUser] = useState([]);

  let willFocus = async () => {
    try {
      let userObj = await getData('user');
      if (userObj === null) {
        navigation.navigate('UserInfo');
      } else {
        setUser(JSON.parse(userObj));
      }
    } catch (e) {
      throw e;
    }
  };

  let handleReset = async () => {
    await removeData('user');
    navigation.navigate('UserInfo');
  };

  return (
    <View style={styles.account}>
      <NavigationEvents onWillFocus={willFocus} />
      <Text style={styles.title}>Account</Text>
      <View style={styles.info}>
        <Text style={styles.content}>Hello {user.firstName} {user.lastName}</Text>
        {/* creating this button below for debugging so you don't have to delete and recreate the app each time you save the User. Will remove it later. */}
        <TouchableOpacity style={{ padding: 20, margin: 20, borderWidth: 1, borderColor: 'white', alignSelf: 'baseline' }} onPress={handleReset}>
          <Text style={{ color: 'white' }}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

AccountScreen.navigationOptions = {
  header: null,
};

AccountScreen.propTypes = {

};

export default AccountScreen;