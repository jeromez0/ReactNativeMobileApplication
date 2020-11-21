import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';

export function SignupScreen() {
  return (
    <View style={styles.container}>


      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          width: 200,
          borderRadius: 25,
        }}/>
        
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          width: 200,
          marginTop: 25,
          borderRadius: 25,
        }}/>

        <TouchableOpacity
        style = {{
          height: 30,
          marginTop: 25,
          width: 200,
          backgroundColor: 'teal',
          borderRadius: 25,
        }}>
          <Text
          style = {{
            color: 'white',
            alignSelf: 'center',
          }}>Register</Text>
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
});

export default SignupScreen;