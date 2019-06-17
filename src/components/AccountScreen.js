import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, DIMENSIONS } from '../styles/global';
import { getData, removeData } from '../utils/AsyncStorage';
import { NavigationEvents } from 'react-navigation';

const styles = StyleSheet.create({
  account: {
    flex: 1,
    backgroundColor: COLORS.BGCOLOR,
    paddingTop: 50
  },
  title: {
    height: '7%',
    color: COLORS.FONT_COLOR,
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: DIMENSIONS.MAX_WIDTH * 0.06,
    alignSelf: 'center'
  },
  info: {
    height: '93%',
  },
  content: {
    color: COLORS.FONT_COLOR,
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: COLORS.SEC_BGCOLOR,
    marginVertical: 5,
  },
  button: {
    color: COLORS.PRIMARY
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
        <Text style={styles.content}>Hello, {user.firstName}!</Text>
        <TouchableOpacity onPress={() => navigation.navigate('UserInfo', { edit: true })}>
          <Text style={[styles.content, styles.button]}>Edit your info</Text>
        </TouchableOpacity>
        {/* creating this button below for debugging so you don't have to delete and recreate the app each time you save the User. Will remove it later. */}
        <TouchableOpacity style={{ padding: 10, margin: 10, borderWidth: 1, borderColor: 'white', alignSelf: 'baseline' }} onPress={handleReset}>
          <Text style={{ color: 'white' }}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View >
  );
};

AccountScreen.navigationOptions = {
  header: null,
};

AccountScreen.propTypes = {

};

export default AccountScreen;