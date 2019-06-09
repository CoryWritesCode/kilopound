import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import GoTo from '../buttons/Navigate';
import { COLORS } from '../styles/global';
import { getData, removeData } from '../utils/AsyncStorage';
import { NavigationEvents } from 'react-navigation';

const styles = StyleSheet.create({
  account: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.BGCOLOR,
  },
  title: {
    color: COLORS.FONT_COLOR
  }
});

const AccountScreen = ({ navigation }) => {

  let willFocus = async () => {
    let user = await getData('user');
    if (user === null) {
      navigation.navigate('UserInfo', { firstTime: true });
    }
  };

  let handleReset = async () => {
    await removeData('user');
  };

  return (
    <View style={styles.account}>
      <NavigationEvents onWillFocus={willFocus} />
      <Text style={styles.title}>Account Screen</Text>
      <GoTo title="Go to Home" navigate="Home" />
      <GoTo title="Go to Challenges" navigate="Challenges" />
      <TouchableOpacity style={{ padding: 20, margin: 20 }} onPress={handleReset}>
        <Text style={{ color: 'white' }}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};

AccountScreen.navigationOptions = {
  header: null,
};

AccountScreen.propTypes = {

};

export default AccountScreen;