import React from 'react'
import { Text, View,StyleSheet,Image,Button,Alert,TouchableOpacity,FlatList,TextInput } from "react-native";
import COLORS from './consts/colors';
import tw from 'twrnc';
import coffeeCard from '../app/consts/index'

const item = coffeeCard[1];

export default function coffeeCard() {
  return (
    <View style={{
        borderRadius:40,
        backgroundColor:COLORS.primary,
        height:350,
        width:250,
        left:130,
        top:30
    }}>
        <View style={{
            // shadowColor:'black',
            // shadowRadius:30,
            // shadowOffset:{width:0, height:40},
            // shadowOpacity:0.8,
            // flex:10,
            // justifyContent:'center',
            // marginTop:14            
        }}>
            <Image  source={require('../assets/images/pizzza.png')} style={tw`h-40 w-40 ml-10 mt-9`}></Image>
        </View>

        <View style={tw`px-5 mt-5 space-y-3`}>
          <Text style={tw`text-3xl text-white font-semibold z-10`}>
            
          </Text>
          <View style={tw`flex-row items-center rounded-3xl p-1 px-2 space-x-1 w-16`}>
            <Image source={require('../assets/images/star.png')}
                style={tw`h-5 w-5`}
            />
            <Text style={tw`text-base font-semibold text-white ml-2`}>4.3</Text>
          </View>
          <View style={tw`flex-row space-x-1 z-10 mb-6`}>
            <Text style={tw`text-base text-white font-semibold opacity-60`}>
              volume:
            </Text>
            <Text style={tw`text-base text-white font-semibold ml-2 `}>
            small
            </Text>
          </View>

          <View style={tw`flex-row justify-between item-center`}>
            <Text style={tw`text-white font-bold text-lg`}>Rs. {item.price}</Text>
            <TouchableOpacity style={tw`p-3 bg-white rounded-full `}>
              <Image source={require('../assets/images/plus.png')}
                  style={tw`h-5 w-5`}
              />
            </TouchableOpacity>
          </View>
        </View>
    </View>
  )
}
