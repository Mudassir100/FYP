import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import SignUpScreen from './src/screens/SignUpScreen';
import LogInScreen from './src/screens/LogInScreen';


export default function App() {
  return (
    
    <View style={styles.container}>
      <LogInScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});
