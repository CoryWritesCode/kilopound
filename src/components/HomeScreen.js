import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Platform, StyleSheet, Text, View, Image } from 'react-native';
import GoTo from '../buttons/Navigate';

const styles = StyleSheet.create({
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2D2F32'
  },
  title: {
    color: 'white'
  }
});

export default function HomeScreen() {
  return (
    <View style={styles.home}>
      <Text style={styles.title}>Home Screen</Text>
      <GoTo title="Go to Account" navigate="Account" />
    </View>
  );
}

HomeScreen.propTypes = {

};
