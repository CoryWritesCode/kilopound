import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import NativeTachyons from 'react-native-style-tachyons';

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50
  }
});

function AddWeight(props) {
  return (
    <View>
      <TouchableOpacity
        cls='ba br2 ma1 aic jcc b--font'
        style={styles.button}
        onPress={props.handlePress}>
        <Text cls='font'>{props.amount}</Text>
      </TouchableOpacity>
    </View >
  );
}

AddWeight.propTypes = {
  handlePress: PropTypes.func.isRequired,
  amount: PropTypes.number.isRequired,
};

export default NativeTachyons.wrap(AddWeight);