import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NameBar from '../components/NameBar';
import LastNameBar from '../components/LastNameBar';
import EmailBar from '../components/EmailBar';
import PasswordBar from '../components/PasswordBar';
import RetypePasswordBar from '../components/RetypePasswordBar';
import SignUpSubmitBar from '../components/SignUpSubmitBar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';


const SignUpScreen = ({navigation}) => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');

    const signUp = (email, password) => {
        auth()
          .createUserWithEmailAndPassword(email, password)
          .then(() => {
            navigation.navigate('DashBoard');
//            console.log(navigation);
          })
          .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
              console.log('That email address is invalid!');
            }

            console.error(error);
          });
          }

    return (
    <View style = {styles. background}>
        <Text style = {styles.headingStyle}>Sign up</Text>
        <NameBar 
        term = {name} 
        onTermChange = { (newName) => {setName(newName)}}
        onTermSubmit = {() => { console.log("term submitted");}}
        />
        {/* <Text> {name} </Text> */}

        <LastNameBar 
        term = {lastName} 
        onTermChange = { (newLastName) => {setLastName(newLastName)}}
        onTermSubmit = {() => { console.log("Last term submitted");}}
        />
        {/* <Text> {lastName} </Text> */}

        <EmailBar
        term = {email} 
        onTermChange = { (newEmail) => {setEmail(newEmail)}}
        onTermSubmit = {() => { console.log("Email term submitted");}}
        />
        {/* <Text>{email}</Text> */}
        

        <PasswordBar
        term = {password} 
        onTermChange = { (newPassword) => {setPassword(newPassword)}}
        onTermSubmit = {() => { console.log("Password term submitted");}}
        />

        <RetypePasswordBar
        term = {retypePassword} 
        onTermChange = { (newRetypePassword) => {setRetypePassword(newRetypePassword)}}
        onTermSubmit = {() => { console.log("Re-type Password term submitted");}}
        />

        <SignUpSubmitBar onTermSubmit = {() => {signUp(email, password)}}/>
    </View>
    )
}

const styles = StyleSheet.create({
        background:{
        borderWidth : 2,
        borderColor: 'black',
        height: 500,
        marginVertical: 100,
        justifyContent: 'space-between',
        
    },
    headingStyle:{
        fontSize:24,
        fontWeight: 'bold',
        marginBottom: 10        
    }
});

export default SignUpScreen;
