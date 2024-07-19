import React, { useEffect } from 'react'
import { View,SafeAreaView,Image} from 'react-native';
import *as Animatable from "react-native-animatable"
import *as Progress from "react-native-progress";
import tw from 'twrnc';
import { useNavigation } from "@react-navigation/native";
import Colors from '@/constants/Colors';



export default function delivery() {
  const navigation = useNavigation()

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('delivary');
    },4000);
  }, []);

  return (
      <SafeAreaView style={tw`bg-white flex-1 justify-center item-center`}>
        <Animatable.Image
          source={require('../assets/images/delivary/DeliveryServiceBoy.gif')}
          animation="slideInUp"
          iterationCount={1}
          style={{width:340,height:200,backgroundColor:Colors.white}}
        />

        <Animatable.Text
        animation='slideInUp'
        iterationCount={1}
        style={tw`text-lg my-10 font-bold text-center w-70 ml-9`}
        >
            Waiting for Restaurant to accept your order!
        </Animatable.Text>

        <Progress.Circle size={60} indeterminate={true} color='#F9813A' style={{left:140}}/>

    </SafeAreaView>
  )
}
