import { View, Text, ListRenderItem, FlatList, Image, StyleSheet } from 'react-native'
import React from 'react'
import { GroupType } from '@/types/groupType'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'

// const GroupListing =({}: {listing:GroupType}) => {
export default function GroupListing({listings}: {listings: GroupType[]}) {

    const renderItem:ListRenderItem<GroupType> = ({item}) => {
        return (
            <View style={styles.item}>
              <Image source={{uri:item.image}} style={styles.image}/>
              <View>
                <Text style={styles.itemTxt}>{item.name}</Text>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Ionicons name='star' size={20} color={Colors.primary}/>
                    <Text style={styles.itemRating}>{item.rating}</Text>
                    <Text style={styles.itemReview}>{item.revies}</Text>
                </View>
                </View>
            </View>
          )
    }

    return(
        <View style={{marginVertical:20}}>
            <Text style={styles.title}>Top Food in This Week</Text>
            <FlatList 
                data={listings} 
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                />
        </View>
    )

  
}

const styles = StyleSheet.create({
    title:{
        fontSize:20,
        fontWeight: '800',
        color:Colors.black,
        marginBottom:10,
    },
    item:{
        backgroundColor:Colors.white,
        padding:10,
        borderRadius:10,
        marginRight:20,
        flexDirection:'row',
        alignItems:'center',
    },
    image:{
        width:80,
        height:80,
        borderRadius:10,
        marginRight:10,
    },
    itemTxt:{
        fontSize:14,
        fontWeight:'600',
        color:Colors.black,
        marginBottom:10,
    },
    itemRating:{
        fontSize:14,
        fontWeight:'600',
        color:Colors.black,
        marginLeft:5,
    },
    itemReview:{
        fontSize:14,
        color:'#999999',
    }
})