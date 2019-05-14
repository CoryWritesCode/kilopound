import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-native';
import { withNavigation } from 'react-navigation';

class GoTo extends React.Component {
  render() {
    return <Button title={this.props.title} onPress={() => { this.props.navigation.navigate(this.props.navigate) }} />;
  }
}

GoTo.propTypes = {
  navigate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default withNavigation(GoTo);