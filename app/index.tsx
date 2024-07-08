import { Text, View,StyleSheet,SafeAreaView,Image,Button,Alert } from "react-native";
// import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import COLORS from '../app/colors.js';
import {PrimaryButton} from '../app/Button.js';
import {FlatList} from 'react-native-gesture-handler';



import React from "react";

export default function Index() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={{height: 400}}>
        <Image
          style={{
            width: '100%',
            resizeMode: 'contain',
            top: -50,
          }}
          source={require('../assets/images/Frame40.png')}
        />
      </View>
      <View style={style.textContainer}>
        <View>
          <Text style={{ marginTop: 150, fontSize: 50, fontWeight: 'bold', textAlign: 'center'}}>
            Delicious Food
          </Text>
          <Text
            style={{
              marginBottom: 10,
              fontSize: 18,
              textAlign: 'center',
              color: COLORS.grey,
            }}>
            We help you to find best and delicious food
          </Text>
        </View>
        <View style={style.indicatorContainer}>
          <View style={style.currentIndicator} />
          <View style={style.indicator} />
          <View style={style.indicator} />
        </View>
        <PrimaryButton
          title="Get Started"
        />
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    paddingBottom: 80,
  },
  indicatorContainer: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentIndicator: {
    height: 12,
    width: 30,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    marginHorizontal: 5,
  },
  indicator: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: COLORS.grey,
    marginHorizontal: 5,
  },
});