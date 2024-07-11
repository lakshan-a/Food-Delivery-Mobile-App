import React, { useState } from 'react'
import { Text, View,StyleSheet,Image,Button,Alert,TouchableOpacity,FlatList,TextInput } from "react-native";
import COLORS from './consts/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import tw from 'twrnc';
// import {MapPinIcon} from 'react-native-heroicons/solid';
// import {BellIcon,MagnifyingGlassIcon} from 'react-native-heroicons/outline'
import{categories, coffeeItems} from './consts/coffeeItems'
import Carousel from 'react-native-snap-carousel';
// import {coffeeCard} from '../app/coffeeCard';
import home2 from '../app/home2'



export default function index() {

  const  [activeCategory, setActiveCategory] = useState(1);

  return (
    <View style={tw`flex-1 relative bg-wite`}>
      <StatusBar/>
        <Image source={require('../assets/images/home/home1.png')}
          // style={tw`w-full absolute-top-5 opacity-10`}
          style={{width:600, height:160, position:'absolute', borderBottomLeftRadius:50,borderBottomRightRadius:50}}
        />
      <SafeAreaView style={tw`flex-1 mt-4`}>

          <View style={tw`px-4 flex-row justify-between item-center`}>
            <Image source={require('../assets/images/profile-user.png')}
              style={tw`h-9 w-9 rounded-full`}
            />
            <View style={tw`flex-row items-center space-x-2`}>
            <Image source={require('../assets/images/pin.png')}
              style={tw`h-7 w-6 rounded-full`}
            />
              {/* <MapPinIcon size="25" color={COLORS.primary}/> */}
              <Text style={tw`text-base font-semibold`}>Sri Lanka,Mtara</Text>
            </View>
              <Image source={require('../assets/images/notification.png')}
                style={tw`h-6 w-6 rounded-full`}
              />
            {/* <BellIcon size="27" color="black"/> */}
          </View>

        <View style={tw`mx-5 mt-8`}>
          <View style={tw`flex-row justify-center item-center rounded-full p-1 bg-[#e6e6e6]`}>  
            <TextInput placeholder='Search' style={tw`p-4 flex-1 font-sembibold text-gray-700`}/>
            <TouchableOpacity style={{backgroundColor:COLORS.primary,borderRadius:30, width:50, height:50,left:-2}}>
              {/* <MagnifyingGlassIcon size="25" strokeWidth={2} color="white"/> */}
              <Image source={require('../assets/images/magnifying-glass.png')}
                // style={tw`h-7 w-6 rounded-full`}
                style={{width:25,height:25, bottom:-12,right:-14}}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={tw`px-5 mt-7`}>
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
                  style={tw`p-2 px-5 rounded-full mr-2 shadow isActive? bg-[#e6e6e6]`}
                  // style={{padding:10}}
                  >
                  <Text style={tw`font-semibold + activeCategory` }>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              )
            }}
            />
        </View>

        <View style={tw`flex-row `}>

        <View style={{
          borderRadius:40,
          backgroundColor:COLORS.primary,
          height:280,
          width:200,
          left:30,
          top:80
          }}>
            <View style={{
                // shadowColor:'black',
                // // shadowRadius:10,
                // shadowOffset:{width:0, height:40},
                // shadowOpacity:0.5,
                // flex:10,
                // justifyContent:'center',
                // marginTop:20            
            }}>
            {/* style={tw`flex-row justify-center mt-14`} */}
                {/* <Image source={product.image} style={tw`h-40 w-40`}></Image> */}
                <Image source={require('../assets/images/home/home3.png')} style={{width:150, height:150, left:26,bottom:60}}/>
            </View>

          <View style={{top:-30,left:10}}>
            <Text style={tw`text-3xl text-white font-semibold z-10`}>
            </Text>
            <View style={tw`flex-row items-center rounded-3xl p-1 px-2 space-x-1 w-16`}>
              <Image source={require('../assets/images/star.png')}
                  style={tw`h-5 w-5`}
              />
              <Text style={tw`text-base font-semibold text-white`}></Text>
            </View>
            <View style={tw`flex-row space-x-1 z-10 mb-6`}>
              <Text style={tw`text-base text-white font-semibold opacity-60`}>
                volume
              </Text>
              <Text style={tw`text-base text-white font-semibold `}>
              </Text>
            </View>

            <View style={tw`flex-row justify-between item-center`}>
              <Text style={tw`text-white font-bold text-lg`}>Rs.</Text>
              <TouchableOpacity
                // onPress={()=> navigation.navigate('Product',{...product})}
                // style={tw`p-4 bg-wite rounded-full`}
                // style={{backgroundColor:COLORS.white, rowGap:12}}
                style={{height:40, width:40, position:'absolute',right:30,backgroundColor:COLORS.white,borderRadius:20,top:20 }}

              >
                <Image source={require('../assets/images/plus.png')}
                    // style={tw`h-5 w-5`}
                    style={{left:8,top:8}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{
          borderRadius:40,
          backgroundColor:COLORS.primary,
          height:280,
          width:200,
          left:60,
          top:80
          }}>
            <View style={{           
            }}>
            {/* style={tw`flex-row justify-center mt-14`} */}
                {/* <Image source={product.image} style={tw`h-40 w-40`}></Image> */}
                <Image source={require('../assets/images/home/home2.png')} style={{width:150, height:150, left:26,bottom:60}}/>
            </View>

          <View style={{top:-30,left:10}}>
            <Text style={tw`text-3xl text-white font-semibold z-10`}>
            </Text>
            <View style={tw`flex-row items-center rounded-3xl p-1 px-2 space-x-1 w-16`}>
              <Image source={require('../assets/images/star.png')}
                  style={tw`h-5 w-5`}
              />
              <Text style={tw`text-base font-semibold text-white`}></Text>
            </View>
            <View style={tw`flex-row space-x-1 z-10 mb-6`}>
              <Text style={tw`text-base text-white font-semibold opacity-60`}>
                volume
              </Text>
              <Text style={tw`text-base text-white font-semibold `}>
              </Text>
            </View>

            <View style={tw`flex-row justify-between item-center`}>
              <Text style={tw`text-white font-bold text-lg`}>Rs.</Text>
              <TouchableOpacity
                // onPress={()=> navigation.navigate('Product',{...product})}
                // style={tw`p-4 bg-wite rounded-full`}
                // style={{backgroundColor:COLORS.white, rowGap:12}}
                style={{height:40, width:40, position:'absolute',right:30,backgroundColor:COLORS.white,borderRadius:20,top:20 }}

              >
                <Image source={require('../assets/images/plus.png')}
                    // style={tw`h-5 w-5`}
                    style={{left:8,top:8}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        </View>



        {/* <View>
          <coffeeCard/>
        </View> */}

        {/* <View style={tw`mt-16 py2`}>
          <Carousel
          containerCustomStyle={{overflow:'visible'}}
          data={coffeeItems}
          loop={true}
          // renderItem={({item})=> <coffeeCard item={item}/>}
          firstItem={1}
          inactiveSlideOpacity={0.75}
          inactiveSlideScale={0.77}
          sliderWidth={400}
          itemWidth={260}
          slideStyle={{display:'flex',alignItems:'center'}}
          />
        </View> */}

      </SafeAreaView>
    </View>
  )
}

const style = StyleSheet.create({
ManeImage:{
  height:220
}
});