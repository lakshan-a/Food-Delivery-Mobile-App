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
import { Ionicons } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { ParamListBase, useNavigation } from "@react-navigation/native";
import {Link} from "expo-router";
import tw from 'twrnc';
import COLORS from "./consts/colors";


// import { BlurView } from "expo-blur";

const data = [
  {
    title: "Pizza",
    price: "Rs.1500",
    image: require("../assets/images/pizzza.png"),
  },
  {
    title: "chicken",
    price: "Rs.1200",
    image: require("../assets/images/home/home2.png"),
  },

];

const { height } = Dimensions.get("window");

export default function cart() {
  const [liked, setLiked] = useState(Array(data.length).fill(false));

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
    <View style={styles.container}>
        <Image source={require('../assets/images/home/home1.png')}
          // style={tw`w-full absolute-top-5 opacity-10`}
          style={{width:600, height:160, position:'absolute', borderBottomLeftRadius:50,borderBottomRightRadius:50,right:-100,top:1}}
        />

        <View style={tw`px-4 mt-7 flex-row justify-between item-center`}>
            <Image source={require('../assets/images/profile-user.png')}
              style={tw`h-9 w-9 rounded-full`}
            />
            <View style={tw`flex-row items-center space-x-2`}>
            <Image source={require('../assets/images/pin.png')}
              style={tw`h-7 w-6 rounded-full`}
            />
              {/* <MapPinIcon size="25" color={COLORS.primary}/> */}
              <Text style={tw`text-base font-semibold`}>Sri Lanka,Mtara</Text>
            </View>
              <Image source={require('../assets/images/notification.png')}
                style={tw`h-6 w-6 rounded-full`}
              />
            {/* <BellIcon size="27" color="black"/> */}
          </View>

        <View style={tw`mx-5 mt-0`}>
          <View style={tw`mt-5 flex-row justify-center item-center rounded-full p-1 bg-[#e6e6e6]`}>  
            <TextInput placeholder='Search' style={tw`ml-5 flex-1 font-sembibold text-gray-700`}/>
            <TouchableOpacity style={{backgroundColor:COLORS.primary,borderRadius:30, width:50, height:50,left:-2}}>
              {/* <MagnifyingGlassIcon size="25" strokeWidth={2} color="white"/> */}
              <Image source={require('../assets/images/magnifying-glass.png')}
                // style={tw`h-7 w-6 rounded-full`}
                style={{width:25,height:25, top:10,right:-14}}
              />
            </TouchableOpacity>
          </View>
        </View>
      {/* Header */}
      {/* <View style={styles.header}>
        <View style={styles.profileSection}>
          <Image
            // source={require("../../assets/img.jpg")}
            style={styles.profileImage}
          />
          <Text style={styles.location}>Kalutara, Panadura</Text>
        </View>
        <Ionicons
          name="notifications-outline"
          size={24}
          color="black"
          onPress={handleNotificationForYou}
        />
      </View> */}

      {/* Filters */}

      <ScrollView style={styles.itemsbox}>
        {data.map((item, index) => (
          <View key={index} style={styles.menuItem}>
            <Image source={item.image} style={styles.menuItemImage} />
            <View>
              <Text style={styles.menuItemTitle}>{item.title}</Text>
              <Text style={styles.menuItemPrice}>{item.price}</Text>
              <View style={styles.buttonsContainer}>
                <TouchableOpacity
                  style={styles.addButton}
                  onPress={() => incrementQuantity(index)}
                >
                  <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.removeButton}
                  onPress={() => decrementQuantity(index)}
                >
                  <Text style={styles.buttonText}>Remove</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{quantities[index]}</Text>
                <TouchableOpacity onPress={() => handleLike(index)}>
                  <Ionicons
                    name={liked[index] ? "heart" : "heart-outline"}
                    size={24}
                    color={liked[index] ? "red" : "#000"}
                    style={styles.heartIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>


      {/* <View style={styles.menuItems}></View> */}

      <View style={styles.navBar}>
        <TouchableOpacity>
          <Link href="/home">
          <Ionicons
            name="home-outline"
            size={24}
            color="white"
            onPress={() => navigation.navigate("Notification")}
          /></Link>
        </TouchableOpacity>
        <Ionicons
          name="basket-outline"
          size={24}
          color="white"
          onPress={() => navigation.navigate("Notification")}
        />
        <Ionicons
          name="person-outline"
          size={24}
          color="white"
          onPress={() => navigation.navigate("Profile")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  heartIcon: {
    left: 60,
    bottom: 20,
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
    paddingVertical: 5,
    borderRadius: 5,
    marginRight: 10,
  },
  removeButton: {
    backgroundColor:COLORS.primary,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: "bold",
  },

  itemsbox: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 20,
  },

  menuItem: {
    top: 20,
    flexDirection: "row",
    height: 100,
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 3,
  },
  menuItemImage: {
    width: 80,
    height: 80,
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
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  navBar: {
    backgroundColor: COLORS.primary,
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
    // maxHeight: "70%",
    // bottom: 200,
    // width: "97%",
    // height: 470,
    // left: 7,
  },
});
