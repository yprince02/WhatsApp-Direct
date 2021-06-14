import React, {useState} from 'react';
import {View, StyleSheet, Picker} from 'react-native';
import {ColorCodes, Specs} from '../utils/Theme';

const CustomPicker = (props) => {
  const [val, setVal] = useState(props.value);

  function onChange(newVal) {
    setVal(newVal);
    props.onChange(newVal);
  }
  return (
    <View style={[styles.container, props.containerStyle]}>
      <Picker
        selectedValue={val}
        style={[styles.picker, props.style]}
        itemStyle={[styles.itemStyle, props.itemStyle]}
        onValueChange={(value) => onChange(value)}>
        {props.data.map((item, index) => (
          <Picker.Item key={item.value} label={item.label} value={item.value} />
        ))}
      </Picker>
    </View>
  );
};

CustomPicker.defaultProps = {
  onChange: () => {},
  data: [],
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorCodes.InputBackground,
    borderRadius: 5,
  },
  picker: {
    width: 92,
    color: ColorCodes.White,
    ...Specs.fontRegular,
  },
  itemStyle: {
    ...Specs.fontRegular,
  },
});

export default CustomPicker;
