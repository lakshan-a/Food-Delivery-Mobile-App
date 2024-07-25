import { View, Text,Image } from "react-native";
import React from "react";
import {Tabs} from 'expo-router'
import {Ionicons} from "@expo/vector-icons";
import Colors from "@/constants/Colors";
import { MaterialCommunityIcons } from '@expo/vector-icons'
// import { Icon } from "react-native-vector-icons/Icon";


export default function Layout(){
    return(
        <Tabs screenOptions={{
            tabBarStyle:{
                backgroundColor:Colors.bgColor,
                borderTopWidth:0,
                padding:0
            },
            tabBarShowLabel:false,
            tabBarActiveTintColor:Colors.primary,
            tabBarInactiveTintColor:'#999'
        }}>
            <Tabs.Screen name="home"  options={{tabBarIcon:({color}) => (
                <MaterialCommunityIcons name='home' size={28} color={color}/>
                
            )}}/>
            <Tabs.Screen name="offers"  options={{tabBarIcon:({color}) => (
                <MaterialCommunityIcons name='margin' size={28} color={color}/>
            )}}/>
            <Tabs.Screen name="search"  options={{tabBarIcon:({color}) => (
                <View style={{backgroundColor:Colors.primary,paddingHorizontal:16,paddingVertical:12,borderRadius:30,height:60,bottom:6,borderWidth:3,
                    borderColor:Colors.bgColor}}>
                    <Ionicons name='search' size={28} color={Colors.white}/>
                    {/* <Image source={require('../../assets/images')}/> */}
                </View>
                
            )}}/>
            <Tabs.Screen name="cart"  options={{tabBarIcon:({color}) => (
                <MaterialCommunityIcons name='cart' size={28} color={color}/>
            )}}/>

            <Tabs.Screen name="delivary"  options={{tabBarIcon:({color}) => (
                <MaterialCommunityIcons name='truck-fast' size={28} color={color}/>
            )}}/>

            

        </Tabs>
    )
}