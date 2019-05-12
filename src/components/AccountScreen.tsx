import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import GoTo from '../buttons/Navigate';

type AccountProps = {
  navigation: any;
}

type AccountState = {

}

export default class AccountScreen extends React.Component<AccountProps, AccountState> {
  render() {
    return (
      <View style={styles.account}>
        <Text>Account Screen</Text>
        <GoTo title="Go to Home" navigate="Home" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  account: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})