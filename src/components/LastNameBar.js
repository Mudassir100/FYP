import React from 'react';
import {View, StyleSheet, TextInput} from 'react-native';

const LastNameBar = ({term, onTermChange, onTermSubmit}) => {
    return(
    <View style ={styles.backgroundStyle}>
        <TextInput
        style = {styles.inputStyle}
        autoCapitalize = 'none'
        autoCorrect = {false} 
        placeholder = "Last Name"
        value = {term}
        onChangeText = {newTerm => onTermChange(newTerm)}
        onEndEditing = { () => onTermSubmit()}
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

export default LastNameBar;
