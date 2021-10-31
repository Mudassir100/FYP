import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import EmailBar from '../components/EmailBar';
import PasswordBar from '../components/PasswordBar';
import LogInSubmitBar from '../components/LogInSubmitBar';
import SignUpSubmitBar from '../components/SignUpSubmitBar';

const LogInScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return (
    <View style = {styles. background}>
        <Text style = {styles.headingStyle}>Log In</Text>
        
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

        <LogInSubmitBar onTermSubmit = {() => {console.log("Clicked...");}}/>

        <Text style = {styles.TextStyle}> OR </Text>
        
        <SignUpSubmitBar onTermSubmit = {() => {console.log("Clicked...");}}/>

        <Text style = {styles.TextStyle}> Are you a Mechanic? </Text>

        <Button title = "Join Now" onPress = {() => {console.log("Joined as a Mechanic...");}}/>

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
    },
    TextStyle:{
        alignSelf:'center'
    }
});

export default LogInScreen;
