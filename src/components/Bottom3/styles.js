import {Dimensions, StyleSheet, Text, View} from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  bottom_view: {
    backgroundColor: 'white',
    height: winWidth * 0.2,
    width: winWidth * 1,
    borderTopLeftRadius: winWidth * 0.04,
    borderTopRightRadius: winWidth * 0.04,
    shadowColor: 'black',
    shadowOpacity: winWidth * 1,
    elevation: 5,
    shadowRadius: winWidth * 0.01,
    shadowOffset: {
      height: -winWidth * 0.2,
      width: 0,
    },
  },
  total_style:{
    fontSize: winWidth * 0.05,
    fontWeight: '600',
    color: 'black',
  },
  cart_style:{
    backgroundColor: '#C74C06',
    height: winWidth * 0.13,
    width: winWidth * 0.38,
    borderRadius: winWidth * 0.03,
  },
  cart_text:{
    fontSize: winWidth * 0.04,
    color: '#FFE4CA',
    fontWeight: '500',
  }

});
