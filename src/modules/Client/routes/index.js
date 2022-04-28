import React from 'react';
import {
  HomeScreen,
  CartScreen,
  HistoryScreen,
  ProfileScreen,
} from '../screens';
import { BottomBar } from '~/components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const BottomNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator tabBar={props => <BottomBar {...props} />} headerMode="none">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Cart" component={CartScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
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
