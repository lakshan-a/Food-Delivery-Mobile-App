// import { Text, View,StyleSheet,TextInput,Image,Button,Alert } from "react-native";
import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import COLORS from '../app/colors.js';


import React from "react";

export default function Index() {
  return (
    <View style={style.cartCard}>
    <Image  style={{height: 80, width: 80}} />
    <View
      style={{
        height: 100,
        marginLeft: 10,
        paddingVertical: 20,
        flex: 1,
      }}>
      <Text style={{fontWeight: 'bold', fontSize: 16}}></Text>
      <Text style={{fontSize: 13, color: COLORS.grey}}>
        
      </Text>
      {/* <Text style={{fontSize: 17, fontWeight: 'bold'}}>${item.price}</Text> */}
    </View>
    <View style={{marginRight: 20, alignItems: 'center'}}>
      <Text style={{fontWeight: 'bold', fontSize: 18}}>3</Text>
      <View style={style.actionBtn}>
        {/* <Icon name="remove" size={25} color={COLORS.white} />
        <Icon name="add" size={25} color={COLORS.white} /> */}
      </View>
    </View>
  </View>
  )
}

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
});