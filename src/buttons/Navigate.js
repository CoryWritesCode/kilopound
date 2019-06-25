import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
import { COLORS } from '../globals/styles/index';

const styles = StyleSheet.create({
  goTo: {
    color: COLORS.PRIMARY,
  }
});

function GoTo(props) {
  let handlePress = props.isDisabled ? () => { } : () => { props.navigation.navigate(props.navigate); };
  return (
    <View>
      <TouchableOpacity
        style={props.look}
        onPress={handlePress}>
        <Text style={styles.goTo}>{props.title}</Text>
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

export default withNavigation(GoTo);