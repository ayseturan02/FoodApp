import {Button, View} from 'react-native';
import React from 'react';



const Button1 = props => {
  const {navigation} = props;
  const handleNavigation = () => {
    navigation.navigate('Menu');
  };
  return(
    <View>
       <Button title="login" onPress={handleNavigation} />
    </View>
  );
};

export default Button1;
