import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';

import styles from './styles';
import {Bottom3, Explanation, FlatList2} from '../../components/index';
import {eat} from '../../assets/images/index';
import {cart1} from '../../assets/icons/index';

const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

const Screen3 = () => {
  return (
    <SafeAreaView>
      <View style={styles.top}></View>
      <ScrollView style={styles.scroll}>
        <View style={styles.screen}>
          <Explanation
            eat={eat}
            eat_name={'Jollof Rice'}
            price={'N1,000'}
            starPoint={5}
          />
          <View style={styles.line}></View>
          <View>
            <View style={{padding: winWidth * 0.02}}>
              <Text style={styles.food_name}>Recommended sides</Text>
            </View>
            <View style={{paddingTop: winWidth * 0.02}}>
              <FlatList2 />
            </View>
          </View>
          <View style={styles.line}></View>
        </View>
      </ScrollView>
      <Bottom3
        price={'Total: N2,000'}
        cart_icon={cart1}
        cart_text={'Add to cart'}
      />
    </SafeAreaView>
  );
};

export default Screen3;
