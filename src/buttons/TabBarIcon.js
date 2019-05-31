import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

export default function TabBarIcon(props) {
  return (
    <FontAwesomeIcon icon={props.icon} color={props.color} size={25} />
  );
}

TabBarIcon.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  color: PropTypes.string
};