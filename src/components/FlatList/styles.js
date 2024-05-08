import {Dimensions, StyleSheet, Text, View} from 'react-native';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  margin: {
    padding: winWidth * 0.02,
    backgroundColor: '#f0f0f0',
  },
  card: {
    height: winWidth * 0.45,
    width: winWidth * 0.45,
    backgroundColor: 'white',
    borderRadius: winWidth * 0.04,
    shadowColor: 'black',
    shadowOpacity: winWidth * 0.1,
    shadowOffset: {
      width: winWidth * 0.01,
      height: winHeight * 0.01,
    },
    elevation: 5,
  },
  photo_size: {
    width: winWidth * 0.25,
    height: winWidth * 0.25,
    borderRadius: winWidth * 1,
    alignSelf: 'center',
    top: -winWidth * 0.06,
  },
  size: {
    height: winWidth * 0.06,
    width: winWidth * 0.06,
  },
  heart_pozition: {
    width: winWidth * 0.4,
    alignItems: 'flex-end',
    margin: winWidth * 0.02,
  },
  text: {
    fontSize: winWidth * 0.04,
    fontWeight: '500',
    color: 'black',
  },
  price_text: {
    fontSize: winWidth * 0.05,
    fontWeight: '600',
    color: 'black',
  },
  text_pozition: {
    alignContent: 'center',
    alignItems: 'center',
    marginTop: -winWidth * 0.03,
  },
  container: {
    height: winHeight * 0.73,
  },
});
