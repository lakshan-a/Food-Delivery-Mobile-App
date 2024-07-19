import React from 'react'
import { useNavigation } from '@react-navigation/native';
import tw from 'twrnc';
import { Ionicons } from "@expo/vector-icons";
import *as Progress from "react-native-progress"

import MapView, {Marker} from 'react-native-maps';


import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  SafeAreaView
} from "react-native";
import delivery from './delivaryAnimation';
import Colors from '@/constants/Colors';



// import  selectCart  from '../app/cart';

export default function deliverys() {
    
    const navigation = useNavigation();
    // const cart = useSelector(selectCart);

  return (
    <View style={tw`bg-[#F9813A] flex-1`}>
        <SafeAreaView style={tw`z-50 h-45`}>
            <View style={tw`flex-row justify-between items-center p-5`}>
            <TouchableOpacity onPress={() => {}} style={{
            backgroundColor:"rgba(255,255,255,0.5)",
            borderRadius:10,
            padding:4,
            marginRight:15,
            height:40, 
            marginTop:20,    
            position:'relative'

          }}>
            <View style={{backgroundColor:Colors.white,padding:6,borderRadius:10,}}>
              <Ionicons name='close' size={20} color={Colors.primary}/>
            </View>
          </TouchableOpacity>
                {/* <TouchableOpacity onPress={() => push('home')}>
                    <Ionicons name='close' color="white" size={30}/>
                </TouchableOpacity> */}
                    
                
                <Text style={tw`font-light text-white text-lg mt-5`}>Order Help</Text>
            </View>

            <View style={tw`bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md mb-5`}>
                <View style={tw`flex-row justify-between`}>
                    <View>
                        <Text style={tw`text-lg text-gray-400`}>Estimated Arrival</Text>
                        <Text style={tw`text-3xl font-bold`}>45-50 Minutes</Text>
                    </View>
                    <Image source={require('../../assets/images/delivary/delivaryBike.png')}
                        style={tw`h-20 w-20`}
                    />
                </View>
               <Progress.Bar size={30} color='#F9813A' indeterminate={true}/>
                <Text style={tw`mt-3 text-gray-500`}>
                    Your Order at {delivery.title} is being prepared
                </Text>
            </View>

        </SafeAreaView>

        <View style={styles.container}>
            <MapView style={styles.map}/>
        </View>

            {/* <MapView>
                
            </MapView> */}
     
        <SafeAreaView style={tw`bg-white flex-row items-center space-x-5 h-20`}>
            <Image 
                source={require('../../assets/images/delivary/delivaryBicycle.png')}
                style={tw`h-12 w-12 bg-gray-300 p-4 rounded-full ml-5`}
            /> 

            <View style={tw`flex-1 ml-3`}>
                <Text style={tw`text-lg`}>Sonny Sangha</Text>
                <Text style={tw`text-gray-400`}>Your Rider</Text>
            </View>
            <Text style={tw`text-[#F9813A] text-lg mr-5 font-bold`}> call</Text>
        </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
})


