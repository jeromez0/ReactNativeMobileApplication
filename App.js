import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';
import { LoginScreen } from './src/LoginScreen';
import { SignupScreen } from './src/SignupScreen';



export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar stle = "auto"/>

      {/* <LoginScreen/> */}
      <SignupScreen></SignupScreen>

    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

