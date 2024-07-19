import { View, Text, FlatList, ListRenderItem, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import {ListingType} from '@/types/listingType'
import Colors from '@/constants/Colors'
import { FontAwesome5, Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'

type Props ={
    listings:any[]
    category: string;
}

// const Listings = ({listings}: Props) => {
export default function Listings({listings,category}:Props) {

    const[loading,setLoding] =useState(false);
    useEffect(() => {
        console.log('updated');
        setLoding(true);

        setTimeout(() => {
            setLoding(false)
        },200);
    }, [category]);

    const renderItems:ListRenderItem<ListingType> = ({item}) => {
        return(
            <Link href={`/listing/${item.id}`} asChild>
                <TouchableOpacity>
                    <View style={styles.item}>
                        <Image source={{uri:item.image}} style={styles.imge}/>
                        <View style={styles.heart}>
                            <Ionicons name='heart-outline' size={20} color={Colors.white}/>
                        </View>
                        <Text style={styles.itemTxt}>{item.name}</Text>
                        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <FontAwesome5 name='star' size={18} color={Colors.primary}/>
                                <Text style={styles.itemRatingTxt}>{item.rating}</Text>
                            </View>
                            <Text style={styles.itemPriceTxt}>Rs.{item.price}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </Link>
        );
    }

  return (
    <View>
      <FlatList 
        data={loading ? [] : listings} 
        renderItem={renderItems}
        horizontal
        showsHorizontalScrollIndicator={false}
        />
    </View>
  )
}

// export default Listings;

const styles = StyleSheet.create ({
    item:{
        backgroundColor:Colors.white,
        padding:10,
        borderRadius:10,
        marginRight:20,
        width:220,
    },
    imge:{
        width:200,
        height:200,
        borderRadius:10,
        marginBottom:30,
    },
    heart:{
        position:'absolute',
        top:185,
        right:30,
        backgroundColor:Colors.primary,
        padding:10,
        borderRadius:30,
        borderWidth:2,
        borderColor:Colors.white
    },
    itemTxt:{
        fontSize:16,
        fontWeight:'600',
        color:Colors.black,
        marginBottom:10,
    },
    itemRatingTxt:{
        fontSize:12,
        margin:5,
    },
    itemPriceTxt:{
        fontSize:12,
        fontWeight:'600',
        color:Colors.primary,
        margin:5
    }
})