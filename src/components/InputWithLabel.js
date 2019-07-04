import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, View, Text } from 'react-native';
import { COLORS } from '../globals/styles/index';
import NativeTachyons from 'react-native-style-tachyons';

const InputWithLabel = (props) => {

  return (
    <View>
      <Text cls='font mt2 underline'>{props.label}</Text>
      <TextInput
        {...props}
        keyboardAppearance='dark'
        value={props.inputValue}
        cls='font ba br2 mv1 pa1 b--secondary'
        selectionColor={COLORS.PRIMARY} />
    </View>
  );
};

InputWithLabel.propTypes = {
  label: PropTypes.string.isRequired,
  inputValue: PropTypes.string,
  onChange: PropTypes.func,
};

export default NativeTachyons.wrap(InputWithLabel);