import {StyleSheet} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Menu, Screen3} from '../screens';
import {RouterNames} from '../config';
import Login1 from '../screens/login1/Login1';
const Stack = createNativeStackNavigator();

const RootStack = props => {
  return (
    <Stack.Navigator
      initialRouteName="Login1"
      screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={RouterNames.LOGIN}
        component={Login1}
        options={{headerShown: false}}
      />
      <Stack.Screen name={RouterNames.MENU} component={Menu} />
      <Stack.Screen name={RouterNames.SCREENS3} component={Screen3} />
    </Stack.Navigator>
  );
};

export default RootStack;
