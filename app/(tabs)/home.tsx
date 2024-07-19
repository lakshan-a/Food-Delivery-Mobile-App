import { StyleSheet, Text, TouchableOpacity, View, Image, TextInput, ScrollView} from 'react-native'
import React, { useState } from 'react'
import { Stack } from 'expo-router'
import {Ionicons} from "@expo/vector-icons";
import Colors from '@/constants/Colors';
import { useHeaderHeight } from '@react-navigation/elements'
import CategoryButtons from '@/components/CategoryButtons';
import Listings from '@/components/Listings';
import listingData from '@/data/destinations.json';
import GroupListings from '@/components/GroupListing';
import groupData from '@/data/groups.json'

const Page = () => {

    const headerHeight = useHeaderHeight();
    const [category, setCategory] = useState('All');

    const onCatChanged = (category: string) => {    
        console.log("Categpry:",category);
        setCategory(category);
    }

    return (
        <>
            <Stack.Screen options={{
                headerTransparent:true,
                headerTitle:"",
                headerLeft: () => (
                    <TouchableOpacity onPress={() => {}} 
                            style={{
                                marginLeft:20, 
                                marginBottom:20, 
                                backgroundColor:"rgba(255,127,54,0.5)",
                                borderRadius:10,
                                padding:4,
                                height:41,    
                            }}>
                        <View style={{backgroundColor:Colors.primary,padding:6,borderRadius:10}}>
                            <Ionicons name='person' size={20} color={Colors.white}/>
                        </View>
                    </TouchableOpacity>

                ),
                headerRight: () => (
                    <TouchableOpacity onPress={() => {}} style={{
                        marginRight:20, 
                        marginBottom:20, 
                        backgroundColor:"rgba(255,127,54,0.5)",
                        borderRadius:10,
                        padding:4,
                        height:41,    
                    }}>
                       <View style={{backgroundColor:Colors.primary,padding:6,borderRadius:10}}>
                            <Ionicons name='notifications' size={20} color={Colors.white}/>
                        </View>
                    </TouchableOpacity>
                ),

            }}/>
            
            <View style={{}}>
                <Image source={require('../../assets/images/home/home1.png')}
                    style={styles.menuImage}
                />
            </View>

            <View style={[styles.container,{paddingTop:headerHeight}]}>
    
                    <Text style={styles.headingTxt}>Welcome...</Text>
                    <View style={styles.searchSectionWrapper}>
                        <View style={styles.search}>
                            <Ionicons name='search' size={18} style={{marginRight:10}} color={Colors.black}/>
                            <TextInput placeholder='Search...'/>
                        </View>
                        <TouchableOpacity onPress={() => {}} style={styles.filterBtn}>
                            <Ionicons name='options' size={28} color={Colors.white}/>
                        </TouchableOpacity>
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                    <CategoryButtons onCagtegoryChanged={onCatChanged}/>
                    <Listings listings={listingData} category={category}/>
                    <GroupListings listings={groupData}/>

                    {/* <GroupListing listings={groupData}/> */}
                    </ScrollView>
            </View>
        </>
    )
}

export default Page

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:20,
        backgroundColor:Colors.bgColor,
    },
    menuImage:{
        width:360, 
        height:210, 
        top:-10,
        borderBottomLeftRadius:50,
        borderBottomRightRadius:50,
        // position:'absolute'
      },
    headingTxt:{
        fontSize:28,
        fontWeight:'800',
        color:Colors.black,
        marginTop:-223,
    },
    searchSectionWrapper:{
        flexDirection:'row',
        marginVertical:27,
        marginTop:10,
    },
    search: {
        flex:1,
        flexDirection:'row',
        backgroundColor:Colors.white,
        padding:16,
        borderRadius:10,
        height:54
    },
    filterBtn:{
        backgroundColor:Colors.primary,
        padding:12,
        borderRadius:10,
        marginLeft:20
    }
})