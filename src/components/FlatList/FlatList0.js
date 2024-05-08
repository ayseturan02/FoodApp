import {StyleSheet, Text, View, Image, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {heart3} from '../../assets/icons/index';
import { useNavigation } from '@react-navigation/native';
import { RouterNames } from '../../config';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

const FlatList0 = props => {
  const {photo, food_name, price, children} = props;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
     onPress={()=>{navigation.navigate(RouterNames.SCREENS3)}}
    style={{height: winHeight * 0.245}}>
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
    </TouchableOpacity>
  );
};

export default FlatList0;
