import {
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from './styles';


const Login = props => {
  const {name, password, image} = props;

  return (
    <View style={styles.margin}>
      <View>
        <Text style={styles.email}>{name}</Text>
      </View>
      <View>
        <TextInput style={styles.box} secureTextEntry={password} />
        <TouchableOpacity>
          <Image source={image} style={styles.eyes} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
