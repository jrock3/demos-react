import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function Home({ navigation }) {
  console.log('home page');
  
  return (
    <View style={styles.container}>
      <Text style={{ color: 'teal', fontSize: '18px', fontWeight: 'bold' }}>Welcome</Text>
      <Image resizeMode="contain" source={require('../assets/animal.jpeg')} style={{ height: "200px", width: "100%" }} />
      <Button
        color="teal"
        title="Go to list screen"
        titleStyle={{ fontSize: '25px' }}
        onPress={() => navigation.navigate('List')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
