import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ClientNavigator } from '~/modules/Client/routes';

export const Router = () => {
  return (
    <NavigationContainer>
      <ClientNavigator />
    </NavigationContainer>
  );
};
