import { Text, View,StyleSheet,Image,Alert,TouchableOpacity } from "react-native";
// import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import COLORS from '../app/consts/colors';
import {PrimaryButton} from '../app/consts/Button';
import {Link} from "expo-router";
import {SafeAreaView} from 'react-native-safe-area-context';
import tw from 'twrnc';



import React from "react";

export default function getStated({})  {
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
        <PrimaryButton onPress={() => alert('home')}
          title="Get Started"
        />

      {/* <TouchableOpacity style={style.btnContainer} onPress={() => alert('Button pressed!')}>
        <Text> Get Started </Text>
      </TouchableOpacity> */}

      <TouchableOpacity style={style.loginButton}>
          <Link href="/Login">Get Started</Link>
      </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  loginButton: {
    width: 125,
    height: 40,
    backgroundColor: '#ffa500',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginVertical: 20,
},
loginButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
},
  btnContainer: {
    backgroundColor: COLORS.primary,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
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