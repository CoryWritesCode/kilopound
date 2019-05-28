import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { COLORS } from '../styles/global';

const styles = StyleSheet.create({
  goTo: {
    color: COLORS.ACTIVE_BTN_COLOR
  }
})

function GoTo(props) {
  return <View style={props.look}>
    <Button color={styles.goTo.color} title={props.title} onPress={() => { props.navigation.navigate(props.navigate) }} />
  </View>
}

GoTo.propTypes = {
  navigate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  look: PropTypes.object
}

export default withNavigation(GoTo);