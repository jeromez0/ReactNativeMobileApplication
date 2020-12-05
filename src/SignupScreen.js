import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput,TouchableOpacity} from 'react-native';

export function SignupScreen() {
  return (
    <View style={styles.container}>

      <Text>First name</Text>
      <TextInput style = {styles.inputForm}/>
        
      <TextInput style = {styles.inputForm}/>

      <TouchableOpacity style = {styles.registerButton}>
          <Text style = {{color: 'white',alignSelf: 'center',marginTop: 5}}>
            Register
          </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
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
  inputForm: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: 200,
    marginTop: 20,
    borderRadius: 20,
  },
  registerButton: {
    height: 40,
    marginTop: 25,
    width: 200,
    backgroundColor: 'teal',
    borderRadius: 25,
  },

});

export default SignupScreen;