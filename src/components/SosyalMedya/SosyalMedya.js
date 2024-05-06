import {StyleSheet, Image, View} from 'react-native';
import React from 'react';
import styles from './styles';


const SosyalMedya = (props) => {
    const {icon_name} = props;
  return (
    <View
      style={styles.view}>
      <Image
        source={icon_name}
        style={styles.icon_size}
      />
    </View>
  );
};

export default SosyalMedya;

