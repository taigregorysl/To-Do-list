import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function detail({navigation}) {
    let item = navigation.getParam('item');
    return (
        
      <View>
        <Text>{item.name}</Text>
        <Text>{item.description}</Text>
        <Text>{item.place}</Text>
      </View>
    );
  }
