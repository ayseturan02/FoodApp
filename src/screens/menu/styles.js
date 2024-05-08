import {StyleSheet, Dimensions} from 'react-native';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  text_size: {
    fontSize: winWidth * 0.06,
    fontWeight: '700',
    color: 'black',
  },
  pozition: {
    height: winHeight * 0.1,
    width: winWidth * 0.8,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  text_row: {
    fontSize: winWidth * 0.05,
    fontWeight: '600',
    color: 'black',
    marginTop: winWidth * 0.05,
    marginBottom: winWidth * 0.05,
  },
  line: {
    height: winWidth * 0.01,
    width: winWidth * 0.25,
    backgroundColor: '#C14C18',
    top: -winWidth * 0.04,
  },
  line_pozition: {
    width: winWidth * 0.9,
    alignContent: 'center',
    alignSelf: 'center',
  },
  flatList: {
    height: winHeight * 0.7,
  },
  meals: {
    backgroundColor: 'red',
    height: winHeight * 1,
    width: winWidth * 1,
  },
  bottom: {
    marginTop: winWidth * 0.001,
  },
  bottom_position: {
    justifyContent: 'space-around',
    height: winHeight * 0.1,
    width: winWidth,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
