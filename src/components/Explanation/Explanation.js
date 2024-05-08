import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import styles from './styles';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

import {heart2, star} from '../../assets/icons/index';

const Explanation = props => {
  const {eat, eat_name, price, starPoint} = props;
  return (
    <View>
      <View>
        <Image source={eat} style={styles.image} />
        <View style={styles.heart_view}>
          <Image source={heart2} style={styles.heart_size} />
        </View>
      </View>
      <View style={styles.text_area}>
        <View style={{flexDirection: 'row'}}>
          <View>
            <Text style={styles.food_name}>{eat_name}</Text>
          </View>
          <View style={styles.star_position}>
            <Image
              source={star}
              style={[
                styles.star_size,
                starPoint === 1 ||
                starPoint === 2 ||
                starPoint === 3 ||
                starPoint === 4 ||
                starPoint === 5
                  ? {}
                  : {tintColor: 'grey'},
              ]}
            />
            <Image
              source={star}
              style={[
                styles.star_size,
                starPoint === 2 ||
                starPoint === 3 ||
                starPoint === 4 ||
                starPoint === 5
                  ? {}
                  : {tintColor: 'grey'},
              ]}
            />
            <Image
              source={star}
              style={[
                styles.star_size,
                starPoint === 3 || starPoint === 4 || starPoint === 5
                  ? {}
                  : {tintColor: 'grey'},
              ]}
            />
            <Image
              source={star}
              style={[
                styles.star_size,
                starPoint === 4 || starPoint === 5 ? {} : {tintColor: 'grey'},
              ]}
            />
            <Image
              source={star}
              style={[
                styles.star_size,
                starPoint === 5 ? {} : {tintColor: 'grey'},
              ]}
            />
            <Text>(55 ratings)</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.food_name}>{price}</Text>
          <View style={{width: winWidth * 0.7, alignItems: 'flex-end'}}>
            <View style={styles.plus}>
              <View style={{alignItems: 'center', top: winWidth * 0.01}}>
                <Text style={styles.plus_text}>- 1 +</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{marginTop: winWidth * 0.05}}>
          <Text style={styles.des_style}>Description</Text>
          <View>
            <Text style={styles.text_des}>
              Rich and incredibly tasty rice dish, made with reduced tomatoes,
              bell peppers, chilli peppers, onions, herbs
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.text_des}>and seasoning .</Text>
              <Text style={[styles.text_des, {color: '#BE4E00'}]}>
                (Each serving contains 248 calories)
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Explanation;
