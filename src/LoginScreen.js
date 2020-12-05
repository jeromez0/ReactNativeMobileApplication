import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';

export function LoginScreen() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <Text>Username</Text>
      <TextInput style = {styles.usernameInput}/>

      <Text>Password</Text>
      <TextInput style = {styles.usernameInput}/>

      <TouchableOpacity style = {styles.loginButton}>
        <Text style = {{color: 'white', marginTop: 5}}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style = {styles.signUpButton}>
        <Text style = {{color: 'white', marginTop: 5}}>Sign Up</Text>
      </TouchableOpacity>

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
  usernameInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 200,
    borderRadius: 10,
  },
  loginButton: {
    height: 40,
    width: 200,
    backgroundColor: 'teal',
    borderWidth: 2,
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
    borderRadius: 20,
    borderColor: 'grey',
  },
  signUpButton: {
    height: 40,
    width: 200,
    backgroundColor: 'skyblue',
    borderWidth: 2,
    marginBottom: 20,
    alignItems: 'center',
    borderRadius: 20,
    borderColor: 'grey',
  }
});


export default LoginScreen;
