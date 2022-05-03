import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker'//Import

export default function App() {

  let openImagePickerAsync = async () => {

    let permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("Permission is required!");
      return; 
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
  }
  return (
    <View style={styles.container}>
      <Image source={{uri: 'http://csurams.com/images/logos/site/site.png'}}
        style={styles.logo} />
      <Text style={styles.insts}>
        Press the button below to select an image on your phone!
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={openImagePickerAsync} >
      <Text style={styles.buttonText}> Pick Image </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#778899"
  },

  button: {
    backgroundColor: "#F0FFFF",
    padding: 10,
    borderRadius: 5
  },

  insts: {
    fontSize: 18,
    color: "87CEFA",
    marginHorizontal: 15,
    marginBottom: 10,
  },

  logo: {
    width: 305,
    height: 300,
    marginBottom: 20
  },

  buttonText: {
    fontSize: 20,
    color: "#fff"
  }
});
