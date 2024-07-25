import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Stack,useLocalSearchParams, useNavigation } from 'expo-router'
import { ListingType }  from '@/types/listingType'
import listingData from '@/data/destinations.json';
import { Feather, FontAwesome5, Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { useRoute } from '@react-navigation/native';
import {Link} from "expo-router";
import tw from 'twrnc';



const ListingDetails = () => {

  const {id} = useLocalSearchParams();
  const listing:ListingType = (listingData as any[]).find(
    (item) => item.id === id
  );

  const router = useRoute();
  const [size,setSize] = useState('small');
  const navigation = useNavigation();



  return (
   <>
   <View>
      <Image source={require('../../assets/images/home/home6.jpg')} style={styles.mainImg}/>
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <TouchableOpacity onPress={()=> navigation.goBack()} style={{
            backgroundColor:"rgba(255,127,54,0.5)",
            borderRadius:10,
            padding:4,
            marginLeft:15,
            marginTop:-250,
            height:41,    
            position:'relative'

          }}>
            <View style={{backgroundColor:Colors.primary,padding:6,borderRadius:10, }}>
              <Feather name='arrow-left' size={20} color={Colors.white}/>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={{
            backgroundColor:"rgba(255,127,54,0.5)",
            borderRadius:10,
            padding:4,
            marginRight:15,
            height:40, 
            marginTop:-255,    
            position:'relative'

          }}>
            <View style={{backgroundColor:Colors.primary,padding:6,borderRadius:10,}}>
              <Ionicons name='heart-outline' size={20} color={Colors.white}/>
            </View>
          </TouchableOpacity>
      </View>
   </View>
   
    <View style={styles.container}>
      <Image source={{uri:listing.image}} style={styles.image}/>
      <View style={styles.starIcon}>
          <FontAwesome5 name="star" size={18} color={Colors.white} style={styles.voit}/>
          <Text style={styles.woat}>{listing.rating}</Text>
      </View>
      <View style={styles.ContentWrapper}>
        <Text style={styles.listingName}>{listing.name}</Text>
        <Text style={styles.listngPriceTxt}>Rs.{listing.price}</Text>
      </View>

      <View style={{left:27}}>
        <Text style={tw`text-lg font-bold ml--1`}>Size</Text>
        <View style={tw`flex-row justfy-between mt-2`}>
          <TouchableOpacity 
          onPress={()=> setSize('small')}
            style={{borderRadius:30,width:70,height:30, backgroundColor:size=='small'? Colors.light: 'black'}}
          >
            <Text style={{color:Colors.primary,left:20,top:4}}>small</Text>
          </TouchableOpacity>
          <TouchableOpacity 
              onPress={()=> setSize('medium') }
                style={{borderRadius:30,width:80,height:30,left:10,backgroundColor:size=='medium'? Colors.light: 'black'}}
              >
              <Text style={{color:Colors.primary,left:14,top:4}}>medium</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            onPress={()=> setSize('large')}
              style={{borderRadius:30,width:70,height:30,left:20,backgroundColor:size=='large'? Colors.light: 'black'}}
            >
            <Text style={{color:Colors.primary,left:20,top:4}}>large</Text>
          </TouchableOpacity>
        </View>
        <View style={{top:10}}>
          <Text style={styles.aboutTxt}>About</Text>
          <Text style={styles.aboutDes}>{listing.description}</Text>
        </View>

        <View style={{flexDirection:'row',justifyContent:'space-between',top:35}}>
          <TouchableOpacity style={styles.btnBuy}>
            <Link href="/cart" style={{textAlign:'center',top:12,color:Colors.white,fontWeight: 'bold'}}> 
              <Text >Buy now</Text>
            </Link>
          </TouchableOpacity>

          <View style={styles.itemQty}>
            <View style={tw`flex-row items-center space-x-4 border-gray-500 border rounde-5 p-2 px-6 rounded-2`}>
              <TouchableOpacity style={{width:40}}>
                <FontAwesome5 name="minus" size={18} color={Colors.black} />
              </TouchableOpacity>
              <Text style={styles.itemQtyTxt}>2</Text>
              <TouchableOpacity>
                <FontAwesome5 name="plus" size={18} color={Colors.black} />
              </TouchableOpacity>
          </View>
        </View>
        
        </View>

        

        </View>
    </View>
   </>
  )
}

export default ListingDetails

const styles = StyleSheet.create({
  container:{
    backgroundColor:Colors.white,
    flex:1,
  },
  mainImg:{
    width:360, 
    height:270, 
    borderBottomLeftRadius:50,
    borderBottomRightRadius:50,
    right:0,
    top:1,
    // position:'absolute'
  },
  image:{
    height:250,
    width:250,
    marginTop:-160,
    borderRadius:140,
    marginLeft:55
  },
  starIcon:{
    flexDirection: 'row',
    backgroundColor:Colors.primary,  
    left:20,
    width:80,
    height:30,
    borderRadius:30
  },
  voit:{
    left:10,
    width:20,
    height:20,
    top:4
  },
  woat:{
    left:20,
    fontWeight: 'bold',
    color:Colors.white,
    fontSize: 18,
    top:2
  },
  ContentWrapper:{
    padding:10,
    flexDirection:'row',
    justifyContent:'space-between'
  },
  listingName:{
    fontSize:22,  
    fontWeight:'700',
    color:Colors.black,
    letterSpacing:0.5,
    left:10
  },
  listngPriceTxt:{
    fontSize:18,  
    fontWeight:'700',
    color:Colors.black,
    letterSpacing:0.5,
    top:2,
    right:10
  },
  aboutTxt:{
    fontSize:18,
    fontWeight:'700',
  },
  aboutDes:{
    color:Colors.grey,
    top:3,
    left:15,
    width:300
  },
  btnBuy:{
    backgroundColor:Colors.primary,
    width:180,
    height:44,
    borderRadius:10,
    textAlign:'center'
  },
  itemQty:{
    right:45,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  itemQtyTxt:{
    fontSize:18,
    fontWeight:'700',
    right:10,
  },

})
