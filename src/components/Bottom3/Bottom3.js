import {StyleSheet, Text, View,Dimensions,Image} from 'react-native';
import React from 'react';
import styles from './styles';
const winWidth = Dimensions.get('window').width;
const Bottom3 = (props) => {
    const {price,cart_icon,cart_text} =props;
  return (
  
    <View
    style={styles.bottom_view}>
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      <View>
        <Text
          style={styles.total_style}>
          {price}
        </Text>
      </View>
      <View style={{marginTop: winWidth * 0.02}}>
        <View
          style={styles.cart_style}>
          <View style={{flexDirection: 'row', margin: winWidth * 0.03}}>
            <Image
              source={cart_icon}
              style={{height: winWidth * 0.07, width: winWidth * 0.07}}
            />
            <View style={{marginLeft: winWidth * 0.02}}>
              <Text
                style={styles.cart_text}>
               {cart_text}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  </View>
  );
};

export default Bottom3;
