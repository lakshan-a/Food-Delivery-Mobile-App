import { Text, View,StyleSheet,Image,Button,Alert,TouchableOpacity,FlatList,TextInput } from "react-native";
import React, { useState } from "react";
import tw from 'twrnc';
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import COLORS from "./consts/colors";
import {Link} from "expo-router";




export default function index(){
  // props
  const navigation = useNavigation();
  // const item = props.route.params;
  const [size,setSize] = useState('small');

  return(
    <View style={tw`flex-1`}>
      <StatusBar style="light"/>
      <Image source={require('../assets/images/home/home1.png')}
        style={{height:200,borderBottomLeftRadius:50,borderBottomRightRadius:50,width:500,position:'absolute'}}
      />
      <SafeAreaView style={tw`spae-y-4`}>
        <View style={tw`mx-4 flex-row justify-between items-center`}>
          <TouchableOpacity onPress={()=> navigation.goBack()} style={{top:10}}>
            <Image source={require('../assets/images/arrow-right.png')}/>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=> navigation.goBack()} style={{top:10}}>
            <Image source={require('../assets/images/love.png')}/>
          </TouchableOpacity>
        </View>

        <View style={tw`flex-row justify-center `}
          // style={{shadowColor: COLORS.dark,
          //   shadowRadius:30,
          //   shadowOffset:{width:0,height:30},
          //   shadowOpacity:0.9
          // }}
        >
          {/* <Image source={item.image} style={tw`h-60 w-60`}/> */}
          <Image source={require('../assets/images/pizzza.png')} style={tw`h-60 w-60`}/>
        </View>
        <View style={{backgroundColor:COLORS.primary,left:10,width:60,bottom:40,borderRadius:30}}>
            <View style={tw`flex-row mx-4 items-center rounded-3xl p-1 px-2 space-x-1 w-16 opacity-90 ml-0`}>
                <Image source={require('../assets/images/star.png')}
                    style={{width:15, height:15}}
                />
                {/* <Text style={tw`text-base font-semibold text-white`}>{product.stars}</Text> */}
                <Text style={tw`text-base font-semibold text-white ml-1`}>4.3</Text>
            </View>
        </View>
        
        <View style={tw`mx-4 flex-row justify-between item-center mt--7`}>
            <Text 
            // style={{color:COLORS.dark}}
            style={tw`text-lg font-semibold `}>
              Pizza
            </Text>
            <Text 
            // style={{color:COLORS.dark}}
            style={tw`text-lg font-semibold`}>
              Rs.1200.00
            </Text>
        </View>

        <View style={tw`mx-4 space-y-2 mt-5`}>
          <Text style={tw`text-lg font-bold`}>Pizza size</Text>
          <View style={tw`flex-row justfy-between mt-2`}>
            <TouchableOpacity 
            onPress={()=> setSize('small')}
            //   style={tw`p-3 px-8 round-full`}
              style={{borderRadius:30,width:70,height:30, backgroundColor:size=='small'? COLORS.light: 'black'}}
            >
                {/* className={size=='small'? 'text-white': 'text-gray-700'} */}
              <Text style={{color:COLORS.primary,left:20,top:4}}>small</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=> setSize('medium') }
              // style={tw`p-3 px-8 round-full`}
              style={{borderRadius:30,width:80,height:30,left:10,backgroundColor:size=='medium'? COLORS.light: 'black'}}
            >
              <Text style={{color:COLORS.primary,left:14,top:4}}>medium</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=> setSize('large')}
              // style={tw`p-3 px-8 round-full`}
              style={{borderRadius:30,width:70,height:30,left:20,backgroundColor:size=='large'? COLORS.light: 'black'}}
            >
              <Text style={{color:COLORS.primary,left:20,top:4}}>large</Text>
            </TouchableOpacity>

          </View>
        </View>

        <View style={tw`mx-4 space-y-2 h-28 mt-8`}>
          <Text style={tw`text-lg font-bold`}>About</Text>
          <Text style={tw`text-gray-600`}>
            {/* {item.desc} */}
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit laboriosam eius autem error eligendi iste, sequi itaque maxime sed iusto amet, quaerat ab praesentium culpa officia exercitationem voluptatem. Natus, mollitia.
          </Text>
        </View>

        <View style={tw`flex-row justify-between items-center mx-4 mb-2 mt-5 mb-5`}>
          <View style={tw`flex-row items-center space-x-1`}>
            <Text style={tw`text-base text-gray-700 font-semibold opactiy-60`}>
              Volume :
            </Text>
            <Text style={tw`text-base text-black font-semibold`}>
              120
            </Text>
          </View>

          <View style={tw`flex-row items-center space-x-4 border-gray-500 border rounde-full p-1 px-2 rounded-full`}>
            <TouchableOpacity style={{width:40}}>
                <Image  source={require('../assets/images/minus-sign.png')} style={{width:20 ,height:8}}/>
            </TouchableOpacity>
            <Text style={tw`font-extrabold text-lg mr-3`}>2</Text>
            <TouchableOpacity>
                <Image  source={require('../assets/images/plus(1).png')} style={{width:20 ,height:20,left:3}}/>
            </TouchableOpacity>
          </View>
        </View>

        <View style={tw`flex-row justify-between items-center mx-4 mt-50`}>
          <TouchableOpacity style={tw`p-4 rounded-full border border-gray-400`}>
              <Image  source={require('../assets/images/shop.png')}/>
          </TouchableOpacity>
          <TouchableOpacity style={tw`p-5 rounded-full flex-1 ml-3 bg-[#F9813A]`}>
          <Link href="/cart" style={{textAlign:'center'}}> 
            <Text style={tw`text-center text-base font-semibold text-white`}>Buy now</Text>
          </Link>
          </TouchableOpacity>
        </View>
        


      </SafeAreaView>
    </View>
  )
}