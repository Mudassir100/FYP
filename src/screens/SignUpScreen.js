import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NameBar from '../components/NameBar';
import LastNameBar from '../components/LastNameBar';
import EmailBar from '../components/EmailBar';
import PasswordBar from '../components/PasswordBar';
import RetypePasswordBar from '../components/RetypePasswordBar';
import SignUpSubmitBar from '../components/SignUpSubmitBar';

const SignUpScreen = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');
    
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

        <SignUpSubmitBar onTermSubmit = {() => {console.log("Clicked...");}}/>
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
