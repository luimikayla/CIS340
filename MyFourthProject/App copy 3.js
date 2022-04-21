import React from 'react';
import { Text, Image, ScrollView } from 'react-native';

  const dog = {
    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm--OTFbGraHEpOHWr0eW2gDn25IBhRfgqKeflwLtwO0n6ft09PdG8_W0V9HPaSMSAZOE&usqp=CAU',
    width: 64,
    height: 64
  };

export default MyScrollViewApp = () => (
    <ScrollView style={{padding: 40}}>
      <Text style={{fontSize: 10}}> Try to scroll down </Text>
      <Image source={require('./assets/dog.jpg')} style={{width: 80, height: 80}} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Text style={{fontSize: 80}}> Try to scroll down again, if you like </Text>
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Text style={{fontSize: 80}}> Try to scroll down again, if you like </Text>
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Text style={{fontSize: 80}}> Try to scroll down again, if you like </Text>
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Text style={{fontSize: 80}}> React Native Components! </Text>
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
      <Image source={dog} />
    </ScrollView>
  );


