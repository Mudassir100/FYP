import React from 'react';
import {View, StyleSheet, Button} from 'react-native';

const SignUpSubmitBar = ({onTermSubmit}) => {
    return(
    <View style ={styles.backgroundStyle}>
        <Button title = "Sign Up"
        onPress = {() => {onTermSubmit()}}
        />
    </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle:{
        backgroundColor: '#F0EEEE',
        borderRadius: 7,
        height: 50,
  
    },
});

export default SignUpSubmitBar;
