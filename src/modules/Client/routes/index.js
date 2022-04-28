import React from 'react';
import {
  HomeScreen,
  CartScreen,
  HistoryScreen,
  ProfileScreen,
} from '../screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomBar } from '~/components';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const BottomNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBar={props => <BottomBar {...props} />}
      screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export const ClientNavigator = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={BottomNavigator} />
    </Stack.Navigator>
  );
};
