import React from 'react';
import {TouchableOpacity, StyleSheet, Text} from 'react-native';
import {ColorCodes, Specs} from '../utils/Theme';

const Button = (props) => {
  return (
    <TouchableOpacity
      style={[styles.button(props.disabled), props.style]}
      disabled={props.disabled}
      onPress={props.onPress}>
      <Text style={[styles.text, props.textStyle]}>{props.children}</Text>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  onPress: () => {},
  disabled: false,
};

const styles = StyleSheet.create({
  button: (disabled) => ({
    backgroundColor: disabled ? ColorCodes.InputBackground : ColorCodes.Blue,
    paddingVertical: 15,
    alignItems: 'center',
    borderRadius: 5,
  }),
  text: {
    fontSize: 14,
    color: ColorCodes.White,
    ...Specs.fontBold,
  },
});

export default Button;
