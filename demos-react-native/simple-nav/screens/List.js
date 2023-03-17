import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
  console.log('home page');
  
  return (
    <View style={styles.container}>
      <Text>List screen</Text>
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
