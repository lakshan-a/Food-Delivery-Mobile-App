import React, { useState } from 'react'
import { Text, View,StyleSheet,Image,Button,Alert,TouchableOpacity,FlatList,TextInput } from "react-native";
import COLORS from './consts/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import tw from 'twrnc';
import { Ionicons } from "@expo/vector-icons";
import{categories, coffeeItems} from './consts/coffeeItems'
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import {Link} from "expo-router";







export default function index() {

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

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

        <View style={tw`mx-5 mt-0`}>
          <View style={tw`mt-5 flex-row justify-center item-center rounded-full p-1 bg-[#e6e6e6]`}>  
            <TextInput placeholder='Search' style={tw`ml-5 flex-1 font-sembibold text-gray-700`}/>
            <TouchableOpacity style={{backgroundColor:COLORS.primary,borderRadius:30, width:50, height:50,left:-2}}>
              {/* <MagnifyingGlassIcon size="25" strokeWidth={2} color="white"/> */}
              <Image source={require('../assets/images/magnifying-glass.png')}
                // style={tw`h-7 w-6 rounded-full`}
                style={{width:25,height:25, top:10,right:-14}}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={tw`px-5 mt-3`}>
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
          left:15,
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

          <View style={{top:-70,left:10}}>
            <Text style={tw`text-3xl text-white font-semibold z-10`}>
            </Text>
            <View style={tw`flex-row items-center rounded-3xl p-1 px-2 space-x-1 w-16`}>
              <Image source={require('../assets/images/star.png')}
                  style={tw`h-5 w-5`}
              />
              <Text style={tw`text-base font-semibold text-white`}>4.3</Text>
            </View>
            <View style={tw`flex-row space-x-1 z-10 mb-6`}>
              <Text style={tw`text-base text-white font-semibold opacity-60`}>
                volume :
              </Text>
              <Text style={tw`text-base text-white font-semibold `}>
                small
              </Text>
            </View>

            <View style={tw`flex-row justify-between item-center`}>
              <Text style={tw`text-white font-bold text-lg`}>Rs.1500.00</Text>
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
          left:35,
          top:80
          }}>
            <View style={{           
            }}>
            {/* style={tw`flex-row justify-center mt-14`} */}
                {/* <Image source={product.image} style={tw`h-40 w-40`}></Image> */}
                <Image source={require('../assets/images/home/home2.png')} style={{width:150, height:150, left:26,bottom:60}}/>
            </View>

          <View style={{top:-70,left:10}}>
            <Text style={tw`text-3xl text-white font-semibold z-10`}>
            </Text>
            <View style={tw`flex-row items-center rounded-3xl p-1 px-2 space-x-1 w-16`}>
              <Image source={require('../assets/images/star.png')}
                  style={tw`h-5 w-5`}
              />
              <Text style={tw`text-base font-semibold text-white`}>4.5</Text>
            </View>
            <View style={tw`flex-row space-x-1 z-10 mb-6`}>
              <Text style={tw`text-base text-white font-semibold opacity-60`}>
                volume :
              </Text>
              <Text style={tw`text-base text-white font-semibold `}>
              small
              </Text>
            </View>

            <View style={tw`flex-row justify-between item-center`}>
              <Text style={tw`text-white font-bold text-lg`}>Rs.1200.00</Text>
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

        
          <View style={styles.container}>
            <View style={styles.navBar}>
              <Ionicons
                name="home-outline"
                size={24}
                color="white"
                onPress={() => navigation.navigate("Home")}
              />
              <TouchableOpacity>
                <Link href="/cart">
                <Ionicons
                  name="basket-outline"
                  size={24}
                  color="white"
                  onPress={() => navigation.navigate("Notification")}
                /></Link>
              </TouchableOpacity>

              <Ionicons
                name="person-outline"
                size={24}
                color="white"
                onPress={() => navigation.navigate("Profile")}
              />
            </View>
          </View>
        

      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  navBar: {
    backgroundColor:COLORS.primary,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#f0f0f0",
  },
 
});