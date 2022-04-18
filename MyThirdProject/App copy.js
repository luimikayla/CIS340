import React from 'react';
import { Text, TextInput, View } from 'react-native';

function Student(props) {
  return (
    <View>
      <Text>Hey, I am {props.name}, I am a student in CIS340!</Text>
    </View>
  );
}

export default function MultiComp() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'Center',
      alignItems: 'Center'
    }}>
      <Text>
        Welcome to CIS340!
      </Text>
      <Student name="Mikayla Lui"/>
      <Student name="Rylee Zurbrigen"/>
      <Student name="Brooke Stencel"/>
      <Student name="Jacy Pringle"/>
    </View>
  )
}
