import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { COLORS } from '../globals/styles/index';

const styles = StyleSheet.create({
  button: {
    color: COLORS.PRIMARY,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: COLORS.FONT_COLOR,
    margin: 5,
  }
});

function AddWeight(props) {
  return (
    <View>
      <TouchableOpacity
        style={styles.button}
        onPress={props.handlePress}>
        <Text style={props.look}>{props.amount}</Text>
      </TouchableOpacity>
    </View>
  );
}

AddWeight.propTypes = {
  handlePress: PropTypes.func.isRequired,
  amount: PropTypes.number.isRequired,
  look: PropTypes.object
};

export default AddWeight;