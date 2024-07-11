import React from 'react'
import { Text, View,StyleSheet,Image,Button,Alert,TouchableOpacity,FlatList,TextInput } from "react-native";
import COLORS from './consts/colors';
import tw from 'twrnc';
import pizza from '../app/consts/pizza'
import { useNavigation } from '@react-navigation/native';
// import products from './consts/coffeeItems';

// const item = pizza[0]

const ProductListItem = ({product}) => {

  const navigation = useNavigation();

  return (
    <View style={{
        borderRadius:40,
        backgroundColor:COLORS.primary,
        height:350,
        width:200
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
        {/* <View style={tw`flex-row justify-center mt-14`}> */}
            <Image source={product.image} style={tw`h-40 w-40`}></Image>
        </View>

        <View style={tw`px-5 mt-5 space-y-3`}>
          <Text style={tw`text-3xl text-white font-semibold z-10`}>
            {product.name}
          </Text>
          <View style={tw`flex-row items-center rounded-3xl p-1 px-2 space-x-1 w-16`}>
            <Image source={require('../assets/images/star.png')}
                style={tw`h-5 w-5`}
            />
            <Text style={tw`text-base font-semibold text-white`}>{product.stars}</Text>
          </View>
          <View style={tw`flex-row space-x-1 z-10 mb-6`}>
            <Text style={tw`text-base text-white font-semibold opacity-60`}>
              volume
            </Text>
            <Text style={tw`text-base text-white font-semibold `}>
              {product.volume}
            </Text>
          </View>

          <View style={tw`flex-row justify-between item-center`}>
            <Text style={tw`text-white font-bold text-lg`}>Rs. {product.price}</Text>
            <TouchableOpacity
              // onPress={()=> navigation.navigate('Product',{...product})}
              style={tw`p-4 bg-wite rounded-full`}
            >
              <Image source={require('../assets/images/plus.png')}
                  style={tw`h-5 w-5`}
              />
            </TouchableOpacity>
          </View>
        </View>
    </View>
  )
}

export default function MenuScreen(){
    return(
      <View>
        <View style={tw`flex-row justify-center mt-14 ml-2 m-2`}>
          <ProductListItem product={pizza[0]}/>
          <ProductListItem product={pizza[1]}/>
      
        </View>
        <View style={tw`flex-row justify-center mt-14 ml-2 m-2`}>
        
          <ProductListItem product={pizza[2]}/>
          <ProductListItem product={pizza[3]}/>
        </View>
      </View>
      
    )
}