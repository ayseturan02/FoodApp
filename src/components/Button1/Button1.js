import {Button,  Dimensions,  Pressable,  Text,  View} from 'react-native';
import React from 'react';


const winWidth = Dimensions.get('window').width;
const Button1 = (props) => {
 const {onPress, title} = props

  return (
    <Pressable onPress={onPress}>
     <View
    style={{
      alignContent: 'center',
      alignItems: 'center',
      marginTop: winWidth * 0.1,
    }}>
    <View
      style={{
        backgroundColor: '#C84C02',
        height: winWidth * 0.13,
        width: winWidth * 0.7,
        borderRadius: winWidth * 0.05,
      }}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: winWidth * 0.13,
          width: winWidth * 0.7,
        }}>
        <Text
          style={{
            fontSize: winWidth * 0.045,
            fontWeight: '700',
            color: '#F9DFC9',
          }}>
          Login
        </Text>
      </View>
    </View>
  </View>
    </Pressable>
  );
};

export default Button1;
