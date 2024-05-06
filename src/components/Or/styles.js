import {StyleSheet, Dimensions} from 'react-native';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

export default styles = StyleSheet.create({
  pozition: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: winWidth * 0.12,
  },
  line: {
    backgroundColor: '#BBBBBB',
    height: winWidth * 0.007,
    width: winWidth * 0.3,
  },
  sing_pozition: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: winWidth * 0.05,
  },
  or_style: {
    fontSize: winWidth * 0.05,
    fontWeight: '700',
    color: 'black',
  },
  sing_style: {
    fontSize: winWidth * 0.04,
    fontWeight: '500',
    color: 'black',
  },
  icon_pozition: {
    flexDirection: 'row',
    width: winWidth * 0.6,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
