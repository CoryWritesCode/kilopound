import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import GoTo from '../buttons/Navigate';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.home}>
        <Text style={styles.title}>Home Screen</Text>
        <GoTo title="Go to Account" navigate="Account" />
      </View>
    );
  }
}

HomeScreen.propTypes = {

}

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1F2124'
  },
  title: {
    color: 'white'
  }
});