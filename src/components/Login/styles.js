import {Dimensions, StyleSheet, Text, View} from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
    eyes: {
        height: winWidth * 0.06,
        width: winWidth * 0.06,
        position: 'absolute',
        right: winWidth * 0.04,
        top: -winWidth*0.09,
    },
    margin: {
        marginTop: winWidth * 0.03,
    },
  email: {
    fontSize: winWidth * 0.04,
    fontWeight: '500',
    color: '#3C3C3C',
  },
  box: {
    height: winWidth * 0.12,
    width: winWidth * 0.88,
    borderRadius: winWidth * 0.03,
    backgroundColor: 'white',
    borderColor: '#CDCDCD',
    borderWidth: winWidth * 0.001,
    shadowColor: 'black',
    shadowOpacity: winWidth * 1,
    elevation: 1,
    shadowOffset: {width: winWidth * 0.88, height: winWidth * 0.12},
    shadowRadius: winWidth * 0.07,
  },
})
