import {StyleSheet, Text, View, Dimensions} from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  top: {
    backgroundColor: 'white',
    height: winWidth * 0.16,
    width: winWidth * 1,
  },
  image: {
    height: winWidth * 0.7,
    width: winWidth * 1,
    
    
  },
  heart_view: {
    height: winWidth * 0.13,
    width: winWidth * 0.13,
    backgroundColor: 'red',
    borderRadius: winWidth * 1,
  },
  scroll:{
    height:winHeight*1
  },
  screen:{
    height:winHeight*1.4
  }
});
