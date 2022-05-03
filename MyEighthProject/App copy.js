import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const [count, setCout] = useState(0);

const onTap = () => setCout(count => count + 1);

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.counterText}>
        <Text> Tap Counter: {count} </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={onTap} >
      <Text> Touch Me </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: "#778899"
  },

  button: {
    alignItems: "center",
    backgroundColor: "#F0FFFF",
    padding: 10
  },

  counterText: {
    alignItems: "center",
    padding: 10
  }
});
