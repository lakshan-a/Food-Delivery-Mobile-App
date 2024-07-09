import React from 'react'
import { Text, View,StyleSheet,Image,Button,Alert,TouchableOpacity,FlatList,TextInput } from "react-native";
import COLORS from './consts/colors';
import tw from 'twrnc';


export default function coffeeCard({item}) {
  return (
    <View style={{
        borderRadius:40,
        backgroundColor:COLORS.primary,
        height:350,
        width:250
    }}>
        <View style={{
            shadowColor:'black',
            shadowRadius:30,
            shadowOffset:{width:0, height:40},
            shadowOpacity:0.8,
            flex:10,
            justifyContent:'center',
            marginTop:14            
        }}>
            <Image source={item.image} style={tw`h-40 w-40`}></Image>
        </View>
        <View style={tw`px-5 mt-5 space-y-3`}>
          <Text style={tw`text-3xl text-white font-semibold z-10`}>
            {item.name}
          </Text>
          <View style={tw`flex-row items-center rounded-3xl p-1 px-2 space-x-1 w-16`}>
            <Image source={require('../assets/images/star.png')}
                style={tw`h-5 w-5`}
            />
            <Text style={tw`text-base font-semibold text-white`}>{item.stars}</Text>
          </View>
        </View>
    </View>
  )
}
