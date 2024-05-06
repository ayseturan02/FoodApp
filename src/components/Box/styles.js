import {StyleSheet, Dimensions} from 'react-native';
import React from 'react';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  box_size: {
    width: winWidth * 0.05,
    height: winWidth * 0.05,
    borderColor: 'black',
    borderWidth: winWidth * 0.005,
  },
  text: {
    fontSize: winWidth * 0.035,
    fontWeight: '600',
    color: '#3A3A3A',
  },
});
