import {Image, SafeAreaView, ScrollView, View} from 'react-native';
import React from 'react';

import styles from './styles';
import {} from '../../components/index';
import {eat} from '../../assets/images/index';

const Screen3 = () => {
  return (
    <SafeAreaView>
      <View style={styles.top}></View>
      <ScrollView style={styles.scroll}>
        <View style={styles.screen}>
          <Image source={eat} style={styles.image} />
          <View style={styles.heart_view}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Screen3;
