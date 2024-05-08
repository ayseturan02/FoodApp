import {Text, View, SafeAreaView, ScrollView, Dimensions} from 'react-native';
import React from 'react';
import styles from './styles';
import {Bottom, FlatList1} from '../../components/index';
import {person, home, cutlery, heart, chat} from '../../assets/icons/index';
const winWidth = Dimensions.get('window').width;
const winHeight = Dimensions.get('window').height;

const Menu = () => {
  return (
    <SafeAreaView>
      <View>
        <View>
          <View style={styles.pozition}>
            <Text style={styles.text_size}>Our Menu</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            <Text style={[styles.text_row, {color: '#C14C18'}]}>Meals</Text>
            <Text style={styles.text_row}> Sides</Text>
            <Text style={styles.text_row}>Snacks</Text>
          </View>
          <View style={styles.line_pozition}>
            <View style={styles.line}></View>
          </View>
        </View>
        <ScrollView
          style={{
            height: winHeight * 0.73,
          }}>
          <FlatList1 />
        </ScrollView>

        <View
          style={styles.bottom_position}>
          <Bottom icon_name={chat} icon_text={'Live Chat'} />
          <Bottom icon_name={person} icon_text={'Profile'} />
          <Bottom icon_name={home} icon_text={'Home'} />
          <Bottom
            icon_name={cutlery}
            icon_text={'Menu'}
            style={{color: '#C14C18'}}
          />
          <Bottom icon_name={heart} icon_text={'Favorites'} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Menu;
