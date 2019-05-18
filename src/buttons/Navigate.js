import React from 'react';
import PropTypes from 'prop-types';
import { Button, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import { COLORS } from '../styles/global';

const styles = StyleSheet.create({
  goTo: {
    color: COLORS.BTN_COLOR
  }
})

class GoTo extends React.Component {
  render() {
    return <Button color={COLORS.BTN_COLOR} title={this.props.title} onPress={() => { this.props.navigation.navigate(this.props.navigate) }} />;
  }
}

GoTo.propTypes = {
  navigate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default withNavigation(GoTo);