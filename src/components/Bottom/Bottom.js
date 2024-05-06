import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

const Bottom = props => {
  const {icon_name,icon_text} = props;
  return (
    <View>
      <Image source={icon_name} style={styles.icon_size} />
      <View style={{alignContent:"center",justifyContent:"center"}}>
        <Text style={styles.text}>
          {icon_text}
        </Text>
      </View>
    </View>
  );
};

export default Bottom;
