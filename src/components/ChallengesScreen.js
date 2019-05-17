import React from 'react';
import PropTypes from 'prop-types';
import GoTo from '../buttons/Navigate';
import { Text, View, StyleSheet } from 'react-native';

export default class ChallengeScreen extends React.Component {
  static navigationOptions = {
    title: 'Challenges'
  };

  render() {
    return (
      <View style={styles.challenges}>
        <Text>Challenges Screen</Text>
        <GoTo title="Go to Home" navigate="Home" />
        <GoTo title="Go to Account" navigate="Account" />
      </View>
    );
  }
}

ChallengeScreen.propTypes = {

}

const styles = StyleSheet.create({
  challenges: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})