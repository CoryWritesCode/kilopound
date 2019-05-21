import React from 'react';
import { COLORS } from '../styles/global';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <FontAwesomeIcon icon={this.props.icon} color={this.props.color} size={25} />
    )
  }
}

TabBarIcon.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  color: PropTypes.string
}