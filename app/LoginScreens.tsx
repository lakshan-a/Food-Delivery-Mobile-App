import React from 'react';
import { View, Text, TextInput, StyleSheet, ImageBackground, TouchableOpacity,Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Link} from "expo-router";
import Colors from '@/constants/Colors';

export default function LoginScreen() {
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/images/home/home1.png')}
                style={styles.backgroundImage}
            >
                <View style={styles.overlay}>
                    <Text style={styles.signInText}>Sign In</Text>
                    <View style={styles.inputContainer}>
                        <Icon name="person-outline" size={20} color="#fff" style={styles.icon} />
                        <TextInput placeholder="Username" placeholderTextColor="#fff" style={styles.input} />
                    </View>
                    <View style={styles.inputContainer}>
                        <Icon name="lock-closed-outline" size={20} color="#fff" style={styles.icon} />
                        <TextInput placeholder="Password" placeholderTextColor="#fff" secureTextEntry style={styles.input} />
                    </View>
                    {/* <TouchableOpacity style={styles.loginButton}>
                        <Link href="/home">LOGIN</Link>
                    </TouchableOpacity> */}
                    <TouchableOpacity style={styles.btnContainer}>
                        <Link href="/home" style={styles.textBtn}>LOGIN</Link>
                    </TouchableOpacity>
                    <View style={styles.googleButton}>
                        <Image 
                            source={require('../assets/images/login/google-logo.png')} 
                            style={styles.googleLogo}
                        />
                        <Text style={styles.googleButtonText}>Sign up with Google</Text>
                    </View>
                    <Text style={styles.signUpText}>Don’t have an account? <Link href="/SingUpScreen" style={styles.signUpLink}>SingUp</Link></Text>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        width: 300,
        height: 370,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    btnContainer: {
        backgroundColor: Colors.primary,
        height: 40,
        width:150,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },
      textBtn:{
        color:Colors.white,
        fontSize:15,
        fontWeight: 'bold',
      },
    signInText: {
        fontSize: 30,
        color: '#fff',
        marginBottom: 20,
    },
    inputContainer: {
        width:220,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Colors.white,
        marginBottom: 20,
        borderWidth: 1,
        borderColor:  Colors.white,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        color: '#fff',
    },
    checkbox: {
        marginRight: 10,
    },
    rememberMeText: {
        color: '#fff',
    },
    forgotPasswordText: {
        color: '#fff',
        textDecorationLine: 'underline',
        top:10
    },
    signUpText: {
        color: '#fff',
        marginTop: 20,
    },
    signUpLink: {
        color: Colors.primary,
        fontWeight: 'bold',
    },
    googleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderWidth: 1,
        borderColor: Colors.white,
        borderRadius: 5,
        padding: 10,
        width: 220,
        marginBottom: 5,
        marginTop: 20,
    },
    googleLogo: {
        width: 20,
        height: 20,
        marginRight: 10,
    },
    googleButtonText: {
        color: Colors.white,
        fontSize: 16,
    }
});
