import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity} from 'react-native';

export function LoginScreen() {
  return (
    <View style={styles.container}>


      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          width: 200,
          borderRadius: 10,
        }}/>
        
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          width: 200,
          marginTop: 25,
          borderRadius: 10,
        }}/>

        <TouchableOpacity
        style = {{
          height: 30,
          marginTop: 25,
          width: 200,
          backgroundColor: 'teal',
          borderRadius: 10,
        }}>
          <Text
          style = {{
            color: 'white',
            alignSelf: 'center',
          }}>Login</Text>
        </TouchableOpacity>
      
        <TouchableOpacity
        style = {{
          height: 30,
          marginTop: 25,
          width: 200,
          backgroundColor: 'orange',
          borderRadius: 10,
        }}>
          <Text
          style = {{
            color: 'white',
            alignSelf: 'center',
          }}>Sign Up</Text>
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

//   LoginButton:{

//   }

//   SignUpButton:{


//   }


});


export default LoginScreen;