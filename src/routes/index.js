import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ClientNavigator } from '~/modules/Client/routes';
import { AuthNavigator } from '~/modules/Auth/routes';


export const Router = () => {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
};
