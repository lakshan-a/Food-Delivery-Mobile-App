import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import getStated from './getStated';
import LoginScreen from '@/app/LoginScreens';
import deliveryAnimation from '@/app/delivaryAnimation';
import delivery from '@/app/delivary';
import { Stack } from 'expo-router';
import home from './(tabs)/home';



const stack = createNativeStackNavigator()


export default function index() {
  return (
    <NavigationContainer independent={true}>
    <stack.Navigator initialRouteName="Details">
    {/* <stack.Screen name='home' component={home}   options={{
        headerShown: false,
      }}/> */}
      <stack.Screen name='getStated' component={getStated}   options={{
            headerShown: false,
          }}/>  
      {/* <stack.Screen name='LoginScreen' component={LoginScreen}   options={{
        headerShown: false,
      }}/>   */}
      {/* <stack.Screen name='SingUpScreen' component={SingUpScreen}   options={{
        headerShown: false,
      }}/>    */}
      {/* <stack.Screen name='deliveryAnimation' component={deliveryAnimation}   options={{
        headerShown: false,
      }}/>
       <stack.Screen name='delivery' component={delivery}   options={{
        headerShown: false,
      }}/> */}
    </stack.Navigator>

    
   </NavigationContainer>
   
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },

})



