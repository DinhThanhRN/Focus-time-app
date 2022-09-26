import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {fontSizes, paddingSizes} from '../utils/sizes';

const RoundedButton = ({
  style = {},
  textStyle = {},
  size = 125,
  onSummit,

  ...props
}) => {
  return (
    <TouchableOpacity style={[styles(size).radius, style]} onPress={onSummit}>
      <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = size =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: '#fff',
      borderWidth: 2,
    },
    text: {
      color: '#fff',
      fontSize: 20,
      alignItems: 'center',
    },
  });

export default RoundedButton;
