import React from 'react';
import { HomeScreen } from '../screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const BottomNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator headerMode="none">
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
};

export const ClientNavigator = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={BottomNavigator} />
    </Stack.Navigator>
  );
};
