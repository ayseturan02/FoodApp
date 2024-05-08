import {Dimensions, Image, View, Text, TouchableOpacity,SafeAreaView, Button} from 'react-native';
import React from 'react';
import styles from './styles';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;
import {visible} from '../../assets/icons/index';
import {sol} from '../../assets/images/index';
import {Login, Box, Or, Button1} from '../../components';
import { useNavigation } from '@react-navigation/native';
import { RouterNames } from '../../config';

const Login1 = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#F7F7F7',
        height: winHeight * 1,
        width: winWidth * 1,
      }}>
      <View>
        <Image
          source={sol}
          style={{height: winWidth * 0.45, width: winWidth * 0.45}}
        />
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: winWidth * 0.04,
        }}>
        <TouchableOpacity>
          <Text style={styles.sign_text}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[styles.sign_text, {opacity: 0.4}]}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line}></View>
      <View style={styles.input_pozition}>
        <Login name={'E-mail address'} password={false} image={visible} />
        <Login name={'Enter password'} password={true} image={visible} />
        <TouchableOpacity
          style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
          <Text style={{fontSize: winWidth * 0.03, fontWeight: '400'}}>
            Forgot password ?
          </Text>
        </TouchableOpacity>
        <Box />
        <Button1 title='Sign In' onPress={()=>navigation.navigate(RouterNames.MENU)} />
      {/*   <Button   title='login' onPress={()=>navigation.navigate('Menu')}/> */}
        <Or />
      </View>
    </SafeAreaView>
  );
};

export default Login1;
