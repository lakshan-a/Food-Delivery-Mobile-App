import { Text, View,StyleSheet,Image,Alert,TouchableOpacity } from "react-native";
// import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import COLORS from '@/constants/Colors'
import {Link, router} from "expo-router";
import {SafeAreaView} from 'react-native-safe-area-context';
import tw from 'twrnc';
import React from "react";
import { Button } from "react-native-elements/dist/buttons/Button";
import Colors from "@/constants/Colors";

export default function getStated({})  {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: Colors.white}}>
      <View style={{height: 400}}>
        <Image
          style={{
            width: '100%',
            resizeMode: 'contain',
            bottom: 100,
          }}
          source={require('../assets/images/Frame40.png')}
        />
      </View>
      <View style={style.textContainer}>
        <View>
          <Text style={{ marginTop: 40, fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>
            Delicious Food
          </Text>
          <Text
            style={{
              marginBottom: 5,
              fontSize: 15,
              textAlign: 'center',
              color: Colors.grey,
            }}>
            We help you to find best and delicious food
          </Text>
        </View>
        <View style={style.indicatorContainer}>
          <View style={style.currentIndicator} />
          <View style={style.indicator} />
          <View style={style.indicator} />
        </View>
        {/* <PrimaryButton onPress={() => alert('home')}
          title="Get Started"
        /> */}

      {/* <TouchableOpacity style={style.btnContainer} onPress={() => alert('Button pressed!')}>
        <Text> Get Started </Text>
      </TouchableOpacity> */}

        <TouchableOpacity style={style.btnContainer}>
            <Link href="/LoginScreens" style={style.textBtn}>Get Started</Link>
        </TouchableOpacity>

      {/* <Button 
        onPress={()=>router.push('/LoginScreens')}
        title='Get Started'
        style={style.btnContainer}
      ></Button> */}

      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  btnContainer: {
    backgroundColor: Colors.primary,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    top:30
  },
  textBtn:{
    color:Colors.white,
    fontSize:15,
    fontWeight: 'bold',
  },
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
    backgroundColor: Colors.primary,
    marginHorizontal: 5,
  },
  indicator: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: Colors.grey,
    marginHorizontal: 5,
  },
});