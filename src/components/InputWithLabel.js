import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../styles/global';

const styles = StyleSheet.create({
  inputStyle: {
    color: COLORS.FONT_COLOR
  }
});

export default function InputWithLabel(props) {

  return (
    <View style={{ color: COLORS.FONT_COLOR }}>
      <Text style={{ color: COLORS.FONT_COLOR }}>{props.label}</Text>
      <Text>{props.text}</Text>
      <TextInput keyboardAppearance='dark' value={props.value} onChange={props.onChange} />
    </View>
  );
}

InputWithLabel.propTypes = {
  label: PropTypes.string.isRequired,
  inputValue: PropTypes.string,
  // onChange: PropTypes.func.isRequired,
  text: PropTypes.string
};