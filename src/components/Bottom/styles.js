import {Dimensions, StyleSheet, Text, View} from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  icon_size: {
    height: winWidth * 0.07,
    width: winWidth * 0.07,
  },
  text: {
      fontSize: winWidth * 0.035,
      fontWeight: '600',
      color: '#696564',
  }
});
