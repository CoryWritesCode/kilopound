import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import GoTo from '../buttons/Navigate';

export default class AccountScreen extends React.Component {
  static navigationOptions = {
    title: 'Account'
  }
  render() {
    return (
      <View style={styles.account}>
        <Text>Account Screen</Text>
        <GoTo title="Go to Home" navigate="Home" />
        <GoTo title="Go to Challenges" navigate="Challenges" />
      </View>
    );
  }
}

AccountScreen.propTypes = {

}

const styles = StyleSheet.create({
  account: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})