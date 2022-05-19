import React from 'react';
import {
  Text,
  DateList,
  ScreenContainer,
  Box,
  OrderCard,
  Touchable,
} from '~/components';
import { useNavigation } from '@react-navigation/native';

export const HomeScreen = () => {
  const navigation = useNavigation();

  const goToOrderDetail = () => {
    navigation.navigate('OrderDetail');
  };

  return (
    <ScreenContainer
      withAvatar
      subtitle="24 de Janeiro de 2022"
      title="Olá, Lucas!">
      <Text.ScreenTitle ml={20} mt={24} mb={16}>
        Próximos pedidos
      </Text.ScreenTitle>
      <DateList />
      <Box mt={12} alignItems="center">
        <Touchable onPress={goToOrderDetail}>
          <OrderCard waiting />
        </Touchable>
        <Touchable>
          <OrderCard mt={12} waiting />
        </Touchable>
      </Box>
    </ScreenContainer>
  );
};
