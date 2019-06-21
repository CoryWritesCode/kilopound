import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { COLORS } from '../styles/global';

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
        <Text style={props.look}>{props.ammount}</Text>
      </TouchableOpacity>
    </View>
  );
}

AddWeight.propTypes = {
  handlePress: PropTypes.func.isRequired,
  ammount: PropTypes.number.isRequired,
  look: PropTypes.object
};

export default AddWeight;