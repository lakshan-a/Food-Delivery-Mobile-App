import React, { useState } from 'react'
import { Text, View,StyleSheet,Image,Button,Alert,TouchableOpacity,FlatList,TextInput } from "react-native";
import COLORS from '../app/consts/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import tw from 'twrnc';
// import {MapPinIcon} from 'react-native-heroicons/solid';
// import {BellIcon,MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import{categories, coffeeItems} from '../app/consts/index'
import Carousel from 'react-native-snap-carousel';


export default function index() {

  const  [activeCategory, setActiveCategory] = useState(1);

  return (
    <View style={tw`flex-1 relative bg-wite`}>
      <StatusBar/>
        {/* <Image source={require('../assets/images/Frame40.png')}
          style={tw`w-full absolute-top-5 opacity-10`}
          // style={{style.ManeImage}}
        /> */}
      <SafeAreaView style={tw`flex-1`}>

          <View style={tw`px-4 flex-row justify-between item-center`}>
            <Image source={require('../assets/images/profile-user.png')}
              style={tw`h-9 w-9 rounded-full`}
            />
            <View style={tw`flex-row items-center space-x-2`}>
            <Image source={require('../assets/images/pin.png')}
              style={tw`h-6 w-6 rounded-full`}
            />
              {/* <MapPinIcon size="25" color={COLORS.primary}/> */}
              <Text style={tw`text-base font-semibold`}>Sri Lanka,Mtara</Text>
            </View>
              <Image source={require('../assets/images/notification.png')}
                style={tw`h-6 w-6 rounded-full`}
              />
            {/* <BellIcon size="27" color="black"/> */}
          </View>

        <View style={tw`mx-5 mt-14`}>
          <View style={tw`flex-row justify-center item-center rounded-full p-1 bg-[#e6e6e6]`}>  
            <TextInput placeholder='Search' style={tw`p-4 flex-1 font-sembibold text-gray-700`}/>
            <TouchableOpacity style={tw`rounded-full p-2`}>
              {/* <MagnifyingGlassIcon size="25" strokeWidth={2} color="white"/> */}
              <Image source={require('../assets/images/magnifying-glass.png')}
                style={tw`h-6 w-6 rounded-full`}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={tw`px-5 mt-6`}>
          <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={item=> item.id}
            style={tw`overflow-visible`}
            renderItem={({item})=>{
              let isActive = item.id==activeCategory;
              let activeTextClass = isActive? 'text-white': 'text-gray-700';
              return(
                <TouchableOpacity 
                  onPress={()=> setActiveCategory(item.id)}
                  style={tw`p-4 px-5 rounded-full mr-2 shadow isActive? COLORS.primary:bg-[#e6e6e6]`}>
                  <Text style={tw`font-semibold + activeCategory` }>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              )
            }}
            />
        </View>

        <View style={tw`mt-16 py2`}>
          <Carousel
            containerCustomSyle={{overflow:'visible'}}
            data={coffeeItems}
            renderItem={({item})=> <CoffeeCard}
          />
        </View>

      </SafeAreaView>
    </View>
  )
}

const style = StyleSheet.create({
ManeImage:{
  height:220
}
});