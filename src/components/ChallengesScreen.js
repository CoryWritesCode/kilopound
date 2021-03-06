import React from 'react';
import PropTypes from 'prop-types';
import GoTo from '../buttons/Navigate';
import { COLORS } from '../globals/styles/index';
import { Text, View, StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  challenges: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.BGCOLOR
  },
  title: {
    color: COLORS.FONT_COLOR
  }
});

export default function ChallengeScreen() {
  return (
    <View style={styles.challenges}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>Challenges Screen</Text>
      <GoTo title="Go to Home" navigate="Home" />
      <GoTo title="Go to Account" navigate="Account" />
    </View>
  );
}

ChallengeScreen.propTypes = {

};