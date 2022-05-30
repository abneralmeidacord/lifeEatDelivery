import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ClientNavigator } from '~/modules/Client/routes';
import { AuthNavigator } from '~/modules/Auth/routes';
import { ADMNavigator } from '~/modules/ADM/routes';
import { useAuthStore } from '~/services/store/useAuth';

export const Router = () => {
  const { navigationContainer } = useAuthStore()
  return (
    <NavigationContainer>
      {navigationContainer === 'client' && <ClientNavigator />}
      {navigationContainer === 'auth' && <AuthNavigator />}
      {navigationContainer === 'adm' && <ADMNavigator />}
    </NavigationContainer>
  );
};
