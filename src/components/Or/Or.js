import {Text, View} from 'react-native';
import React from 'react';
import {SosyalMedya} from '../../components/index';
import styles from './styles';

import {google, facebook, twitter} from '../../assets/icons/index';

const or = () => {
  return (
    <View>
      <View style={styles.pozition}>
        <View style={styles.line}></View>
        <View>
          <Text style={styles.or_style}>OR</Text>
        </View>
        <View style={styles.line}></View>
      </View>
      <View style={styles.sing_pozition}>
        <Text style={styles.sing_style}>Sing in using :</Text>
      </View>
      <View style={styles.icon_pozition}>
        <SosyalMedya icon_name={google} />
        <SosyalMedya icon_name={facebook} />
        <SosyalMedya icon_name={twitter} />
      </View>
    </View>
  );
};

export default or;
