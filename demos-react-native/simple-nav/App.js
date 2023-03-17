import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import List from './screens/List';

const Stack = createNativeStackNavigator();

export default function App() {
  console.log('app executed');
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        <Stack.Screen
          name="List"
          component={List}
          options={{title: 'List'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
