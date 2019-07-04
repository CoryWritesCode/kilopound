import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import NativeTachyons from 'react-native-style-tachyons';

function GoTo(props) {
  let handlePress = props.isDisabled ? () => { } : () => { props.navigation.navigate(props.navigate); };
  return (
    <View>
      <TouchableOpacity
        style={props.look}
        onPress={handlePress}>
        <Text cls='primary f5'>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
}

GoTo.propTypes = {
  navigate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  look: PropTypes.object,
  isDisabled: PropTypes.bool
};

export default withNavigation(NativeTachyons.wrap(GoTo));