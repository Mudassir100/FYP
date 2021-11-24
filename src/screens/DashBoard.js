import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';

const DashBoard = ({navigation}) => {

    const signOut = () => {
       auth()
      .signOut()
      .then(() => console.log('User signed out!'));
      navigation.navigate('Home');

    }

    return (
    <View style = {styles. background}>
        <Text style = {styles.headingStyle}>DashBoard Screen</Text>
        <Button title = "Log Out"
                onPress = {() => {{console.log("Successfully logged out...")}
                signOut()
                }}
                />
        </View>
    )


}

const styles = StyleSheet.create({
        background:{
        borderWidth : 2,
        borderColor: 'black',
        height: 500,

    },
    headingStyle:{
        fontSize:24,
        fontWeight: 'bold',
        marginBottom: 10
    }
});

export default DashBoard;
