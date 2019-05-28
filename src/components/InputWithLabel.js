import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, View, Text } from 'react-native';

export default function InputWithLabel(props) {
  var {
    props
  } = this;

  return (
    <View>
      <Text>{props.label}</Text>
      <TextInput value={props.inputValue} onChange={props.onChange} />
    </View>
  )
}

InputWithLabel.PropTypes = {
  label: PropTypes.string.isRequired,
  inputValue: PropTypes.string,
  onChange: PropTypes.func.isRequired
}