import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import GoTo from '../buttons/Navigate';
import { COLORS } from '../styles/global';

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
})

export default class AccountScreen extends React.Component {
  static navigationOptions = {
    title: 'Account'
  }
  render() {
    return (
      <View style={styles.account}>
        <Text style={styles.title}>Account Screen</Text>
        <GoTo title="Go to Home" navigate="Home" />
        <GoTo title="Go to Challenges" navigate="Challenges" />
      </View>
    );
  }
}

AccountScreen.propTypes = {

}