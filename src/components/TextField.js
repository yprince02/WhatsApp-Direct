import React, {useState} from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {ColorCodes, Specs} from '../utils/Theme';

const TextField = (props) => {

  return (
    <TextInput
      {...props}
      style={[styles.input, props.style]}
      placeholderTextColor={ColorCodes.Green}
    />
  );
};

TextField.defaultProps = {
  placeholder: 'Something here...',
  onChange: () => {},
  maxLength: 50,
};

const styles = StyleSheet.create({
  input: {
    fontSize: 14,
    color: ColorCodes.White,
    backgroundColor: ColorCodes.InputBackground,
    borderRadius: 5,
    paddingLeft: 21,
    ...Specs.fontRegular,
  },
});

export default TextField;
