import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../styles/global';

const styles = StyleSheet.create({
  labelStyle: {
    color: COLORS.FONT_COLOR,
    textDecorationLine: 'underline',
    marginTop: 10,
  },
  inputStyle: {
    color: COLORS.FONT_COLOR,
    borderColor: COLORS.SECONDARY,
    borderWidth: 1,
    borderRadius: 2.5,
    marginVertical: 5,
    padding: 5,
  }
});

const InputWithLabel = (props) => {

  return (
    <View>
      <Text style={styles.labelStyle}>{props.label}</Text>
      <TextInput
        {...props}
        keyboardAppearance='dark'
        value={props.inputValue}
        style={styles.inputStyle}
        selectionColor={COLORS.PRIMARY} />
    </View>
  );
};

InputWithLabel.propTypes = {
  label: PropTypes.string.isRequired,
  inputValue: PropTypes.string,
  onChange: PropTypes.func,
};

export default InputWithLabel;