import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

const RetypePasswordBar = ({term, onTermChange, onTermSubmit}) => {
    return(
    <View style ={styles.backgroundStyle}>
        <TextInput
        style = {styles.inputStyle}
        autoCapitalize = 'none'
        autoCorrect = {false}
        secureTextEntry = {true}
        placeholder = "Re-type Password"
        value = {term}
        onChangeText = {onTermChange}
        onEndEditing = {onTermSubmit}
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
    inputStyle:{
        paddingHorizontal: 10, 
    }
});

export default RetypePasswordBar;
