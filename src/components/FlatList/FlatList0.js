import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {heart3} from '../../assets/icons/index';

const FlatList0 = props => {
  const {photo, food_name, price, children} = props;
  return (
    <View style={styles.margin}>
      <View style={styles.card}>
        <View style={styles.heart_pozition}>
          <Image source={heart3} style={styles.size} />
        </View>
        <Image source={{uri: photo}} style={styles.photo_size} />
        <View style={styles.text_pozition}>
          <Text style={styles.text}>{food_name}</Text>
          <Text style={styles.price_text}>{price}</Text>
        </View>
      </View>
    </View>
  );
};

export default FlatList0;
