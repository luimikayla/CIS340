import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

  const csuLogo = {
    uri: "https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/Ram-Logo-Pantone-357-617-768x768.jpg"
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.localCSULogo}
        source={require('./assets/logo.jpg')}
      />
      <Image
        style={styles.urlCSULogo}
        source={{
          uri: 'https://brand.colostate.edu/wp-content/uploads/sites/47/2019/01/Ram-Logo-Pantone-357-617-768x768.jpg'
        }}
      />
      <Image 
      style={styles.stretchLogo}
      source={csuLogo}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    passingTop: 50,
  },

  localCSULogo: {
    width: 55,
    height: 65,
  },

  urlCSULogo: {
    width: 50, 
    height: 50,
  },

  stretchLogo: {
    width: 50,
    height: 200,
    resizeMode: 'contain',
  }
});
