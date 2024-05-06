import {StyleSheet, Dimensions} from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  view: {
    backgroundColor: 'white',
    height: winWidth * 0.15,
    width: winWidth * 0.15,
    borderRadius: winWidth * 1,
    shadowColor: 'black',
    shadowOpacity: winWidth * 1,
    shadowRadius: winWidth * 1,
    shadowOffset: {
      width: winWidth * 1,
      height: winWidth * 1,
    },
    elevation: 5,
  },
  icon_size: {
    height: winWidth * 0.1,
    width: winWidth * 0.1,
    margin: winWidth * 0.025,
  },
});
