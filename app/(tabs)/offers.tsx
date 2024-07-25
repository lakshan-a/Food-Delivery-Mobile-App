import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Animated,
  Dimensions,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import { Stack } from 'expo-router'
import { Ionicons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import {Link} from "expo-router";
import tw from 'twrnc';
import Colors from "@/constants/Colors";
import { useHeaderHeight } from '@react-navigation/elements'



// import { BlurView } from "expo-blur";

const data = [
  {
    title: "Cheese Pizza",
    price: "Rs.1200.00",
    image: "../../assets/images/offers/offers01.png",
  },
  {
    title: "Turkey Burger",
    price: "Rs.1500.00",
    image: "../../assets/images/offers/offers02.png",
  },
//   {
//     title: "Potato Fries",
//     price: "Rs.500.00",
//     image: "https://images.unsplash.com/photo-1606755456206-b25206cde27e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Fried Chicken",
//     price: "Rs.950.00",
//     image: "https://images.unsplash.com/photo-1562967916-eb82221dfb92?q=80&w=1372&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     title: "Coca Cola",
//     price: "Rs.300.00",
//     image: "https://images.unsplash.com/photo-1594971475674-6a97f8fe8c2b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },

];

const { height } = Dimensions.get("window");

export default function offers() {
  const [liked, setLiked] = useState(Array(data.length).fill(false));

      const headerHeight = useHeaderHeight();


  const handleLike = (index: number) => {
    const newLiked = [...liked];
    newLiked[index] = !newLiked[index];
    setLiked(newLiked);
  };
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const [quantities, setQuantities] = useState(Array(data.length).fill(0));

  const [notificationsVisible, setNotificationsVisible] = useState(false);

  const slideAnim = useRef(new Animated.Value(-height)).current;

  const incrementQuantity = (index: any) => {
    const newQuantities = [...quantities];
    newQuantities[index]++;
    setQuantities(newQuantities);
  };

  const decrementQuantity = (index: any) => {
    if (quantities[index] > 0) {
      const newQuantities = [...quantities];
      newQuantities[index]--;
      setQuantities(newQuantities);
    }
  };

  const handleAddToCart = () => {
    // Handle action for "Add to Cart"
    navigation.navigate("Cart"); // Replace with actual navigation logic
  };

  const handleNotificationForYou = () => {
    setNotificationsVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeNotifications = () => {
    Animated.timing(slideAnim, {
      toValue: -height,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setNotificationsVisible(false));
  };

  return (
    <>
    <Stack.Screen options={{
                headerTransparent:true,
                headerTitle:""
    }}/>
    <View style={styles.container}>
        <Image source={require('../../assets/images/home/home1.png')}
            style={styles.menuImage}
          />

        <View style={tw`px-4 mt-7 flex-row justify-between item-center`}>
            <TouchableOpacity onPress={() => {}} 
                    style={{
                        marginLeft:-15, 
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
            <View style={styles.location}>
                <Ionicons name='location' color={Colors.primary} size={28}/>
                <Text style={tw`text-base font-semibold`}>Sri Lanka,Matara</Text>
            </View>
            <TouchableOpacity onPress={() => {}} style={{
                marginRight:-15, 
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
          </View>

        <View style={styles.searchSectionWrapper}>
            <View style={styles.search}>
                <Ionicons name='search' size={18} style={{marginRight:5}} color={Colors.black}/>
                <TextInput placeholder='Search...'/>
            </View>
            <TouchableOpacity onPress={() => {}} style={styles.filterBtn}>
                <Ionicons name='options' size={28} color={Colors.white}/>
            </TouchableOpacity>
        </View>

      <ScrollView style={styles.itemsbox} showsVerticalScrollIndicator={false}>
        {data.map((item, index) => (
          <View key={index} style={styles.menuItem}>
            <Image  source={{uri:item.image}}  style={styles.menuItemImage} />
          </View>
          
        ))}
    

            <View style={{marginTop:40}}></View>
           
      </ScrollView>

      


    </View>
    </>
    
  );
}

const styles = StyleSheet.create({
  menuImage:{
    width:360, 
    height:210, 
    top:-10,
    borderBottomLeftRadius:50,
    borderBottomRightRadius:50,
    position:'absolute'
  },
  heartIcon: {
    right: 25,
    bottom: 45,
  },
  quantity: {
    fontWeight: "bold",
    marginLeft: 10,
    marginTop: 0,
    borderWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  addButton: {
    backgroundColor: "#FFAF32",
    paddingHorizontal: 10,
    height:30,
    // paddingVertical: 5,
    borderRadius: 5,
    marginRight: 10,
  },
  removeButton: {
    backgroundColor:Colors.primary,
    paddingHorizontal: 10,
    height:30,
    // paddingVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: Colors.white,
    fontWeight: "bold",
    top:5,
  },

  itemsbox: {
    width: "100%",
    height: 300,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 0,
  },

  menuItem: {
    top: 20,
    // flexDirection: "row",
    justifyContent:'space-between',
    // height: 100,
    alignItems: "center",
    marginBottom: 20,
    // backgroundColor: "#fff",
    // padding: 10,
    // borderRadius: 10,
    // shadowColor: "#000",
    // shadowOpacity: 0.1,
    // shadowRadius: 10,
    // shadowOffset: { width: 0, height: 5 },
    // elevation: 3,
  },
  menuItemImage: {
    width: 180,
    height: 180,
    borderRadius: 10,
    marginRight: 10,
  },

  menuItemTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  menuItemPrice: {
    fontSize: 14,
    color: "#777",
  },
  container: {
    flex:1,
    paddingHorizontal:20,
    
  },

  navBar: {
    backgroundColor: Colors.primary,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: "#f0f0f0",
  },
  notificationsContainer: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
  },
  btnBuy:{
    backgroundColor:Colors.primary,
    width:200,
    height:50,
    borderRadius:10,
    top:20,
    bottom:50,
    alignItems:'center',
  },
  btnDelete:{
    backgroundColor:'#B43225',
    width:110,
    height:50,
    borderRadius:10,
    top:20,
    // bottom:50,
    alignItems:'center',
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
},
notficationIcon:{
    backgroundColor:Colors.white,
    padding:10,
    marginBottom:20,
    borderRadius:10,
    shadowColor:'#171717',
    shadowOffset:{width:2,height:4},
    shadowOpacity:0.2,
    shadowRadius:3,
    left:15
},
location:{
    flexDirection:'row',
    alignItems:'center',
    bottom:10,
}
});
