import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import GoTo from '../buttons/Navigate';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.home}>
        <Text>Home Screen</Text>
        <GoTo title="Go to Account" navigate="Account" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});