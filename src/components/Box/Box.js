import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';

import {useState} from 'react';
import styles from './styles';
const winWidth = Dimensions.get('window').width;

const Box = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheck = newValue => setIsChecked(newValue);

  return (
    <View style={{flexDirection: 'row',paddingTop:winWidth*0.05}}>
      <TouchableOpacity>
        <View style={styles.box_size}></View>
      </TouchableOpacity>
      <View style={{marginLeft:winWidth*0.01}}>
        <Text style={styles.text}>Remember Me</Text>
      </View>
    </View>
  );
};

export default Box;
